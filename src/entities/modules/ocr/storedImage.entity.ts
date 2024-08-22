import { Entity, ManyToOne, Opt, OptionalProps, PrimaryKey, Property, ref, Ref, types } from "@mikro-orm/core";
import { ServiceLabel } from "../common/service.label.entity.js";

@Entity()
export class StoredImages {
    [OptionalProps]?: 'uploadDate' | 'processedDate' | 'activityLabel';

    @PrimaryKey({ type: types.bigint, unsigned: true, defaultRaw: 'UUID_SHORT()' })
    uuid!: string;

    @Property({ type: types.string, length: 180 })
    filename: string;

    @Property({ type: types.string, length: 250 })
    filepath: string;

    @Property({ type: types.date, nullable: true, default: null })
    associatedDate: Date | null;

    @Property({ type: types.datetime })
    uploadDate = new Date();

    @ManyToOne({ entity: () => ServiceLabel, ref: true })
    service: Ref<ServiceLabel>;

    @Property({ type: types.datetime, nullable: true, default: null })
    processedDate!: Date | null & Opt;

    @Property({ type: types.string, length: 15, nullable: true, default: null })
    activityLabel!: string | null & Opt;

    @Property({ type: types.json, default: "{}"})
    ocrResults!: JSON & Opt;

    constructor(filename: string, filepath: string, associatedDate: Date, service: ServiceLabel) {
        this.filename = filename;
        this.filepath = filepath;
        this.associatedDate = associatedDate;
        this.service = ref(service);
    }
}
