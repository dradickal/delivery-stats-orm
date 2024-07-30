import { Seeder } from '@mikro-orm/seeder';
import { OfferStatus } from '../modules/offer/offerStatus.label.entity.js';
export class OfferStatusSeeder extends Seeder {
    async run(em) {
        const status1 = em.create(OfferStatus, { name: "Rejected" });
        const status2 = em.create(OfferStatus, { name: "Removed" });
        const status3 = em.create(OfferStatus, { name: "Cancelled" });
        const status4 = em.create(OfferStatus, { name: "Missed" });
        const status5 = em.create(OfferStatus, { name: "Completed" });
    }
}
