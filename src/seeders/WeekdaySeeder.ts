import type { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { Weekday } from '../modules/common/weekday.label.entity.js';

export class WeekdaySeeder extends Seeder {

  async run(em: EntityManager): Promise<void> {
    const day1 = em.create(Weekday, { name: "Monday", shortName: "Mon" });
    const day2 = em.create(Weekday, { name: "Tuesday", shortName: "Tues" });
    const day3 = em.create(Weekday, { name: "Wednesday", shortName: "Wed" });
    const day4 = em.create(Weekday, { name: "Thursday", shortName: "Thur" });
    const day5 = em.create(Weekday, { name: "Friday", shortName: "Fri" });
    const day6 = em.create(Weekday, { name: "Saturday", shortName: "Sat" });
    const day7 = em.create(Weekday, { name: "Sunday", shortName: "Sun" });
  }

}
