import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

import { createRequestContext } from './db.js';
import { ErrorHandler } from './routers/utils/errorHandler.js';
import { ActivityImagesRouter } from './routers/activityImagesRouter.js';

export async function bootstrap(port?:number|string) {
    const app = express();
    const __dirname = path.dirname(fileURLToPath(import.meta.url));

    port = port || process.env.PORT || 3001;
    app.use(express.json());
    app.use(cors());

    app.use(express.static(path.join(__dirname, '../public')));
    app.use(createRequestContext);

    app.get('/', (req, res) => res.json({ message: 'Welcome to MikroORM express JS example, try CRUD on /author and /book endpoints!' }));
    app.get('/service/all', async (req, res) => {
        const input = req.params;
        res.json({ 
            message: 'returning all services',
            data: {}
        });
    });
    app.use('/activity', ActivityImagesRouter());

    app.use(ErrorHandler);

    const server = app.listen(port, () => {
        console.log(`Listening at http://localhost:${port}`);
    });

    return { app, server, port };
}
