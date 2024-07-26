import { Collection, Entity, ManyToOne, OneToMany, Property, Ref, types } from "@mikro-orm/core";
import { TimedEntity } from "../common/timed.entity.js";
import { Offer } from "../offer/offer.timed.entity.js";
import { ShiftPause } from "./shiftPause.timed.entity.js";
import { VehicleStats } from "../vehicle/vehicleStats.entity.js";
import { ServiceLabel } from "../common/service.label.entity.js";
import { ScheduledShift } from "./scheduledShift.timed.entity.js";
import { Weekday } from "../common/weekday.label.entity.js";
import { MonetaryType } from "../common/MonetaryType.js";


@Entity()
export class DrivingShift extends TimedEntity {

    @Property({ type: types.date })
    date!: Date;

    @Property({ type: types.smallint, unsigned: true, default: 0, fieldName: 'active_duration_m' })
    activeDuration!: number;

    @Property({ type: types.smallint, unsigned: true, default: 0, fieldName: 'duration_diff_m' })
    duration_diff!: number;

    @Property({ type: MonetaryType, unsigned: true, default: 0 })
    totalPay!: number;

    @Property({ type: MonetaryType, unsigned: true, default: 0 })
    appPay!: number;

    @Property({ type: MonetaryType, unsigned: true, default: 0 })
    bonus_pay!: number;

    @Property({ type: MonetaryType, unsigned: true, default: 0 })
    customerTip!: number;

    @Property({ type: MonetaryType, unsigned: true, default: 0 })
    contribution_pay!: number;

    @ManyToOne({ entity: () => VehicleStats, ref: true })
    vehicleStats!: Ref<VehicleStats>;

    @ManyToOne<DrivingShift, Weekday>({ entity: () => Weekday, ref: true, generated: col => `DAYOFWEEK(${col.date}) stored` })
    weekday!: Ref<Weekday>; 

    @ManyToOne({ entity: () => ServiceLabel, ref: true })
    service!: Ref<ServiceLabel>;

    @OneToMany({ entity: () => Offer, mappedBy: 'drivingShift' })
    offers = new Collection<Offer>(this);

    @OneToMany({ entity: () => ShiftPause, mappedBy: 'drivingShift' })
    pauses = new Collection<ShiftPause>(this);

    @OneToMany({ entity: () => ScheduledShift, mappedBy: 'drivingShift' })
    scheduledShifts = new Collection<ScheduledShift>(this);
}
