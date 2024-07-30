import { Entity, PrimaryKey, Property, types } from '@mikro-orm/core';
import { LabelEntity } from '../common/label.entity.js';

@Entity({ readonly: true })
export class ActivityLabel extends LabelEntity {

    @Property({ type: types.string, length: 15, unique: true })
    declare name: string

    @Property({ type: types.string, length: 40 })
    friendlyName!: string;
};
