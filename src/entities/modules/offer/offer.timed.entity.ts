import { Entity, ManyToOne, OneToMany, Opt, Collection, Property, types, Ref } from '@mikro-orm/core';
import { TimedEntity } from '../common/timed.entity.js';
import { ServiceLabel } from '../common/service.label.entity.js';
import { OfferStatus } from './offerStatus.label.entity.js';
import { OfferOrder } from './offerOrder.entity.js';
import { DrivingShift } from '../shift/drivingShift.timed.entity.js';
import { MonetaryType } from '../common/MonetaryType.js';

@Entity()
export class Offer extends TimedEntity {

    @Property({ type: types.float, unsigned: true })
    offerDistance!: number;

    @Property({ type: MonetaryType, unsigned: true, default: 0, ignoreSchemaChanges: ['default'] })
    offerPay!: number;

    @Property({ type: MonetaryType, unsigned: true, default: 0, ignoreSchemaChanges: ['default']})
    totalPay!: number;

    @Property({ type: types.boolean, default: false })
    addOn!: boolean & Opt;

    @Property({ type: types.boolean, default: false })
    multi!: boolean & Opt;

    @ManyToOne({ entity: () => ServiceLabel, ref: true })
    service!: Ref<ServiceLabel>;

    @ManyToOne({ entity: () => OfferStatus, ref: true })
    status!: Ref<OfferStatus>;

    @ManyToOne({ entity: () => DrivingShift, ref: true })
    drivingShift!: Ref<DrivingShift>;

    @OneToMany({ entity: () => OfferOrder, mappedBy: 'offer' })
    orders = new Collection<OfferOrder>(this);
}
