import { Collection, Entity, OneToMany, Property, types } from "@mikro-orm/core";
import { TimedEntity } from "../common/timed.entity.js";
import { Offer } from "../offer/offer.timed.entity.js";


@Entity()
export class DrivingShift extends TimedEntity {

    @Property({ type: types.datetime })
    date!: Date;

    @OneToMany({ entity: () => Offer, mappedBy: 'drivingShift' })
    offers = new Collection<Offer>(this);
}

