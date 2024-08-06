import { Entity, ManyToOne, Ref } from "@mikro-orm/core";
import { TimedEntity } from "../common/timed.entity.js";
import { DrivingShift } from "./drivingShift.timed.entity.js";

@Entity()
export class ShiftPause extends TimedEntity {

    @ManyToOne({ entity: () => DrivingShift, ref: true })
    drivingShift!: Ref<DrivingShift>;
};
