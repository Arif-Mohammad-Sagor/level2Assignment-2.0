import express, { Application } from 'express';
import cors from 'cors';
import { userRouter } from './modules/users/route.user';
import { orderRoutes } from './modules/orders/orders.router';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

app.use(userRouter.router); // application api
app.use(orderRoutes.router);

app.get('/', (req, res) => {
  res.send('Hello world');
});

export default app;
