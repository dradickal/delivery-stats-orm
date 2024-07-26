import { Entity, ManyToMany, ManyToOne, Collection, PrimaryKey, Property, types, LoadStrategy } from '@mikro-orm/core';
import { Offer } from './offer.timed.entity.js';
import { OfferDrive } from './offerDrive.timed.entity.js';
import { MonetaryType } from '../common/MonetaryType.js';


@Entity()
export class OfferOrder {

    @PrimaryKey()
    id!: number;

    @Property({ type: MonetaryType, unsigned: true })
    totalPay!: number;

    @Property({ columnType: 'decimal(4,2)', unsigned: true })
    basePay!: number;

    @Property({ columnType: 'decimal(4,2)', unsigned: true, default: 0 })
    bonusPay!: number;

    @Property({ columnType: 'decimal(4,2)', unsigned: true, default: 0 })
    appTip!: number;

    @Property({ columnType: 'decimal(4,2)', unsigned: true, default: 0 })
    cashTip!: number;

    @Property({ type: types.tinyint, unsigned: true, nullable: true, default: null })
    itemsQuantity!: number | null;

    @Property({ type: types.tinyint, unsigned: true, nullable: true, default: null })
    itemsCount!: number;

    @Property({ type: types.time, nullable: true, default: null })
    orderPlaced!: string;

    @Property({ type: types.time, nullable: true, default: null })
    orderETA!: string;

    @Property({ type: types.time, nullable: true, default: null })
    ghPickupTime!: string;

    @Property({ type: types.time, nullable: true, default: null })
    pickupTime!: string;

    @Property({ type: types.boolean })
    pickupDelay!: boolean;

    @Property({ type: types.float, unsigned: true })
    gh_distance!: number;

    @ManyToMany({ entity: () => OfferDrive, owner: true, eager: true, pivotTable: 'drives_pivot' })
    drives =  new Collection<OfferDrive>(this);

    @ManyToOne({ entity: () => Offer })
    offer!: Offer;

    // Add Business Relationship
}
