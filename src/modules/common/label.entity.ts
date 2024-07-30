import { PrimaryKey, Property, types } from '@mikro-orm/core';

export abstract class LabelEntity {

  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;
}
