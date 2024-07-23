import { PrimaryKey, Property, types } from '@mikro-orm/core';

export abstract class LabelEntity {

  @PrimaryKey({ type: types.tinyint })
  id!: number;

  @Property()
  name!: string;
}
