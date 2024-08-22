var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { PrimaryKey, Property, types, OptionalProps } from '@mikro-orm/core';
export class TimedEntity {
    [OptionalProps];
    id;
    startTime;
    endTime;
    duration;
}
__decorate([
    PrimaryKey()
], TimedEntity.prototype, "id", void 0);
__decorate([
    Property({ type: types.time })
], TimedEntity.prototype, "startTime", void 0);
__decorate([
    Property({ type: types.time })
], TimedEntity.prototype, "endTime", void 0);
__decorate([
    Property({ type: types.smallint, unsigned: true, fieldName: 'duration_m' })
], TimedEntity.prototype, "duration", void 0);
