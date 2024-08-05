import { Collection, Entity, ManyToOne, OneToMany, Property, Ref, types } from "@mikro-orm/core";
import { TimedEntity } from "../common/timed.entity.js";
import { Offer } from "../offer/offer.timed.entity.js";
import { ShiftPause } from "./shiftPause.timed.entity.js";
import { VehicleStats } from "../vehicle/vehicleStats.entity.js";
import { ServiceLabel } from "../common/service.label.entity.js";
import { ScheduledShift } from "./scheduledShift.timed.entity.js";
import { MonetaryType } from "../common/MonetaryType.js";


@Entity()
export class DrivingShift extends TimedEntity {

    @Property({ type: types.date })
    date!: Date;

    @Property({ type: types.smallint, unsigned: true, default: 0, nullable: false, fieldName: 'active_duration_m' })
    activeDuration!: number;

    @Property({ type: types.smallint, unsigned: true, default: 0, nullable: false, fieldName: 'active_shift_diff_m' })
    durationDiff!: number;

    @Property({ type: MonetaryType, unsigned: true, default: 0, ignoreSchemaChanges: ['default'] })
    totalPay!: number;

    @Property({ type: MonetaryType, unsigned: true, default: 0, ignoreSchemaChanges: ['default'] })
    appPay!: number;

    @Property({ type: MonetaryType, unsigned: true, default: 0, ignoreSchemaChanges: ['default'] })
    bonusPay!: number;

    @Property({ type: MonetaryType, unsigned: true, default: 0, ignoreSchemaChanges: ['default'] })
    customerTip!: number;

    @Property({ type: MonetaryType, unsigned: true, default: 0, ignoreSchemaChanges: ['default'] })
    contributionPay!: number;

    // Override Schema generation that added 'unsigned' after generated statement when defined as reference.
    @Property({ columnType: `int unsigned generated always as (DAYOFWEEK(\`date\`)) stored`, ignoreSchemaChanges: ['type','extra'] })
    weekdayId!: number;

    @ManyToOne({ entity: () => VehicleStats, ref: true })
    vehicleStats!: Ref<VehicleStats>;

    @ManyToOne({ entity: () => ServiceLabel, ref: true })
    service!: Ref<ServiceLabel>;

    @OneToMany({ entity: () => Offer, mappedBy: 'drivingShift' })
    offers = new Collection<Offer>(this);

    @OneToMany({ entity: () => ShiftPause, mappedBy: 'drivingShift' })
    pauses = new Collection<ShiftPause>(this);

    @OneToMany({ entity: () => ScheduledShift, mappedBy: 'drivingShift' })
    scheduledShifts = new Collection<ScheduledShift>(this);
}
