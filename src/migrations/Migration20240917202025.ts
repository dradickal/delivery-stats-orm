import { Migration } from '@mikro-orm/migrations';

export class Migration20240917202025 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `stored_images` add unique `stored_images_original_name_unique`(`original_name`);');
  }

  async down(): Promise<void> {
    this.addSql('alter table `stored_images` drop index `stored_images_original_name_unique`;');
  }

}
