import { Request, Response } from 'express';
import userValidationSchema from './validation.user';
import servicesUser from './services.user';

const createUser = async (req: Request, res: Response,) => {
  try {
    const user = req.body;
    const zodvalidatedUser = userValidationSchema.parse(user);
    const result = await servicesUser.createUser(zodvalidatedUser);
    res.status(200).json({
      success: true,
      message: 'User created successfully',
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

export default {
  createUser,
};
