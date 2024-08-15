import { bootstrap }  from './app.js';

try {
  const { app, server, port } = await bootstrap();
  console.log(`server started at ${port}`);
} catch (e) {
  console.error(e);
}
