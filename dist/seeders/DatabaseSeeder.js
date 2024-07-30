import { Seeder } from '@mikro-orm/seeder';
import { ActivityLabelSeeder } from './ActivityLabelSeeder.js';
import { DestinationSeeder } from './DestinationSeeder.js';
import { OfferStatusSeeder } from './OfferStatusSeeder.js';
import { ServiceLabelSeeder } from './ServiceLabelSeeder.js';
import { WeekdaySeeder } from './WeekdaySeeder.js';
export class DatabaseSeeder extends Seeder {
    async run(em) {
        return this.call(em, [
            ActivityLabelSeeder,
            DestinationSeeder,
            OfferStatusSeeder,
            ServiceLabelSeeder,
            WeekdaySeeder,
        ]);
    }
}
