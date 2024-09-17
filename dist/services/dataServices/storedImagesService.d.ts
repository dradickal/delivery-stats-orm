import { PlainObject } from "@mikro-orm/core";
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
interface PostStoredImagesParams {
    files: Array<IFile>;
    serviceId: number;
    associatedDate: Date;
    userDefinedTimes: {
        [k: FileName]: Time;
    };
}
export interface IStoredImagesService {
    postStoredImages(formInput: PostStoredImagesParams): Promise<PlainObject>;
}
export declare function StoredImagesService(db?: import("../../db.js").EntityServices): IStoredImagesService;
export {};
