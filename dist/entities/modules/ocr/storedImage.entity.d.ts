import { OptionalProps, Ref } from "@mikro-orm/core";
import { ServiceLabel } from "../common/service.label.entity.js";
export declare class StoredImages {
    [OptionalProps]?: 'uploadDate' | 'processedDate' | 'activityLabel' | 'ocrResults';
    uuid: string;
    filename: string;
    filepath: string;
    originalName: string;
    associatedDate: Date | null;
    userDefinedTime: string | null;
    uploadDate: Date;
    service: Ref<ServiceLabel>;
    processedDate?: Date | null;
    activityLabel?: string | null;
    ocrResults?: JSON;
    constructor(filename: string, filepath: string, originalName: string, associatedDate: Date, userDefinedTime: string, service: ServiceLabel);
}
