import { Opt, Collection, Ref } from '@mikro-orm/core';
import { TimedEntity } from '../common/timed.entity.js';
import { ServiceLabel } from '../common/service.label.entity.js';
import { OfferStatus } from './offerStatus.label.entity.js';
import { OfferOrder } from './offerOrder.entity.js';
import { DrivingShift } from '../shift/drivingShift.timed.entity.js';
export declare class Offer extends TimedEntity {
    offerDistance: number;
    offerPay: number;
    totalPay: number;
    addOn: boolean & Opt;
    multi: boolean & Opt;
    service: Ref<ServiceLabel>;
    status: Ref<OfferStatus>;
    drivingShift: Ref<DrivingShift>;
    orders: Collection<OfferOrder, object>;
}
