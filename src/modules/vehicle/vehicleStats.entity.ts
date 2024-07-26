import { Entity, PrimaryKey } from "@mikro-orm/core";

@Entity()
export class VehicleStats {
    @PrimaryKey()
    id!: number;
};
