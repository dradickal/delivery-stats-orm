import { Seeder } from '@mikro-orm/seeder';
import { Destination } from '../modules/offer/destination.label.entity.js';
export class DestinationSeeder extends Seeder {
    async run(em) {
        const dest1 = em.create(Destination, { name: "Business" });
        const dest2 = em.create(Destination, { name: "Customer" });
    }
}
