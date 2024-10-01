
import { Entity, EntityManager, Property, types } from '@mikro-orm/core';
import { ActivityImage } from './activityImage.entity.js';


@Entity({
  expression: (em: EntityManager) => {
    return em.getRepository(ActivityImage).activityDateQuery();
  },
})
export class ActivityDate {

  @Property()
  serviceId!: number;

  @Property()
  date!: string;

  @Property({ type: types.integer })
  processed!: number;

  @Property({ type: types.integer })
  waiting!: number;

  toJSON() {
    return {
      "serviceId": this.serviceId,
      "date": this.date,
      "processed": Number(this.processed),
      "waiting": Number(this.waiting),
    }
  }
}