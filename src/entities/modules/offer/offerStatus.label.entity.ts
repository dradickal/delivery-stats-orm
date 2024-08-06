import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { LabelEntity } from '../common/label.entity.js';

@Entity({ readonly: true })
export class OfferStatus extends LabelEntity {};