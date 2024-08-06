import { Options, MySqlDriver, GeneratedCacheAdapter } from '@mikro-orm/mysql';
import { SeedManager } from '@mikro-orm/seeder';
import { Migrator } from '@mikro-orm/migrations';
import { existsSync, readFileSync } from 'node:fs';

const options = {} as Options;

if (process.env.NODE_ENV === 'production' && existsSync('./temp/metadata.json')) {
    options.metadataCache = {
        enabled: true,
        adapter: GeneratedCacheAdapter,
        // temp/metadata.json can be generated via `npx mikro-orm-esm cache:generate --combine`
        options: {
            data: JSON.parse(readFileSync('./temp/metadata.json', { encoding: 'utf8' })),
        },
    };
} else {
    options.metadataProvider = (await import('@mikro-orm/reflection')).TsMorphMetadataProvider;
}

const config:Options = {
    driver: MySqlDriver,
    dbName: 'gh_driver_data',
    user: 'gh.data.admin',
    password: 'letmein',
    port: 3306,
    entities: ['./dist/**/*.entity.js'],
    entitiesTs: ['./src/**/*.entity.ts'],
    baseDir: process.cwd(),
    extensions: [SeedManager, Migrator],
    debug: true,
    seeder: {
        path: './dist/entities/seeders', // path to the folder with seeders
        pathTs: './src/entities/seeders',
    },
    ...options,
};

export default config;
