import { Seeder } from '@mikro-orm/seeder';
import { ActivityLabel } from '../modules/ocr/activity.label.entity.js';
export class ActivityLabelSeeder extends Seeder {
    async run(em) {
        const dest1 = em.create(ActivityLabel, { name: "navigate", friendlyName: "Navigate to Location" });
        const dest2 = em.create(ActivityLabel, { name: "offer", friendlyName: "Offer Recieved" });
        const dest3 = em.create(ActivityLabel, { name: "business", friendlyName: "Arrived at Business" });
        const dest4 = em.create(ActivityLabel, { name: "recieved", friendlyName: "Order Recieved" });
        const dest5 = em.create(ActivityLabel, { name: "customer", friendlyName: "Arrive at Customer" });
        const dest6 = em.create(ActivityLabel, { name: "complete", friendlyName: "Complete Delivery" });
        const dest7 = em.create(ActivityLabel, { name: "delayed", friendlyName: "Order Delayed" });
        const dest8 = em.create(ActivityLabel, { name: "tasks", friendlyName: "Task List" });
        const dest9 = em.create(ActivityLabel, { name: "activity", friendlyName: "Earnings Activity" });
        const dest10 = em.create(ActivityLabel, { name: "start", friendlyName: "Start of Driving Shift" });
        const dest11 = em.create(ActivityLabel, { name: "earnings", friendlyName: "Earnings" });
        const dest12 = em.create(ActivityLabel, { name: "stats", friendlyName: "Account Stats" });
        const dest13 = em.create(ActivityLabel, { name: "vehicle", friendlyName: "Vehicle Activity" });
    }
}
