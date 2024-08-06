import { Entity } from '@mikro-orm/core';
import { LabelEntity } from './label.entity.js';

@Entity({ readonly: true })
export class ServiceLabel extends LabelEntity {};