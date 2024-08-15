import express from 'express';
import { initORM, Services } from './db.js';
import { RequestContext } from '@mikro-orm/mysql';

export async function bootstrap(port?:number|string) {
    const db = await initORM();
    const app = express();

    port = port || process.env.PORT || 3001;

    app.use(express.json());
    app.use(async (req, res, next) => {
        await RequestContext.create(db.orm.em, next);
        req.db = {...db};
    });

    app.get('/', (req, res) => res.json({ message: 'Welcome to MikroORM express JS example, try CRUD on /author and /book endpoints!' }));
    app.get('/service/all', async (req, res) => {
        const repository = db.service;
        const all = await repository.findAll();
        res.json({ 
            message: 'returning all services',
            data: all
        });
    })


    const server = app.listen(port, () => {
        console.log(`Listening at http://localhost:${port}`);
    });

    return { app, server, port };
}
