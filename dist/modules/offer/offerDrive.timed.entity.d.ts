import { TimedEntity } from '../common/timed.entity.js';
import { OfferOrder } from './offerOrder.entity.js';
import { Destination } from './destination.label.entity.js';
export declare class OfferDrive extends TimedEntity {
    mapDistance: number;
    mapDuration: number;
    destination: Destination;
    orders: OfferOrder;
}
