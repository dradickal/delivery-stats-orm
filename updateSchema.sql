set names utf8mb4;
set foreign_key_checks = 0;

create table `business` (`id` int unsigned not null auto_increment primary key) default character set utf8mb4 engine = InnoDB;

create table `destination` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null) default character set utf8mb4 engine = InnoDB;

create table `driving_shift` (`id` int unsigned not null auto_increment primary key, `start_time` time not null, `end_time` time not null, `duration_m` smallint unsigned not null, `date` datetime not null) default character set utf8mb4 engine = InnoDB;

create table `offer_drive` (`id` int unsigned not null auto_increment primary key, `start_time` time not null, `end_time` time not null, `duration_m` smallint unsigned not null, `map_distance` float not null, `map_duration` smallint unsigned not null, `destination_id` tinyint unsigned not null) default character set utf8mb4 engine = InnoDB;
alter table `offer_drive` add index `offer_drive_destination_id_index`(`destination_id`);

create table `offer_status` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null) default character set utf8mb4 engine = InnoDB;

create table `scheduled_shift` (`id` int unsigned not null auto_increment primary key, `start_time` time not null, `end_time` time not null, `duration_m` smallint unsigned not null) default character set utf8mb4 engine = InnoDB;

create table `service_label` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null) default character set utf8mb4 engine = InnoDB;

create table `offer` (`id` int unsigned not null auto_increment primary key, `start_time` time not null, `end_time` time not null, `duration_m` smallint unsigned not null, `offer_distance` float not null, `offer_pay` float not null, `add_on` tinyint(1) not null, `multi` tinyint(1) not null, `service_id` tinyint unsigned not null, `status_id` tinyint unsigned not null, `driving_shift_id` int unsigned not null) default character set utf8mb4 engine = InnoDB;
alter table `offer` add index `offer_service_id_index`(`service_id`);
alter table `offer` add index `offer_status_id_index`(`status_id`);
alter table `offer` add index `offer_driving_shift_id_index`(`driving_shift_id`);

create table `offer_order` (`id` int unsigned not null auto_increment primary key, `total_pay` numeric(4,2) not null, `base_pay` decimal(4,2) not null, `bonus_pay` decimal(4,2) not null default 0, `app_tip` decimal(4,2) not null default 0, `cash_tip` decimal(4,2) not null default 0, `items_quantity` tinyint unsigned null default null, `items_count` tinyint unsigned null default null, `order_placed` time null default null, `order_eta` time null default null, `gh_pickup_time` time null default null, `pickup_time` time null default null, `pickup_delay` tinyint(1) not null, `gh_distance` float not null, `offer_id` int unsigned not null) default character set utf8mb4 engine = InnoDB;
alter table `offer_order` add index `offer_order_offer_id_index`(`offer_id`);

create table `offer_order_drives` (`offer_order_id` int unsigned not null, `offer_drive_id` int unsigned not null, primary key (`offer_order_id`, `offer_drive_id`)) default character set utf8mb4 engine = InnoDB;
alter table `offer_order_drives` add index `offer_order_drives_offer_order_id_index`(`offer_order_id`);
alter table `offer_order_drives` add index `offer_order_drives_offer_drive_id_index`(`offer_drive_id`);

create table `offer_drive_orders` (`offer_drive_id` int unsigned not null, `offer_order_id` int unsigned not null, primary key (`offer_drive_id`, `offer_order_id`)) default character set utf8mb4 engine = InnoDB;
alter table `offer_drive_orders` add index `offer_drive_orders_offer_drive_id_index`(`offer_drive_id`);
alter table `offer_drive_orders` add index `offer_drive_orders_offer_order_id_index`(`offer_order_id`);

create table `shift_pause` (`id` int unsigned not null auto_increment primary key, `start_time` time not null, `end_time` time not null, `duration_m` smallint unsigned not null) default character set utf8mb4 engine = InnoDB;

create table `vehicle` (`id` int unsigned not null auto_increment primary key) default character set utf8mb4 engine = InnoDB;

create table `weekday` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null, `short_name` varchar(4) not null) default character set utf8mb4 engine = InnoDB;

alter table `offer_drive` add constraint `offer_drive_destination_id_foreign` foreign key (`destination_id`) references `destination` (`id`) on update cascade;

alter table `offer` add constraint `offer_service_id_foreign` foreign key (`service_id`) references `service_label` (`id`) on update cascade;
alter table `offer` add constraint `offer_status_id_foreign` foreign key (`status_id`) references `offer_status` (`id`) on update cascade;
alter table `offer` add constraint `offer_driving_shift_id_foreign` foreign key (`driving_shift_id`) references `driving_shift` (`id`) on update cascade;

alter table `offer_order` add constraint `offer_order_offer_id_foreign` foreign key (`offer_id`) references `offer` (`id`) on update cascade;

alter table `offer_order_drives` add constraint `offer_order_drives_offer_order_id_foreign` foreign key (`offer_order_id`) references `offer_order` (`id`) on update cascade on delete cascade;
alter table `offer_order_drives` add constraint `offer_order_drives_offer_drive_id_foreign` foreign key (`offer_drive_id`) references `offer_drive` (`id`) on update cascade on delete cascade;

alter table `offer_drive_orders` add constraint `offer_drive_orders_offer_drive_id_foreign` foreign key (`offer_drive_id`) references `offer_drive` (`id`) on update cascade on delete cascade;
alter table `offer_drive_orders` add constraint `offer_drive_orders_offer_order_id_foreign` foreign key (`offer_order_id`) references `offer_order` (`id`) on update cascade on delete cascade;

set foreign_key_checks = 1;

[32m[39m
