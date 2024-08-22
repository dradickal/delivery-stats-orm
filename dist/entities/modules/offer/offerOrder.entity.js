var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, ManyToMany, ManyToOne, Collection, PrimaryKey, Property, types } from '@mikro-orm/core';
import { Offer } from './offer.timed.entity.js';
import { OfferDrive } from './offerDrive.timed.entity.js';
import { MonetaryType } from '../common/MonetaryType.js';
import { Business } from '../business/business.entity.js';
let OfferOrder = class OfferOrder {
    id;
    totalPay;
    basePay;
    bonusPay;
    appTip;
    cashTip;
    itemsQuantity;
    itemsCount;
    orderPlaced;
    orderETA;
    ghPickupTime;
    pickupTime;
    pickupDelay;
    gh_distance;
    drives = new Collection(this);
    offer;
    business;
};
__decorate([
    PrimaryKey()
], OfferOrder.prototype, "id", void 0);
__decorate([
    Property({ type: MonetaryType, unsigned: true })
], OfferOrder.prototype, "totalPay", void 0);
__decorate([
    Property({ type: MonetaryType, unsigned: true })
], OfferOrder.prototype, "basePay", void 0);
__decorate([
    Property({ type: MonetaryType, unsigned: true, default: 0, ignoreSchemaChanges: ['default'] })
], OfferOrder.prototype, "bonusPay", void 0);
__decorate([
    Property({ type: MonetaryType, unsigned: true, default: 0, ignoreSchemaChanges: ['default'] })
], OfferOrder.prototype, "appTip", void 0);
__decorate([
    Property({ type: MonetaryType, unsigned: true, default: 0, ignoreSchemaChanges: ['default'] })
], OfferOrder.prototype, "cashTip", void 0);
__decorate([
    Property({ type: types.tinyint, unsigned: true, nullable: true, default: null })
], OfferOrder.prototype, "itemsQuantity", void 0);
__decorate([
    Property({ type: types.tinyint, unsigned: true, nullable: true, default: null })
], OfferOrder.prototype, "itemsCount", void 0);
__decorate([
    Property({ type: types.time, nullable: true, default: null })
], OfferOrder.prototype, "orderPlaced", void 0);
__decorate([
    Property({ type: types.time, nullable: true, default: null })
], OfferOrder.prototype, "orderETA", void 0);
__decorate([
    Property({ type: types.time, nullable: true, default: null })
], OfferOrder.prototype, "ghPickupTime", void 0);
__decorate([
    Property({ type: types.time, nullable: true, default: null })
], OfferOrder.prototype, "pickupTime", void 0);
__decorate([
    Property({ type: types.boolean, default: false })
], OfferOrder.prototype, "pickupDelay", void 0);
__decorate([
    Property({ type: types.float, unsigned: true })
], OfferOrder.prototype, "gh_distance", void 0);
__decorate([
    ManyToMany({ entity: () => OfferDrive, owner: true, eager: true, pivotTable: 'drives_pivot' })
], OfferOrder.prototype, "drives", void 0);
__decorate([
    ManyToOne({ entity: () => Offer, ref: true })
], OfferOrder.prototype, "offer", void 0);
__decorate([
    ManyToOne({ entity: () => Business, ref: true })
], OfferOrder.prototype, "business", void 0);
OfferOrder = __decorate([
    Entity()
], OfferOrder);
export { OfferOrder };
