import { Migration } from '@mikro-orm/migrations';
export class Migration20240911195049 extends Migration {
    async up() {
        this.addSql('alter table `stored_images` add `user_defined_time` time null default null after `associated_date`;');
    }
    async down() {
        this.addSql('alter table `stored_images` drop column `user_defined_time`;');
    }
}
