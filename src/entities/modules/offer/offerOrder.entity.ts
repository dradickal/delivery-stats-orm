import { Entity, ManyToMany, ManyToOne, Collection, PrimaryKey, Property, types, Ref } from '@mikro-orm/core';
import { Offer } from './offer.timed.entity.js';
import { OfferDrive } from './offerDrive.timed.entity.js';
import { MonetaryType } from '../common/MonetaryType.js';
import { Business } from '../business/business.entity.js';


@Entity()
export class OfferOrder {

    @PrimaryKey()
    id!: number;

    @Property({ type: MonetaryType, unsigned: true })
    totalPay!: number;

    @Property({ type: MonetaryType, unsigned: true })
    basePay!: number;

    @Property({ type: MonetaryType, unsigned: true, default: 0, ignoreSchemaChanges: ['default'] })
    bonusPay!: number;

    @Property({ type: MonetaryType, unsigned: true, default: 0, ignoreSchemaChanges: ['default'] })
    appTip!: number;

    @Property({ type: MonetaryType, unsigned: true, default: 0, ignoreSchemaChanges: ['default'] })
    cashTip!: number;

    @Property({ type: types.tinyint, unsigned: true, nullable: true, default: null })
    itemsQuantity!: number | null;

    @Property({ type: types.tinyint, unsigned: true, nullable: true, default: null })
    itemsCount!: number | null;

    @Property({ type: types.time, nullable: true, default: null })
    orderPlaced!: string | null;

    @Property({ type: types.time, nullable: true, default: null })
    orderETA!: string | null;

    @Property({ type: types.time, nullable: true, default: null })
    ghPickupTime!: string | null;

    @Property({ type: types.time, nullable: true, default: null })
    pickupTime!: string | null;

    @Property({ type: types.boolean, default: false })
    pickupDelay!: boolean;

    @Property({ type: types.float, unsigned: true })
    gh_distance!: number;

    @ManyToMany({ entity: () => OfferDrive, owner: true, eager: true, pivotTable: 'drives_pivot' })
    drives =  new Collection<OfferDrive>(this);

    @ManyToOne({ entity: () => Offer, ref: true })
    offer!: Ref<Offer>;

    @ManyToOne({ entity: () => Business, ref: true })
    business!: Ref<Business>;
}
