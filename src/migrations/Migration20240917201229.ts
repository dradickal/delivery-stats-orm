import { Migration } from '@mikro-orm/migrations';

export class Migration20240917201229 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `stored_images` add index `stored_images_associated_date_index`(`associated_date`);');
  }

  async down(): Promise<void> {
    this.addSql('alter table `stored_images` drop index `stored_images_associated_date_index`;');
  }

}
