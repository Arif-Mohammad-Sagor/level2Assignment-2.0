import {Request,Response} from 'express';
import { ordersServices } from './orders.services';

const makeOrders = async(req:Request,res:Response)=>{
try {
  const { userId } = req.params;
  const orderInfo = req.body;
  const result = await ordersServices.makeOrders(userId, orderInfo);
  res.status(201).json(result);
} catch (error) {
   res.status(400).json({
     success: false,
     message: 'something went wrong',
     error,
   });
}
}

export const orderControllers = {
  makeOrders
}