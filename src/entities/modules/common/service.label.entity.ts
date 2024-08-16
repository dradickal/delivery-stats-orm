import { Entity } from '@mikro-orm/core';
import { LabelEntity } from './label.entity.js';

@Entity()
export class ServiceLabel extends LabelEntity {};