import express from 'express';
import controllerUser from './controller.user';

const router = express.Router();

router.post('/api/users', controllerUser.createUser);
router.get('/api/users',controllerUser.getallUser);
router.get('/api/user/:userId',controllerUser.getSingleUser);
router.put('/api/user/:userId',controllerUser.updateUser);
router.delete('/api/user/:userId',controllerUser.deleteUser)

export const userRouter = {
  router,
}
