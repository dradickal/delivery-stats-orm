import { Collection, Entity, OneToMany, PrimaryKey, Property, types } from "@mikro-orm/core";
import { MonetaryType } from "../common/MonetaryType.js";
import { DrivingShift } from "../shift/drivingShift.timed.entity.js";

@Entity()
export class VehicleStats {
    @PrimaryKey()
    id!: number;

    @Property({ type: types.decimal, precision: 4, scale: 2, unsigned: true, default: 0, nullable: false, ignoreSchemaChanges: ['default'] })
    milesDriven!: number;

    @Property({ type: types.decimal, precision: 3, scale: 1, unsigned: true, default: 0, nullable: false, ignoreSchemaChanges: ['default'] })
    mpg!: number;

    @Property({ type: types.smallint, unsigned: true, default: 0, nullable: false, fieldName: 'vehicle_duration_m' })
    duration!: number;

    @Property({ type: types.smallint, unsigned: true, default: 0, nullable: false, fieldName: 'vehicle_active_diff_m' })
    activeDiff!: number;

    @Property({ type: types.smallint, unsigned: true, default: 0, nullable: false, fieldName: 'vehicle_shift_diff_m' })
    shiftDiff!: number;

    @Property({ type: types.decimal, precision: 3, scale: 1, unsigned: true, default: 0, nullable: false, ignoreSchemaChanges: ['default'] })
    gallonsConsumed!: number;

    @Property({ type: MonetaryType, unsigned: true, default: 0, ignoreSchemaChanges: ['default']})
    payPerMile!: number;

    @OneToMany({ entity: () => DrivingShift, mappedBy: 'vehicleStats' })
    drivingShifts = new Collection<DrivingShift>(this);
};
