
import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/student.route';
import { UserRoutes } from './app/modules/user/user.route';
import globalErrorHandler from './app/middlwares/globalErrorHandler';
import notFound from './app/middlwares/notFound';
import router from './app/routes';

const app: Application = express();


// parsers
app.use(express.json());
app.use(cors())

// app routes
app.use('/api/v1', router);


app.use(globalErrorHandler);
app.use(notFound);


export default app;