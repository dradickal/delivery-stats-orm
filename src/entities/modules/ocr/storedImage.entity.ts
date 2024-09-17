import { Entity, ManyToOne, Opt, OptionalProps, PrimaryKey, Property, ref, Ref, types } from "@mikro-orm/core";
import { ServiceLabel } from "../common/service.label.entity.js";
import { customAlphabet } from "nanoid";

const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const nanoid = customAlphabet(alphabet, 14);



@Entity()
export class StoredImages {
    [OptionalProps]?: 'uploadDate' | 'processedDate' | 'activityLabel' | 'ocrResults';

    @PrimaryKey({ type: types.string, length: 17 })
    uuid = "id-" + nanoid();

    @Property({ type: types.string, length: 50 })
    filename: string;

    @Property({ type: types.string, length: 120 })
    filepath: string;

    @Property({ type: types.string, length: 50, unique: true })
    originalName: string;

    @Property({ type: types.date, nullable: true, default: null, index: true })
    associatedDate: Date | null;

    @Property({ type: types.time, nullable: true, default: null })
    userDefinedTime: string | null;

    @Property({ type: types.datetime })
    uploadDate = new Date();

    @ManyToOne({ entity: () => ServiceLabel, ref: true })
    service: Ref<ServiceLabel>;

    @Property({ type: types.datetime, nullable: true, default: null })
    processedDate?: Date | null;

    @Property({ type: types.string, length: 15, nullable: true, default: null })
    activityLabel?: string | null;

    @Property({ type: types.json, nullable: true })
    ocrResults?: JSON;

    constructor(
        filename: string, 
        filepath: string,
        originalName: string, 
        associatedDate: Date, 
        userDefinedTime: string, 
        service: ServiceLabel) 
    {
        this.filename = filename;
        this.filepath = filepath;
        this.originalName = originalName;
        this.associatedDate = associatedDate;
        this.userDefinedTime = userDefinedTime;
        this.service = ref(service);
    }
}
