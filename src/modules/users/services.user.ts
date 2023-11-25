import { IUser } from './interfece.user';
import userModel from './model.user';

const createUser = async (user: IUser) => {
  if (await userModel.isUserExists(user.userId)) {
    return {
      success: false,
      message: 'User Already Exists',
      error: {
        code: 404,
        description: 'User Already Exists',
      },
    };
  }
  const result = await userModel.create(user);
  return {
    success: true,
    message: 'User created successfully',
    data: result,
  };
};

const getAllUser = async () => {
  const result = await userModel.find();
  return result;
};
const getSingleUser = async (userId: number) => {
  const user = await userModel.isUserExists(userId);
  if (!user) {
    return {
      success: false,
      message: 'User Not Found',
      error: {
        code: 404,
        description: 'User Not Found',
      },
    };
  }
  const result = await userModel.findOne({ userId });
  return {
    success: true,
    message: 'User Fetch successfully',
    data: result,
  };
};
const updateUser = async (params: number, userInfo: IUser) => {
  const user = await userModel.isUserExists(params);
  if (!user) {
    return {
      success: false,
      message: 'User Not Found',
      error: {
        code: 404,
        description: 'User Not Found',
      },
    };
  }
  const result = await userModel.findOneAndUpdate(
    { userId: params },
    { $set: userInfo },
    { upsert: true, new: true },
  );
  return {
    success: true,
    message: 'User updated successfully',
    data: result,
  };
};
const deleteUser = async (params:number) => {
  const user = await userModel.isUserExists(params);
  if (!user) {
    return {
      success: false,
      message: 'User Not Found',
      error: {
        code: 404,
        description: 'User Not Found',
      },
    };
  }
  let result = await userModel.findOneAndDelete({ userId: params });

  return {
    success: true,
    message: 'User deleted successfully',
    data: null,
  };
};
export default {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
