import { Entity, ManyToOne, Opt, OptionalProps, PrimaryKey, Property, ref, Ref, types } from "@mikro-orm/core";
import { ServiceLabel } from "../common/service.label.entity.js";
import { nanoid } from "nanoid/non-secure";

@Entity()
export class StoredImages {
    [OptionalProps]?: 'uploadDate' | 'processedDate' | 'activityLabel' | 'ocrResults';

    @PrimaryKey({ type: types.string, length: 15 })
    uuid = "id" + nanoid(13);

    @Property({ type: types.string, length: 30 })
    filename: string;

    @Property({ type: types.string, length: 100 })
    filepath: string;

    @Property({ type: types.date, nullable: true, default: null })
    associatedDate: Date | null;

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

    constructor(filename: string, filepath: string, associatedDate: Date, service: ServiceLabel) {
        this.filename = filename;
        this.filepath = filepath;
        this.associatedDate = associatedDate;
        this.service = ref(service);
    }
}
