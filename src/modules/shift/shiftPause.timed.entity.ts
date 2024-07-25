import { Entity } from "@mikro-orm/core";
import { TimedEntity } from "../common/timed.entity.js";

@Entity()
export class ShiftPause extends TimedEntity {};
