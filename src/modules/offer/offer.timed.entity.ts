import { Entity, ManyToOne, OneToMany, Opt, Collection, Property, types } from '@mikro-orm/core';
import { TimedEntity } from '../common/timed.entity.js';
import { ServiceLabel } from '../common/service.label.entity.js';
import { OfferStatus } from './offerStatus.label.entity.js';
import { OfferOrder } from './offerOrder.entity.js';
import { DrivingShift } from '../shift/drivingShift.timed.entity.js';

@Entity()
export class Offer extends TimedEntity {

    @Property({ type: types.float, unsigned: true })
    offerDistance!: number;

    @Property({ type: types.float, unsigned: true })
    offerPay!: number

    @Property({ type: types.boolean })
    addOn!: boolean & Opt;

    @Property({ type: types.boolean })
    multi!: boolean & Opt;

    @ManyToOne({ entity: () => ServiceLabel })
    service!: ServiceLabel;

    @ManyToOne({ entity: () => OfferStatus })
    status!: OfferStatus;

    @ManyToOne({ entity: () => DrivingShift })
    drivingShift!: DrivingShift;

    @OneToMany({ entity: () => OfferOrder, mappedBy: 'offer' })
    orders = new Collection<OfferOrder>(this);
}
