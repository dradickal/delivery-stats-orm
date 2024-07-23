import { Entity, Property, types } from '@mikro-orm/core';
import { LabelEntity } from './label.entity.js';

@Entity({ readonly: true })
export class Weekday extends LabelEntity {

    @Property({type: types.string, length: 4 })
    shortName!: string;
};