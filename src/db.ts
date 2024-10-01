import {
    type EntityManager,
    type EntityRepository,
    type Options,
    MikroORM,
    RequestContext,
  } from "@mikro-orm/mysql";
import config from "./mikro-orm.config.js";
import { RequestHandler } from "express";
import { Business, ServiceLabel, ActivityImage } from "./entities/index.js";
import { ActivityImageRepository } from "./entities/modules/ocr/activityImage.repository.js";

  
export interface EntityServices {
    entityManager: EntityManager;
    activityImage: ActivityImageRepository;
    business: EntityRepository<Business>;
    service: EntityRepository<ServiceLabel>;
}

let cache:EntityServices;
let ormCache: MikroORM;

export async function initORM(options?: Options): Promise<EntityServices> {
    if (cache) {
        throw Error('Database Connection has already been made. Use "getEntityServices".');
    }

    const orm = await MikroORM.init({
        ...config,
        ...options,
    });

    ormCache = orm;

    return (cache = {
        entityManager: ormCache.em,
        activityImage: ormCache.em.getRepository(ActivityImage),
        business: ormCache.em.getRepository(Business),
        service: ormCache.em.getRepository(ServiceLabel),
    });
}

export function getEntityServices():EntityServices {
    if(!cache) {
        throw Error('Database Connecetion does not exist');
    }

    return cache;
}

export const createRequestContext: RequestHandler = async (req, res, next) => {
    await RequestContext.create(ormCache.em, next);
}
