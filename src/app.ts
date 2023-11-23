import express, { Application } from 'express';
import cors from 'cors';
// import globalError from './modules/global/global.error';
import { userRouter } from './modules/users/route.user';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

app.use(userRouter.router); // application api

app.get('/', (req, res) => {
  res.send('Hello world');
});

// app.all('*', globalError.handleAllRequests); //all wrong route handling
// app.use((error,req,res,next) => {
//   globalError.errorHandler(error,req, res, next);
// });

export default app;
