import { MikroORM, RequestContext, } from "@mikro-orm/mysql";
import config from "./mikro-orm.config.js";
import { Business, ServiceLabel, StoredImages } from "./entities/index.js";
let cache;
let ormCache;
export async function initORM(options) {
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
        storedImage: ormCache.em.getRepository(StoredImages),
        business: ormCache.em.getRepository(Business),
        service: ormCache.em.getRepository(ServiceLabel),
    });
}
export function getEntityServices() {
    if (!cache) {
        throw Error('Database Connecetion does not exist');
    }
    return cache;
}
export const createRequestContext = async (req, res, next) => {
    await RequestContext.create(ormCache.em, next);
};
