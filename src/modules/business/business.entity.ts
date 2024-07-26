import { Entity, PrimaryKey, Property, types } from "@mikro-orm/core";

@Entity()
export class Business {
    @PrimaryKey()
    id!: number;

    @Property({ type: types.string, length: 50 })
    name!: string;

    @Property({ type: types.string, length: 75 })
    address!: string;

    @Property({ type: types.string, length: 20 })
    street!: string;

    @Property({ type: types.string, length: 20 })
    crossStreet!: string;

    @Property<Business>({ 
        type: types.string, 
        length: 100, 
        generated: cols => `concat(${cols.name}, ' (', ${cols.street}, ' and ', ${cols.crossStreet}, ' )') stored` 
    })
    label!: string;
};
