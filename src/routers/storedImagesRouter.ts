import { Router } from "express";
import { StoredImagesService, IFile } from "../services/dataServices/index.js";
import { multiImagePost } from "./utils/imageHandler.js";
import { dummyBody } from "./utils/dummyBody.js";


export function StoredImagesRouter(imageService = StoredImagesService()): Router {
    const router = Router();

    router.post('/upload', multiImagePost('images'), async (req, res, next) => {
        try {
            console.log('[POST /upload]', req.files);
            
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
            next(error);
        }
    });

    return router;
}
