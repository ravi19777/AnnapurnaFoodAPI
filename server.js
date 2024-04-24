import express from 'express';
import { APP_PORT } from './Config';
import routes from './Routes';

const app = express();

app.use('/api', routes); // This will register all the routes

app.listen(APP_PORT, () => console.log(`Listening on port ${APP_PORT}`));