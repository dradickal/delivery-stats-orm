var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, ManyToOne, OneToMany, Collection, Property, types } from '@mikro-orm/core';
import { TimedEntity } from '../common/timed.entity.js';
import { ServiceLabel } from '../common/service.label.entity.js';
import { OfferStatus } from './offerStatus.label.entity.js';
import { OfferOrder } from './offerOrder.entity.js';
import { DrivingShift } from '../shift/drivingShift.timed.entity.js';
import { MonetaryType } from '../common/MonetaryType.js';
let Offer = class Offer extends TimedEntity {
    offerDistance;
    offerPay;
    totalPay;
    addOn;
    multi;
    service;
    status;
    drivingShift;
    orders = new Collection(this);
};
__decorate([
    Property({ type: types.float, unsigned: true })
], Offer.prototype, "offerDistance", void 0);
__decorate([
    Property({ type: MonetaryType, unsigned: true, default: 0, ignoreSchemaChanges: ['default'] })
], Offer.prototype, "offerPay", void 0);
__decorate([
    Property({ type: MonetaryType, unsigned: true, default: 0, ignoreSchemaChanges: ['default'] })
], Offer.prototype, "totalPay", void 0);
__decorate([
    Property({ type: types.boolean, default: false })
], Offer.prototype, "addOn", void 0);
__decorate([
    Property({ type: types.boolean, default: false })
], Offer.prototype, "multi", void 0);
__decorate([
    ManyToOne({ entity: () => ServiceLabel, ref: true })
], Offer.prototype, "service", void 0);
__decorate([
    ManyToOne({ entity: () => OfferStatus, ref: true })
], Offer.prototype, "status", void 0);
__decorate([
    ManyToOne({ entity: () => DrivingShift, ref: true })
], Offer.prototype, "drivingShift", void 0);
__decorate([
    OneToMany({ entity: () => OfferOrder, mappedBy: 'offer' })
], Offer.prototype, "orders", void 0);
Offer = __decorate([
    Entity()
], Offer);
export { Offer };
