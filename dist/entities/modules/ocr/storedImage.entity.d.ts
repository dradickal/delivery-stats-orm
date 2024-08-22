import { Opt, OptionalProps, Ref } from "@mikro-orm/core";
import { ServiceLabel } from "../common/service.label.entity.js";
export declare class StoredImages {
    [OptionalProps]?: 'uploadDate' | 'processedDate' | 'activityLabel';
    uuid: string;
    filename: string;
    filepath: string;
    associatedDate: Date | null;
    uploadDate: Date;
    service: Ref<ServiceLabel>;
    processedDate: Date | null & Opt;
    activityLabel: string | null & Opt;
    ocrResults: JSON & Opt;
    constructor(filename: string, filepath: string, associatedDate: Date, service: ServiceLabel);
}
