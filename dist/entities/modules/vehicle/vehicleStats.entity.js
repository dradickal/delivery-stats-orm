var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Collection, Entity, OneToMany, PrimaryKey, Property, types } from "@mikro-orm/core";
import { MonetaryType } from "../common/MonetaryType.js";
import { DrivingShift } from "../shift/drivingShift.timed.entity.js";
let VehicleStats = class VehicleStats {
    id;
    milesDriven;
    mpg;
    duration;
    activeDiff;
    shiftDiff;
    gallonsConsumed;
    payPerMile;
    drivingShifts = new Collection(this);
};
__decorate([
    PrimaryKey()
], VehicleStats.prototype, "id", void 0);
__decorate([
    Property({ type: types.decimal, precision: 4, scale: 2, unsigned: true, default: 0, nullable: false, ignoreSchemaChanges: ['default'] })
], VehicleStats.prototype, "milesDriven", void 0);
__decorate([
    Property({ type: types.decimal, precision: 3, scale: 1, unsigned: true, default: 0, nullable: false, ignoreSchemaChanges: ['default'] })
], VehicleStats.prototype, "mpg", void 0);
__decorate([
    Property({ type: types.smallint, unsigned: true, default: 0, nullable: false, fieldName: 'vehicle_duration_m' })
], VehicleStats.prototype, "duration", void 0);
__decorate([
    Property({ type: types.smallint, unsigned: true, default: 0, nullable: false, fieldName: 'vehicle_active_diff_m' })
], VehicleStats.prototype, "activeDiff", void 0);
__decorate([
    Property({ type: types.smallint, unsigned: true, default: 0, nullable: false, fieldName: 'vehicle_shift_diff_m' })
], VehicleStats.prototype, "shiftDiff", void 0);
__decorate([
    Property({ type: types.decimal, precision: 3, scale: 1, unsigned: true, default: 0, nullable: false, ignoreSchemaChanges: ['default'] })
], VehicleStats.prototype, "gallonsConsumed", void 0);
__decorate([
    Property({ type: MonetaryType, unsigned: true, default: 0, ignoreSchemaChanges: ['default'] })
], VehicleStats.prototype, "payPerMile", void 0);
__decorate([
    OneToMany({ entity: () => DrivingShift, mappedBy: 'vehicleStats' })
], VehicleStats.prototype, "drivingShifts", void 0);
VehicleStats = __decorate([
    Entity()
], VehicleStats);
export { VehicleStats };
;
