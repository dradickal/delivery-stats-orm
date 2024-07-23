import type { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { Destination } from '../modules/offer/destination.label.entity.js';

export class DestinationSeeder extends Seeder {

  async run(em: EntityManager): Promise<void> {
    const dest1 = em.create(Destination, { name: "Business" });
    const dest2 = em.create(Destination, { name: "Customer" });
  }

}
