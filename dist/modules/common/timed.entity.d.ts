import { OptionalProps } from '@mikro-orm/core';
export declare abstract class TimedEntity {
    [OptionalProps]?: 'duration' | 'endTime';
    id: number;
    startTime: string;
    endTime: string;
    duration: number;
}
