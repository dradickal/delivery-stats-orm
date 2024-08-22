import { Router } from "express";
import { StoredImagesService, IFile } from "../services/dataServices/index.js";
import { multiImagePost } from "./utils/imageHandler.js";
import { dummyBody } from "./utils/dummyBody.js";


export function StoredImagesRouter(imageService = StoredImagesService()): Router {
    const router = Router();

    router.post('/upload', multiImagePost('images'), async (req, res) => {
        console.log('[POST /upload]', req.files);
        
        const files = req.files as IFile[];

        const { serviceId, associatedDate } = req.body;
        const data = await imageService.postStoredImages({ files, serviceId, associatedDate });
        
        const body = dummyBody(req, data);

        res.status(200)
        .setHeader("Access-Control-Allow-Origin", "*")
        .setHeader("Access-Control-Allow-Methods", "GET,POST")
        .json(body);
    });

    return router;
}
