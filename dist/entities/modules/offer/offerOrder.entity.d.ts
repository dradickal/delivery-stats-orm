import { Collection, Ref } from '@mikro-orm/core';
import { Offer } from './offer.timed.entity.js';
import { OfferDrive } from './offerDrive.timed.entity.js';
import { Business } from '../business/business.entity.js';
export declare class OfferOrder {
    id: number;
    totalPay: number;
    basePay: number;
    bonusPay: number;
    appTip: number;
    cashTip: number;
    itemsQuantity: number | null;
    itemsCount: number | null;
    orderPlaced: string | null;
    orderETA: string | null;
    ghPickupTime: string | null;
    pickupTime: string | null;
    pickupDelay: boolean;
    gh_distance: number;
    drives: Collection<OfferDrive, object>;
    offer: Ref<Offer>;
    business: Ref<Business>;
}
