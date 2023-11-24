import express from 'express';
import { orderControllers } from './orders.controller';
const router = express.Router();

router.put('/api/user/:userId/orders',orderControllers.makeOrders);


export const orderRoutes = {
  router
}