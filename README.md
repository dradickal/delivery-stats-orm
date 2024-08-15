# Setting up Local Envirionment
Migrations are set up with the Mikro-ORM library. To create the database in your environment run the following command. It is labeled as `danger` because the library method being used will drop the existing database that matches `dbName` in the config. If ran in an existing environment all local data will be lost. 

```$ npm run db-migration-danger-fresh```

The execution of the command creates a database with the ORM's `config.dbName` if a matching one does not already exist. It then runs all migrations, building the current schema, and records the executed migrations in a generated table `mikro_orm_migrations`. 

For this repo, the `--seed` flag is also used, but will only seed the tables for business logic "Label" entities (`Service`, `Weekday`, etc). 

## Maintaining the Database
To maintain the database after code changes, there are two commands which should be run. First, confirm whether a change in the schema has occured by running:

```$ db-schema-diff```

This uses Mikro-ORMs schema generator and compares the current schema state with a previous snapshot of the schema. The snapshot is captured from the time of the last generated migration. See Mikro-ORMs reasoning behind [the snapshot](https://mikro-orm.io/docs/migrations#snapshots). 

When a schema change has occured, generate a new migration with:

```$ db-migration-diff```

The up method of the generated Migration class will contain the DB changes required to maintain the schema. An updated snapshot will also be created.

**!! Use a separate commit for the migration changes !!**
