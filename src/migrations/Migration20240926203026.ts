import { Migration } from '@mikro-orm/migrations';

export class Migration20240926203026 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `activity_image` (`uuid` varchar(17) not null, `filename` varchar(50) not null, `filepath` varchar(120) not null, `original_name` varchar(50) not null, `associated_date` date null default null, `user_defined_time` time null default null, `upload_date` datetime not null, `service_id` int unsigned not null, `processed_date` datetime null default null, `activity_label` varchar(15) null default null, `ocr_results` json null, primary key (`uuid`)) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `activity_image` add unique `activity_image_original_name_unique`(`original_name`);');
    this.addSql('alter table `activity_image` add index `activity_image_associated_date_index`(`associated_date`);');
    this.addSql('alter table `activity_image` add index `activity_image_service_id_index`(`service_id`);');

    this.addSql('alter table `activity_image` add constraint `activity_image_service_id_foreign` foreign key (`service_id`) references `service_label` (`id`) on update cascade;');

    this.addSql('drop table if exists `stored_images`;');
  }

  async down(): Promise<void> {
    this.addSql('create table `stored_images` (`uuid` varchar(17) not null, `filename` varchar(50) not null, `filepath` varchar(120) not null, `original_name` varchar(50) not null, `associated_date` date null default null, `user_defined_time` time null default null, `upload_date` datetime not null, `service_id` int unsigned not null, `processed_date` datetime null default null, `activity_label` varchar(15) null default null, `ocr_results` json null, primary key (`uuid`)) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `stored_images` add unique `stored_images_original_name_unique`(`original_name`);');
    this.addSql('alter table `stored_images` add index `stored_images_associated_date_index`(`associated_date`);');
    this.addSql('alter table `stored_images` add index `stored_images_service_id_index`(`service_id`);');

    this.addSql('alter table `stored_images` add constraint `stored_images_service_id_foreign` foreign key (`service_id`) references `service_label` (`id`) on update cascade;');

    this.addSql('drop table if exists `activity_image`;');
  }

}
