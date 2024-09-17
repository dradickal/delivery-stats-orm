import { Migration } from '@mikro-orm/migrations';
export class Migration20240912050450 extends Migration {
    async up() {
        this.addSql('alter table `stored_images` modify `uuid` varchar(17) not null;');
    }
    async down() {
        this.addSql('alter table `stored_images` modify `uuid` varchar(15) not null;');
    }
}
