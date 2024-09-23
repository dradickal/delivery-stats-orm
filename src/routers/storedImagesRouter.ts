import { Router } from "express";
import { StoredImagesService, IFile } from "../services/dataServices/index.js";
import { multiImagePost } from "./utils/imageHandler.js";
import { dummyBody } from "./utils/dummyBody.js";
import { UniqueConstraintViolationException } from "@mikro-orm/mysql";


export function StoredImagesRouter(imageService = StoredImagesService()): Router {
    const router = Router();

    router.post('/upload', multiImagePost('images'), async (req, res, next) => {
        try {
            console.log('[POST /image/upload]', req.files);
            
            const files = req.files as IFile[];

            const { serviceId, associatedDate, userDefinedTimes	} = req.body;
            const data = await imageService.postStoredImages({ 
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
        const { processed = false } = req.query;
        try {
            console.log('[GET image/stored]', req.query);
            res.status(200).json({
                message: '/images/stored',
                processed
            })
        } catch (error) {
            next(error);
        }
    });
    return router;
}
