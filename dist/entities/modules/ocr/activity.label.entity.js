var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, Property, types } from '@mikro-orm/core';
import { LabelEntity } from '../common/label.entity.js';
let ActivityLabel = class ActivityLabel extends LabelEntity {
    friendlyName;
};
__decorate([
    Property({ type: types.string, length: 15, unique: true })
], ActivityLabel.prototype, "name", void 0);
__decorate([
    Property({ type: types.string, length: 40 })
], ActivityLabel.prototype, "friendlyName", void 0);
ActivityLabel = __decorate([
    Entity()
], ActivityLabel);
export { ActivityLabel };
;
