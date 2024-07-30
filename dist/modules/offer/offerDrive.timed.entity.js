var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, ManyToMany, ManyToOne, Property, types } from '@mikro-orm/core';
import { TimedEntity } from '../common/timed.entity.js';
import { OfferOrder } from './offerOrder.entity.js';
import { Destination } from './destination.label.entity.js';
let OfferDrive = class OfferDrive extends TimedEntity {
    mapDistance;
    mapDuration;
    destination;
    orders;
};
__decorate([
    Property({ type: types.float, unsigned: true })
], OfferDrive.prototype, "mapDistance", void 0);
__decorate([
    Property({ type: types.smallint, unsigned: true })
], OfferDrive.prototype, "mapDuration", void 0);
__decorate([
    ManyToOne({ type: types.tinyint, entity: () => Destination })
], OfferDrive.prototype, "destination", void 0);
__decorate([
    ManyToMany({ entity: () => OfferOrder, mappedBy: 'drives' })
], OfferDrive.prototype, "orders", void 0);
OfferDrive = __decorate([
    Entity()
], OfferDrive);
export { OfferDrive };
