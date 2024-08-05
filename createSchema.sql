set names utf8mb4;
set foreign_key_checks = 0;

create table `activity_label` (`id` int unsigned not null auto_increment primary key, `name` varchar(15) not null, `friendly_name` varchar(40) not null) default character set utf8mb4 engine = InnoDB;
alter table `activity_label` add unique `activity_label_name_unique`(`name`);

create table `business` (`id` int unsigned not null auto_increment primary key, `name` varchar(100) not null, `address` varchar(150) not null, `street` varchar(40) not null, `cross_street` varchar(40) not null, `label` varchar(200) generated always as (CONCAT(`name`, ' (', `street`, ' and ', `cross_street`, ' )')) stored) default character set utf8mb4 engine = InnoDB;

create table `destination` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null) default character set utf8mb4 engine = InnoDB;

create table `offer_drive` (`id` int unsigned not null auto_increment primary key, `start_time` time not null, `end_time` time not null, `duration_m` smallint unsigned not null, `map_distance` float not null, `map_duration` smallint unsigned not null, `destination_id` int unsigned not null) default character set utf8mb4 engine = InnoDB;
alter table `offer_drive` add index `offer_drive_destination_id_index`(`destination_id`);

create table `offer_status` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null) default character set utf8mb4 engine = InnoDB;

create table `service_label` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null) default character set utf8mb4 engine = InnoDB;

create table `stored_images` (`filename` varchar(180) not null, `filepath` varchar(250) not null, `associated_date` date null default null, `upload_date` datetime not null, `processed_date` datetime null default null, `activity_label` varchar(15) null default null, `ocr_results` json not null, primary key (`filename`)) default character set utf8mb4 engine = InnoDB;

create table `vehicle_stats` (`id` int unsigned not null auto_increment primary key, `miles_driven` numeric(2,4) not null default 0, `mpg` numeric(1,3) not null default 0, `vehicle_duration_m` smallint unsigned not null default 0, `vehicle_active_diff_m` smallint unsigned not null default 0, `vehicle_shift_diff_m` smallint unsigned not null default 0, `gallons_consumed` numeric(1,3) not null default 0, `pay_per_mile` numeric(6,2) not null default 0) default character set utf8mb4 engine = InnoDB;

create table `driving_shift` (`id` int unsigned not null auto_increment primary key, `start_time` time not null, `end_time` time not null, `duration_m` smallint unsigned not null, `date` date not null, `active_duration_m` smallint unsigned not null default 0, `active_shift_diff_m` smallint unsigned not null default 0, `total_pay` numeric(6,2) not null default 0, `app_pay` numeric(6,2) not null default 0, `bonus_pay` numeric(6,2) not null default 0, `customer_tip` numeric(6,2) not null default 0, `contribution_pay` numeric(6,2) not null default 0, `weekday_id` int unsigned generated always as (DAYOFWEEK(`date`)) stored, `vehicle_stats_id` int unsigned not null, `service_id` int unsigned not null) default character set utf8mb4 engine = InnoDB;
alter table `driving_shift` add index `driving_shift_vehicle_stats_id_index`(`vehicle_stats_id`);
alter table `driving_shift` add index `driving_shift_service_id_index`(`service_id`);

create table `shift_pause` (`id` int unsigned not null auto_increment primary key, `start_time` time not null, `end_time` time not null, `duration_m` smallint unsigned not null, `driving_shift_id` int unsigned not null) default character set utf8mb4 engine = InnoDB;
alter table `shift_pause` add index `shift_pause_driving_shift_id_index`(`driving_shift_id`);

create table `scheduled_shift` (`id` int unsigned not null auto_increment primary key, `start_time` time not null, `end_time` time not null, `duration_m` smallint unsigned not null, `date` date not null, `absent` tinyint(1) not null default false, `cancelled` tinyint(1) not null default false, `weekday_id` int unsigned generated always as (DAYOFWEEK(`date`)) stored, `service_id` int unsigned not null, `driving_shift_id` int unsigned null default null) default character set utf8mb4 engine = InnoDB;
alter table `scheduled_shift` add index `scheduled_shift_service_id_index`(`service_id`);
alter table `scheduled_shift` add index `scheduled_shift_driving_shift_id_index`(`driving_shift_id`);

