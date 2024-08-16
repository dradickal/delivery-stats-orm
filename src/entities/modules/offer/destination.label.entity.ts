import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { LabelEntity } from '../common/label.entity.js';

@Entity()
export class Destination extends LabelEntity {};