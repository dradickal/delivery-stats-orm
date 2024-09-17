import { Migration } from '@mikro-orm/migrations';

export class Migration20240912050450 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `stored_images` modify `uuid` varchar(17) not null;');
  }

  async down(): Promise<void> {
    this.addSql('alter table `stored_images` modify `uuid` varchar(15) not null;');
  }

}
