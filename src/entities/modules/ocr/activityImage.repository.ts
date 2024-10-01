import { EntityRepository, FilterQuery, FindOptions, sql } from "@mikro-orm/mysql";
import { ActivityImage } from "./activityImage.entity.js";
import { ActivityDate } from "./activityDate.entity.js";

export class ActivityImageRepository extends EntityRepository<ActivityImage> {

    activityDateQuery() {
        return this.createQueryBuilder('a')
            .select(['service_id'])
            .addSelect(sql`associated_date`.as('date'))
            .addSelect(sql`SUM(processed_date is null)`.as('waiting'))
            .addSelect(sql`SUM(processed_date is not null)`.as('processed'))
            .groupBy(['associated_date', 'service_id']);
    }

    async listActivityDates(where: FilterQuery<ActivityDate>, options: FindOptions<ActivityDate>) {
        const items = await this.em.find(ActivityDate, where, options);

        return items;
    }
}