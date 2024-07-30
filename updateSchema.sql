set names utf8mb4;
set foreign_key_checks = 0;

alter table `driving_shift` modify `total_pay` numeric(6,2) not null default 0, modify `app_pay` numeric(6,2) not null default 0, modify `bonus_pay` numeric(6,2) not null default 0, modify `customer_tip` numeric(6,2) not null default 0, modify `contribution_pay` numeric(6,2) not null default 0, modify `weekday_id` int unsigned generated always as (DAYOFWEEK(`date`)) stored;

alter table `scheduled_shift` modify `weekday_id` int unsigned generated always as (DAYOFWEEK(`date`)) stored;

alter table `offer` modify `offer_pay` numeric(6,2) not null default 0, modify `total_pay` numeric(6,2) not null default 0;

alter table `offer_order` modify `bonus_pay` numeric(6,2) not null default 0, modify `app_tip` numeric(6,2) not null default 0, modify `cash_tip` numeric(6,2) not null default 0;

set foreign_key_checks = 1;

[32m[39m
