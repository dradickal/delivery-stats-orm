import { Entity, ManyToOne, Property, types, Ref } from "@mikro-orm/core";
import { TimedEntity } from "../common/timed.entity.js";
import { Weekday } from "../common/weekday.label.entity.js";
import { ServiceLabel } from "../common/service.label.entity.js";
import { DrivingShift } from "./drivingShift.timed.entity.js";

@Entity()
export class ScheduledShift extends TimedEntity {
    @Property({ type: types.date })
    date!: Date;

    @Property({ type: types.boolean, default: false })
    absent!: boolean;

    @Property({ type: types.boolean, default: false })
    cancelled!: boolean;

    // Override Schema generation that added 'unsigned' after generated statement when defined as reference
    @Property({ columnType: `int unsigned generated always as (DAYOFWEEK(\`date\`)) stored` })
    weekdayId!: number;

    @ManyToOne({ entity: () => ServiceLabel, ref: true })
    service!: Ref<ServiceLabel>;

    @ManyToOne({ entity: () => DrivingShift, ref: true, nullable: true, default: null })
    drivingShift!: Ref<DrivingShift>; 
};
