import { Ref } from "@mikro-orm/core";
import { TimedEntity } from "../common/timed.entity.js";
import { DrivingShift } from "./drivingShift.timed.entity.js";
export declare class ShiftPause extends TimedEntity {
    drivingShift: Ref<DrivingShift>;
}
