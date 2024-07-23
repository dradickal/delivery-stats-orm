import { Entity, ManyToMany, ManyToOne, Collection, PrimaryKey, Property, types } from '@mikro-orm/core';
import { Offer } from './offer.timed.entity.js';
import { OfferDrive } from './offerDrive.timed.entity.js';


@Entity()
export class OfferOrder {

    @PrimaryKey()
    id!: number;

    @Property({ type: types.float, unsigned: true })
    totalPay!: number;

    @Property({ type: types.float, unsigned: true })
    basePay!: number;

    @Property({ type: types.float, unsigned: true })
    bonusPay!: number;

    @Property({ type: types.float, unsigned: true })
    appTip!: number;

    @Property({ type: types.float, unsigned: true })
    cashTip!: number;

    @Property({ type: types.tinyint, unsigned: true })
    itemsQuantity!: number;

    @Property({ type: types.tinyint, unsigned: true })
    itemsCount!: number;

    @Property({ type: types.time })
    orderPlaced!: string;

    @Property({ type: types.time })
    orderETA!: string;

    @Property({ type: types.time })
    ghPickupTime!: string;

    @Property({ type: types.time })
    pickupTime!: string;

    @Property({ type: types.boolean })
    pickupDelay!: boolean;

    @Property({ type: types.float, unsigned: true })
    gh_distance!: number;

    @ManyToMany({ entity: () => OfferDrive, owner: true })
    drives =  new Collection<OfferDrive>(this);

    @ManyToOne({ entity: () => Offer })
    offer!: Offer;

    // Add Business Relationship
}
