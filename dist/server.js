import { bootstrap } from './app.js';
import { initORM } from './db.js';
try {
    await initORM();
    const { app, server, port } = await bootstrap();
    console.log(`server started at ${port}`);
}
catch (e) {
    console.error(e);
}
