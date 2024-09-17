import { Migration } from '@mikro-orm/migrations';
export class Migration20240822093412 extends Migration {
    async up() {
        this.addSql('alter table `driving_shift` add index `driving_shift_weekday_id_index`(`weekday_id`);');
        this.addSql('alter table `driving_shift` add constraint `driving_shift_weekday_id_foreign` foreign key (`weekday_id`) references `weekday` (`id`)');
        this.addSql('alter table `scheduled_shift` add index `scheduled_shift_weekday_id_index`(`weekday_id`);');
        this.addSql('alter table `scheduled_shift` add constraint `scheduled_shift_weekday_id_foreign` foreign key (`weekday_id`) references `weekday` (`id`)');
    }
}
