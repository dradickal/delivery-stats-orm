
import { Entity, EntityManager, Property } from '@mikro-orm/core';
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
  date!: Date;

  @Property()
  activityImages?: [ActivityImage];

  @Property()
  activityCount!: number;
  
}