import { Router } from "express";
import { ActivityImagesService, IFile, GetActivityImagesParams } from "../services/dataServices/index.js";
import { multiImagePost } from "./utils/imageHandler.js";
import { dummyBody } from "./utils/dummyBody.js";
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
        const queries = req.query as unknown as GetActivityImagesParams;
        const data = await imageService.getActivityImages(queries)
        try {
            console.log('[GET image/stored]', req.query);
            res.status(200).json({
                message: '/image/stored',
                images: data
            })
        } catch (error) {
            next(error);
        }
    });

    router.get('/date', async (req, res, next) => {
        const data = await imageService.getActivityDates();
        res.status(200).json({
            message: 'success',
            data: {
                activityDates: data,
            }
        })
    })
    return router;
}
