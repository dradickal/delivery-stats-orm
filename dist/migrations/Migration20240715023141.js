import { Migration } from '@mikro-orm/migrations';
export class Migration20240715023141 extends Migration {
    async up() {
        this.addSql('create table `offer_status` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null) default character set utf8mb4 engine = InnoDB;');
        this.addSql('create table `service_label` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null) default character set utf8mb4 engine = InnoDB;');
        this.addSql('create table `offer` (`id` int unsigned not null auto_increment primary key, `start_time` time not null, `end_time` time not null, `duration_m` smallint unsigned not null, `offer_distance` float not null, `offer_pay` float not null, `add_on` tinyint(1) not null, `multi` tinyint(1) not null, `service_id` int unsigned not null, `status_id` int unsigned not null) default character set utf8mb4 engine = InnoDB;');
        this.addSql('alter table `offer` add index `offer_service_id_index`(`service_id`);');
        this.addSql('alter table `offer` add index `offer_status_id_index`(`status_id`);');
        this.addSql('create table `weekday` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null, `short_name` varchar(3) not null) default character set utf8mb4 engine = InnoDB;');
        this.addSql('alter table `offer` add constraint `offer_service_id_foreign` foreign key (`service_id`) references `service_label` (`id`) on update cascade;');
        this.addSql('alter table `offer` add constraint `offer_status_id_foreign` foreign key (`status_id`) references `offer_status` (`id`) on update cascade;');
    }
}
