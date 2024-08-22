import { type EntityManager, type EntityRepository, type Options } from "@mikro-orm/mysql";
import { RequestHandler } from "express";
import { Business, ServiceLabel, StoredImages } from "./entities/index.js";
export interface EntityServices {
    entityManager: EntityManager;
    storedImage: EntityRepository<StoredImages>;
    business: EntityRepository<Business>;
    service: EntityRepository<ServiceLabel>;
}
export declare function initORM(options?: Options): Promise<EntityServices>;
export declare function getEntityServices(): EntityServices;
export declare const createRequestContext: RequestHandler;