create table `offer` (`id` int unsigned not null auto_increment primary key, `start_time` time not null, `end_time` time not null, `duration_m` smallint unsigned not null, `offer_distance` float not null, `offer_pay` numeric(6,2) not null default 0, `total_pay` numeric(6,2) not null default 0, `add_on` tinyint(1) not null default false, `multi` tinyint(1) not null default false, `service_id` int unsigned not null, `status_id` int unsigned not null, `driving_shift_id` int unsigned not null) default character set utf8mb4 engine = InnoDB;
alter table `offer` add index `offer_service_id_index`(`service_id`);
alter table `offer` add index `offer_status_id_index`(`status_id`);
alter table `offer` add index `offer_driving_shift_id_index`(`driving_shift_id`);

create table `offer_order` (`id` int unsigned not null auto_increment primary key, `total_pay` numeric(6,2) not null, `base_pay` numeric(6,2) not null, `bonus_pay` numeric(6,2) not null default 0, `app_tip` numeric(6,2) not null default 0, `cash_tip` numeric(6,2) not null default 0, `items_quantity` tinyint unsigned null default null, `items_count` tinyint unsigned null default null, `order_placed` time null default null, `order_eta` time null default null, `gh_pickup_time` time null default null, `pickup_time` time null default null, `pickup_delay` tinyint(1) not null default false, `gh_distance` float not null, `offer_id` int unsigned not null, `business_id` int unsigned not null) default character set utf8mb4 engine = InnoDB;
alter table `offer_order` add index `offer_order_offer_id_index`(`offer_id`);
alter table `offer_order` add index `offer_order_business_id_index`(`business_id`);

create table `drives_pivot` (`offer_order_id` int unsigned not null, `offer_drive_id` int unsigned not null, primary key (`offer_order_id`, `offer_drive_id`)) default character set utf8mb4 engine = InnoDB;
alter table `drives_pivot` add index `drives_pivot_offer_order_id_index`(`offer_order_id`);
alter table `drives_pivot` add index `drives_pivot_offer_drive_id_index`(`offer_drive_id`);

create table `weekday` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null, `short_name` varchar(4) not null, `sort_mon` tinyint not null) default character set utf8mb4 engine = InnoDB;

alter table `offer_drive` add constraint `offer_drive_destination_id_foreign` foreign key (`destination_id`) references `destination` (`id`) on update cascade;

alter table `driving_shift` add constraint `driving_shift_vehicle_stats_id_foreign` foreign key (`vehicle_stats_id`) references `vehicle_stats` (`id`) on update cascade;
alter table `driving_shift` add constraint `driving_shift_service_id_foreign` foreign key (`service_id`) references `service_label` (`id`) on update cascade;

alter table `shift_pause` add constraint `shift_pause_driving_shift_id_foreign` foreign key (`driving_shift_id`) references `driving_shift` (`id`) on update cascade;

alter table `scheduled_shift` add constraint `scheduled_shift_service_id_foreign` foreign key (`service_id`) references `service_label` (`id`) on update cascade;
alter table `scheduled_shift` add constraint `scheduled_shift_driving_shift_id_foreign` foreign key (`driving_shift_id`) references `driving_shift` (`id`) on update cascade on delete set null;

alter table `offer` add constraint `offer_service_id_foreign` foreign key (`service_id`) references `service_label` (`id`) on update cascade;
alter table `offer` add constraint `offer_status_id_foreign` foreign key (`status_id`) references `offer_status` (`id`) on update cascade;
alter table `offer` add constraint `offer_driving_shift_id_foreign` foreign key (`driving_shift_id`) references `driving_shift` (`id`) on update cascade;

alter table `offer_order` add constraint `offer_order_offer_id_foreign` foreign key (`offer_id`) references `offer` (`id`) on update cascade;
alter table `offer_order` add constraint `offer_order_business_id_foreign` foreign key (`business_id`) references `business` (`id`) on update cascade;

alter table `drives_pivot` add constraint `drives_pivot_offer_order_id_foreign` foreign key (`offer_order_id`) references `offer_order` (`id`) on update cascade on delete cascade;
alter table `drives_pivot` add constraint `drives_pivot_offer_drive_id_foreign` foreign key (`offer_drive_id`) references `offer_drive` (`id`) on update cascade on delete cascade;

set foreign_key_checks = 1;

[32m[39m
