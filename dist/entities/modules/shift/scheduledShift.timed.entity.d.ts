import { Ref } from "@mikro-orm/core";
import { TimedEntity } from "../common/timed.entity.js";
import { ServiceLabel } from "../common/service.label.entity.js";
import { DrivingShift } from "./drivingShift.timed.entity.js";
export declare class ScheduledShift extends TimedEntity {
    date: Date;
    absent: boolean;
    cancelled: boolean;
    weekdayId: number;
    service: Ref<ServiceLabel>;
    drivingShift: Ref<DrivingShift>;
}
