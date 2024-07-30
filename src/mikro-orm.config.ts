import { Options, MySqlDriver } from '@mikro-orm/mysql';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { SeedManager } from '@mikro-orm/seeder';
import { Migrator } from '@mikro-orm/migrations';

const config:Options = {
    driver: MySqlDriver,
    dbName: 'gh_driver_data',
    user: 'gh.data.admin',
    password: 'letmein',
    port: 3306,
    entities: ['./dist/**/*.entity.js'],
    entitiesTs: ['./src/**/*.entity.ts'],
    metadataProvider: TsMorphMetadataProvider,
    baseDir: process.cwd(),
    extensions: [SeedManager, Migrator],
    debug: true,
    seeder: {
        path: './dist/seeders', // path to the folder with seeders
        pathTs: './src/seeders',
    }
};

export default config;
