import { Entity, PrimaryKey, Property, types } from "@mikro-orm/core";

@Entity()
export class StoredImages {

    @PrimaryKey({ type: types.string, length: 180 })
    filename!: string;

    @Property({ type: types.string, length: 250 })
    filepath!: string;

    @Property({ type: types.date, nullable: true, default: null })
    associatedDate!: Date | null;

    @Property({ type: types.datetime })
    uploadDate!: Date;

    @Property({ type: types.datetime, nullable: true, default: null })
    processedDate!: Date | null;

    @Property({ type: types.string, length: 15, nullable: true, default: null })
    activityLabel!: string | null;

    @Property({ type: types.json })
    ocrResults!: JSON;
}
