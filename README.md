# Setting up Envirionment
## Creating the Database
Due to an issue with the schema generation when creating a relationship with the Weekday entity, a few lines of SQL need to be added. This is handled in the migration files with the following up method:
```ts
  async up(): Promise<void> {
    this.addSql('alter table `driving_shift` add index `driving_shift_weekday_id_index`(`weekday_id`);');
    this.addSql('alter table `driving_shift` add constraint `driving_shift_weekday_id_foreign` foreign key (`weekday_id`) references `weekday` (`id`)');

    this.addSql('alter table `scheduled_shift` add index `scheduled_shift_weekday_id_index`(`weekday_id`);');
    this.addSql('alter table `scheduled_shift` add constraint `scheduled_shift_weekday_id_foreign` foreign key (`weekday_id`) references `weekday` (`id`)');
  }
```
This is adding an index on the `weekday_id` columns and adding foreign key constraints for the `driving_shift` and `scheduled_shift` tables.