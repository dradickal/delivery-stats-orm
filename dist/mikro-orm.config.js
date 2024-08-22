import { MySqlDriver, GeneratedCacheAdapter } from '@mikro-orm/mysql';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { SeedManager } from '@mikro-orm/seeder';
import { Migrator } from '@mikro-orm/migrations';
import { existsSync, readFileSync } from 'node:fs';
const options = {};
if (process.env.NODE_ENV === 'production' && existsSync('./temp/metadata.json')) {
    options.metadataCache = {
        enabled: true,
        adapter: GeneratedCacheAdapter,
        options: {
            data: JSON.parse(readFileSync('./temp/metadata.json', { encoding: 'utf8' })),
        },
    };
}
else {
    options.metadataProvider = (await import('@mikro-orm/reflection')).TsMorphMetadataProvider;
}
const config = {
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
    highlighter: new SqlHighlighter(),
    seeder: {
        path: './dist/entities/seeders', // path to the folder with seeders
        pathTs: './src/entities/seeders',
    },
    migrations: {
        path: './dist/migrations',
        pathTs: './src/migrations',
    },
    ...options,
};
export default config;
