import { Seeder } from '@mikro-orm/seeder';
import { Weekday } from '../modules/common/weekday.label.entity.js';
export class WeekdaySeeder extends Seeder {
    async run(em) {
        const day7 = em.create(Weekday, { name: "Sunday", shortName: "Sun", sortMon: 7 });
        const day1 = em.create(Weekday, { name: "Monday", shortName: "Mon", sortMon: 1 });
        const day2 = em.create(Weekday, { name: "Tuesday", shortName: "Tues", sortMon: 2 });
        const day3 = em.create(Weekday, { name: "Wednesday", shortName: "Wed", sortMon: 3 });
        const day4 = em.create(Weekday, { name: "Thursday", shortName: "Thur", sortMon: 4 });
        const day5 = em.create(Weekday, { name: "Friday", shortName: "Fri", sortMon: 5 });
        const day6 = em.create(Weekday, { name: "Saturday", shortName: "Sat", sortMon: 6 });
    }
}
