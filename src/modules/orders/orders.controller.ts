import { Request, Response } from 'express';
import { ordersServices } from './orders.services';

const makeOrders = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;
    const userId = parseInt(id);
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
};
const getOrders = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;
    const userId = parseInt(id);
    const result = await ordersServices.getOrders(userId);
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: 'something went wrong',
      error,
    });
  }
};
const getTotalPrice = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;
    const userId = parseInt(id);
    const result = await ordersServices.getTotalPrice(userId);
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: 'something went wrong',
      error,
    });
  }
};

export const orderControllers = {
  makeOrders,
  getOrders,
  getTotalPrice,
};
