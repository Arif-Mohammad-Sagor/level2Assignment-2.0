import express from 'express';
import controllerUser from './controller.user';

const router = express.Router();

router.post('/api/users', controllerUser.createUser);
router.get('/api/users', controllerUser.getallUser);
router.get('/api/users/:userId', controllerUser.getSingleUser);
router.put('/api/users/:userId', controllerUser.updateUser);
router.delete('/api/users/:userId', controllerUser.deleteUser);

export const userRouter = {
  router,
  
};
