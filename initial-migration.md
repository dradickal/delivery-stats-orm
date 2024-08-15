# Resting Initial Migration
As the data structure changes in early development, lets refresh the inital migration until production deployment in order to maintain a cleaner Migration history.

To make those commit changes: 
1. Delete the `./src/migrations` directory 
2. Drop the `mikro_orm_migrations` table (or, I suppose, the whole DB)
3. Execute ```$ npx mikro-orm-esm migration:create --initial```
4. Create a second migration as described below

### Required DB modification
Manual creation of the `Weekday` relationships in the DB is required. See explaination below.

This means defining an index and foreign key contraint on the `weekday_id` columns of the `driving_shift` and `scheduled_shift` tables.

After a new initial migration is generated, create a blank migration file with `npm run db-migration-blank`. Paste the following code as the `up` method.

```ts
  async up(): Promise<void> {
    this.addSql('alter table `driving_shift` add index `driving_shift_weekday_id_index`(`weekday_id`);');
    this.addSql('alter table `driving_shift` add constraint `driving_shift_weekday_id_foreign` foreign key (`weekday_id`) references `weekday` (`id`)');

    this.addSql('alter table `scheduled_shift` add index `scheduled_shift_weekday_id_index`(`weekday_id`);');
    this.addSql('alter table `scheduled_shift` add constraint `scheduled_shift_weekday_id_foreign` foreign key (`weekday_id`) references `weekday` (`id`)');
  }
```

# SQL error with `unsigned` INT

There is an issue with the results from the schema generator when using the `generated` option with an unsigned int. Mikro-ORM was placing the `unsigned` designation at the end of the column definition (after the `generated` statement). This caused MySQL to error on table creation.

Mikro-ORM does not modify values set in the `columnType` option, so the entire "GENERATED" SQL method statement can exist there. However, the ORM trys to be smart when still defining the `Weekday` relationship. Ensuring the foriegn key column matched Weekday's `id` column definition as an unsigned int, the designation was still being added, but again at the wrong position.

Controlling how the `create table` statements were strucured to avoid the error meant also not defining the relationship.