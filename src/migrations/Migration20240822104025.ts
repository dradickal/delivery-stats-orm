import { Migration } from '@mikro-orm/migrations';

export class Migration20240822104025 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `stored_images` modify `ocr_results` json null;');
  }

  async down(): Promise<void> {
    this.addSql('alter table `stored_images` modify `ocr_results` json not null;');
  }

}
