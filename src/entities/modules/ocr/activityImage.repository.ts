import { EntityRepository } from "@mikro-orm/mysql";
import { ActivityImage } from "./activityImage.entity.js";

export class ActivityImageRepository extends EntityRepository<ActivityImage> {

    async activityDateQuery() {
        return {}
    }
}