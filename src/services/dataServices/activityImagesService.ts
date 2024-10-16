import { isPromise } from "util/types";
import { getEntityServices } from "../../db.js";
import { Loaded, PlainObject, ref } from "@mikro-orm/core";
import { ActivityImage } from "../../entities/index.js";

export interface IFile {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    size: number;
    destination: string;
    filename: string;
    path: string;
}

type Time = string;
type FileName = string;

type PostActivityImagesParams = {
    files: Array<IFile>,
    serviceId: number,
    associatedDate: Date,
    userDefinedTimes: {[k: FileName]: Time}
};

export type GetActivityImagesParams = {
    serviceId: number,
    processed: boolean,
    associatedDate: Date,
}

export interface IActivityImagesService {
    postActivityImages(formInput: PostActivityImagesParams): Promise<PlainObject>,
    getActivityImages(queries: GetActivityImagesParams): Promise<Loaded<ActivityImage>[]>,
    getActivityDates():Promise<PlainObject>,
}

export function ActivityImagesService (db = getEntityServices()): IActivityImagesService {
    const em = db.entityManager;
    const repository = db.activityImage;
    const serviceRepository = db.service;

    console.log(`[ActivityImagesService] context-specific em-ID: ${em.id || 'TEST'}`);
    
    async function postActivityImages(formInput: PostActivityImagesParams):Promise<PlainObject> {
        console.log(`[ActivityImagesService:postActivityImage] context-specific em-ID: ${em.id || 'TEST'}`);
        
        const {files, serviceId, associatedDate, userDefinedTimes} = formInput;
        const service = await serviceRepository.findOneOrFail({ id: serviceId });
        for (const file of files) {
            repository.create({
                filename: file.filename, 
                filepath: file.path, 
                originalName: file.originalname,
                userDefinedTime: userDefinedTimes[file.originalname],
                associatedDate, 
                service,
            });
        }
        await em.flush();

        return {
            message: `Successfully stored ${files.length} images.`,
        };
    }

    async function getActivityImages(queries: GetActivityImagesParams): Promise<Loaded<ActivityImage>[]> {
        console.log(`[ActivityImagesService:getActivityImage] context-specific em-ID: ${em.id || 'TEST'}`);
        const where = {
            service: queries.serviceId,
            associatedDate: queries.associatedDate,
        };

        const filters = {
            waitingOCR: !queries.processed,
            isProcessed: queries.processed,
        }

        return repository.find(where, { filters });
    }

    async function getActivityDates() {
        return repository.listActivityDates({}, {});
    }

    return {
        postActivityImages,
        getActivityImages,
        getActivityDates,
    }
}