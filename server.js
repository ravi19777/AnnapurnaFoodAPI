import express from 'express';
import { APP_PORT } from './Config';
import routes from './Routes';
import errorHandler from './Middleware/ErrorHandler';

const app = express();
app.use(express.json());
app.use('/api', routes); // This will register all the routes


app.use(errorHandler);
app.listen(APP_PORT, () => console.log(`Listening on port ${APP_PORT}`));