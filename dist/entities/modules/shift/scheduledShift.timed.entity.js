var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, ManyToOne, Property, types } from "@mikro-orm/core";
import { TimedEntity } from "../common/timed.entity.js";
import { ServiceLabel } from "../common/service.label.entity.js";
import { DrivingShift } from "./drivingShift.timed.entity.js";
let ScheduledShift = class ScheduledShift extends TimedEntity {
    date;
    absent;
    cancelled;
    // Override Schema generation that added 'unsigned' after generated statement when defined as reference
    weekdayId;
    service;
    drivingShift;
};
__decorate([
    Property({ type: types.date })
], ScheduledShift.prototype, "date", void 0);
__decorate([
    Property({ type: types.boolean, default: false })
], ScheduledShift.prototype, "absent", void 0);
__decorate([
    Property({ type: types.boolean, default: false })
], ScheduledShift.prototype, "cancelled", void 0);
__decorate([
    Property({ columnType: `int unsigned generated always as (DAYOFWEEK(\`date\`)) stored` })
], ScheduledShift.prototype, "weekdayId", void 0);
__decorate([
    ManyToOne({ entity: () => ServiceLabel, ref: true })
], ScheduledShift.prototype, "service", void 0);
__decorate([
    ManyToOne({ entity: () => DrivingShift, ref: true, nullable: true, default: null })
], ScheduledShift.prototype, "drivingShift", void 0);
ScheduledShift = __decorate([
    Entity()
], ScheduledShift);
export { ScheduledShift };
;
