import { Collection } from "@mikro-orm/core";
import { DrivingShift } from "../shift/drivingShift.timed.entity.js";
export declare class VehicleStats {
    id: number;
    milesDriven: number;
    mpg: number;
    duration: number;
    activeDiff: number;
    shiftDiff: number;
    gallonsConsumed: number;
    payPerMile: number;
    drivingShifts: Collection<DrivingShift, object>;
}
