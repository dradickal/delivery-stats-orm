import { PrimaryKey, Property, types, OptionalProps } from '@mikro-orm/core';

export abstract class TimedEntity {
    
    [OptionalProps]?: 'duration' | 'endTime';

    @PrimaryKey()
    id!: number;

    @Property({ type: types.time })
    startTime!: string;

    @Property({ type: types.time })
    endTime!: string;

    @Property({ type: types.smallint, unsigned: true, fieldName: 'duration_m' })
    duration!: number;
}