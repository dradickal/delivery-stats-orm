import { Entity, ManyToMany, ManyToOne, OneToOne, Opt, PrimaryKey, Property, types } from '@mikro-orm/core';
import { TimedEntity } from '../common/timed.entity.js';
import { OfferOrder } from './offerOrder.entity.js';
import { Destination } from './destination.label.entity.js';

@Entity()
export class OfferDrive extends TimedEntity {

    @Property({ type: types.float, unsigned: true })
    mapDistance!: number;

    @Property({ type: types.smallint, unsigned: true })
    mapDuration!: number;

    @ManyToOne({ type: types.tinyint, entity: () => Destination })
    destination!: Destination;

    @ManyToMany({ entity: () => OfferOrder, mappedBy: 'drives' })
    orders!: OfferOrder;
}
