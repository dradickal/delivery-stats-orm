import { Entity, Hidden, Property, types } from '@mikro-orm/core';
import { LabelEntity } from './label.entity.js';

@Entity()
export class Weekday extends LabelEntity {

    @Property({type: types.string, length: 4 })
    shortName!: string;

    @Property({ type: types.tinyint })
    sortMon!: number;

};