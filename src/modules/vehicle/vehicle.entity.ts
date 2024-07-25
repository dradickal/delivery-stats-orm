import { Entity, PrimaryKey } from "@mikro-orm/core";

@Entity()
export class Vehicle {
    @PrimaryKey()
    id!: number;
};
