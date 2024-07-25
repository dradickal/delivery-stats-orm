import { Entity, PrimaryKey } from "@mikro-orm/core";

@Entity()
export class Business {
    @PrimaryKey()
    id!: number;
};
