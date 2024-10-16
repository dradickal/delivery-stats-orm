import { Router } from "express";
import { spawn } from "node:child_process";
import { ActivityImagesService, IFile, GetActivityImagesParams } from "../services/dataServices/index.js";
import { multiImagePost } from "./utils/imageHandler.js";
import { dummyBody } from "./utils/dummyBody.js";
import { ServiceDict } from "./utils/ServiceDict.js";
import { UniqueConstraintViolationException } from "@mikro-orm/mysql";



export function ActivityImagesRouter(imageService = ActivityImagesService()): Router {
    const router = Router();

    router.post('/upload', multiImagePost('images'), async (req, res, next) => {
        try {
            console.log('[POST /activity/upload]', req.files);
            
            const files = req.files as IFile[];

            const { serviceId, associatedDate, userDefinedTimes	} = req.body;
            const data = await imageService.postActivityImages({ 
                files, 
                serviceId, 
                associatedDate,
                userDefinedTimes: JSON.parse(userDefinedTimes),
            });
            
            const body = dummyBody(req, data);

            res.status(200).json(body);
        } catch (error) {
            console.log(error);
            if(error instanceof UniqueConstraintViolationException) {
                const msg = error.sqlMessage as string;
                const file = msg.match(/Duplicate entry '(?<name>[\w_\-\.]+)'/i)
                res.status(400).json({
                    code: error.code,
                    message: 'A duplicate file was included in the upload.',
                    data: {
                        fileName: file?.groups?.name || 'unknown',
                    }
                });
            } else {
                next(error);
            }
        }
    });

    router.get('/stored', async (req, res, next) => {
        try {
            const queries = req.query as unknown as GetActivityImagesParams;
            const data = await imageService.getActivityImages(queries)
            console.log('[GET image/stored]', req.query);
            res.status(200).json({
                message: '/image/stored',
                images: data
            });
        } catch (error) {
            next(error);
        }
    });

    router.get('/date', async (req, res, next) => {
        try {
            const data = await imageService.getActivityDates();
            res.status(200).json({
                message: 'success',
                data: {
                    activityDates: data,
                }
            });
        } catch (error) {
            next(error);
        }
    
    });

    router.get('/ocr', async (req, res, next) => {
        try {
            const { service, date, processed } = req.query;
            const params: GetActivityImagesParams  = {
                serviceId: ServiceDict.get(service as string) as number,
                associatedDate: new Date(date as string),
                processed: processed === 'true', 
            };
            const images = await imageService.getActivityImages(params);

            images.forEach(image => {
                let ocrResponse:string;
                const python = spawn('python', ['script.py', image.filepath]);
                // collect data from script
                python.stdout.on('data', function (data) {
                    console.log('Pipe data from python script ...');
                    ocrResponse = data.toString();
                });
                // in close event we are sure that stream from child process is closed
                python.on('close', (code) => {
                    console.log(`child process close all stdio with code ${code}`);
                });
            });            

            res.status(200).json({
                message: 'success',
                data: {
                    activityImages: images,
                }
            });
        } catch (error) {
            next(error);
        }
    });

    return router;
}
