import express from 'express';
import controllerUser from './controller.user';

const router = express.Router();

router.post('/api/users', controllerUser.createUser);

export const userRouter = {
  router,
}
