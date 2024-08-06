import { Entity, PrimaryKey, Property, types } from "@mikro-orm/core";

@Entity()
export class Business {
    @PrimaryKey()
    id!: number;

    @Property({ type: types.string, length: 100 })
    name!: string;

    @Property({ type: types.string, length: 150 })
    address!: string;

    @Property({ type: types.string, length: 40 })
    street!: string;

    @Property({ type: types.string, length: 40 })
    crossStreet!: string;

    @Property<Business>({ 
        type: types.string, 
        length: 200, 
        generated: cols => `(CONCAT(\`${cols.name}\`, ' (', \`${cols.street}\`, ' and ', \`${cols.crossStreet}\`, ' )')) stored` 
    })
    label!: string;
};
