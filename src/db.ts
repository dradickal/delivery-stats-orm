import {
    type EntityManager,
    type EntityRepository,
    type Options,
    MikroORM,
    RequestContext,
  } from "@mikro-orm/mysql";
import config from "./mikro-orm.config.js";
import { Business, ServiceLabel, StoredImages } from "./entities/index.js";

  
export interface Services {
    orm: MikroORM;
    em: EntityManager;
    storedImage: EntityRepository<StoredImages>;
    business: EntityRepository<Business>;
    service: EntityRepository<ServiceLabel>;
}

let cache:Services;

export async function initORM(options?: Options): Promise<Services> {
    if (cache) {
        return cache;
    }

    const orm = await MikroORM.init({
        ...config,
        ...options,
    });

    return (cache = {
        orm,
        em: orm.em,
        storedImage: orm.em.getRepository(StoredImages),
        business: orm.em.getRepository(Business),
        service: orm.em.getRepository(ServiceLabel),
    });
}
