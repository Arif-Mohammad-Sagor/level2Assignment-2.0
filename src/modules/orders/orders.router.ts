import express from 'express';
import { orderControllers } from './orders.controller';
const router = express.Router();

router.put('/api/users/:userId/orders',orderControllers.makeOrders);
router.get('/api/users/:userId/orders',orderControllers.getOrders);
router.get('/api/users/:userId/orders/total-price',orderControllers.getTotalPrice)


export const orderRoutes = {
  router
}