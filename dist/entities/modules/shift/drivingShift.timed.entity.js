var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Collection, Entity, ManyToOne, OneToMany, Property, types } from "@mikro-orm/core";
import { TimedEntity } from "../common/timed.entity.js";
import { Offer } from "../offer/offer.timed.entity.js";
import { ShiftPause } from "./shiftPause.timed.entity.js";
import { VehicleStats } from "../vehicle/vehicleStats.entity.js";
import { ServiceLabel } from "../common/service.label.entity.js";
import { ScheduledShift } from "./scheduledShift.timed.entity.js";
import { MonetaryType } from "../common/MonetaryType.js";
let DrivingShift = class DrivingShift extends TimedEntity {
    date;
    activeDuration;
    durationDiff;
    totalPay;
    appPay;
    bonusPay;
    customerTip;
    contributionPay;
    // Override Schema generation that added 'unsigned' after generated statement when defined as reference.
    weekdayId;
    vehicleStats;
    service;
    offers = new Collection(this);
    pauses = new Collection(this);
    scheduledShifts = new Collection(this);
};
__decorate([
    Property({ type: types.date })
], DrivingShift.prototype, "date", void 0);
__decorate([
    Property({ type: types.smallint, unsigned: true, default: 0, nullable: false, fieldName: 'active_duration_m' })
], DrivingShift.prototype, "activeDuration", void 0);
__decorate([
    Property({ type: types.smallint, unsigned: true, default: 0, nullable: false, fieldName: 'active_shift_diff_m' })
], DrivingShift.prototype, "durationDiff", void 0);
__decorate([
    Property({ type: MonetaryType, unsigned: true, default: 0, ignoreSchemaChanges: ['default'] })
], DrivingShift.prototype, "totalPay", void 0);
__decorate([
    Property({ type: MonetaryType, unsigned: true, default: 0, ignoreSchemaChanges: ['default'] })
], DrivingShift.prototype, "appPay", void 0);
__decorate([
    Property({ type: MonetaryType, unsigned: true, default: 0, ignoreSchemaChanges: ['default'] })
], DrivingShift.prototype, "bonusPay", void 0);
__decorate([
    Property({ type: MonetaryType, unsigned: true, default: 0, ignoreSchemaChanges: ['default'] })
], DrivingShift.prototype, "customerTip", void 0);
__decorate([
    Property({ type: MonetaryType, unsigned: true, default: 0, ignoreSchemaChanges: ['default'] })
], DrivingShift.prototype, "contributionPay", void 0);
__decorate([
    Property({ columnType: `int unsigned generated always as (DAYOFWEEK(\`date\`)) stored`, ignoreSchemaChanges: ['type', 'extra'] })
], DrivingShift.prototype, "weekdayId", void 0);
__decorate([
    ManyToOne({ entity: () => VehicleStats, ref: true })
], DrivingShift.prototype, "vehicleStats", void 0);
__decorate([
    ManyToOne({ entity: () => ServiceLabel, ref: true })
], DrivingShift.prototype, "service", void 0);
__decorate([
    OneToMany({ entity: () => Offer, mappedBy: 'drivingShift' })
], DrivingShift.prototype, "offers", void 0);
__decorate([
    OneToMany({ entity: () => ShiftPause, mappedBy: 'drivingShift' })
], DrivingShift.prototype, "pauses", void 0);
__decorate([
    OneToMany({ entity: () => ScheduledShift, mappedBy: 'drivingShift' })
], DrivingShift.prototype, "scheduledShifts", void 0);
DrivingShift = __decorate([
    Entity()
], DrivingShift);
export { DrivingShift };
