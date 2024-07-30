import { Collection, Ref } from "@mikro-orm/core";
import { TimedEntity } from "../common/timed.entity.js";
import { Offer } from "../offer/offer.timed.entity.js";
import { ShiftPause } from "./shiftPause.timed.entity.js";
import { VehicleStats } from "../vehicle/vehicleStats.entity.js";
import { ServiceLabel } from "../common/service.label.entity.js";
import { ScheduledShift } from "./scheduledShift.timed.entity.js";
export declare class DrivingShift extends TimedEntity {
    date: Date;
    activeDuration: number;
    durationDiff: number;
    totalPay: number;
    appPay: number;
    bonusPay: number;
    customerTip: number;
    contributionPay: number;
    weekdayId: number;
    vehicleStats: Ref<VehicleStats>;
    service: Ref<ServiceLabel>;
    offers: Collection<Offer, object>;
    pauses: Collection<ShiftPause, object>;
    scheduledShifts: Collection<ScheduledShift, object>;
}
