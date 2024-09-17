import { Migration } from '@mikro-orm/migrations';
export class Migration20240917200110 extends Migration {
    async up() {
        this.addSql('alter table `stored_images` add `original_name` varchar(50) not null after `filepath`;');
        this.addSql('alter table `stored_images` modify `filename` varchar(50) not null, modify `filepath` varchar(120) not null;');
    }
    async down() {
        this.addSql('alter table `stored_images` drop column `original_name`;');
        this.addSql('alter table `stored_images` modify `filename` varchar(30) not null, modify `filepath` varchar(100) not null;');
    }
}
