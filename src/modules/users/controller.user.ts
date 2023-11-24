import { Request, Response } from 'express';
import userValidationSchema from './validation.user';
import servicesUser from './services.user';

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const zodvalidatedUser = userValidationSchema.parse(user);
    const result = await servicesUser.createUser(zodvalidatedUser);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'something went wrong',
      error,
    });
  }
};

const getallUser = async (req: Request, res: Response) => {
  try {
    const result = await servicesUser.getAllUser();
    res.status(201).json({
      success: true,
      message: 'fetched users successfully',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'something went wrong',
      error,
    });
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await servicesUser.getSingleUser(userId);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'something went wrong',
      error,
    });
  }
};
const updateUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const updatedUserInfo = req.body;

    const zodvalidatedUser = userValidationSchema.parse(updatedUserInfo);
    const result = await servicesUser.updateUser(userId, zodvalidatedUser);

    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'something went wrong',
      error,
    });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await servicesUser.deleteUser(userId);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'something went wrong',
      error,
    });
  }
};

export default {
  createUser,
  getallUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
