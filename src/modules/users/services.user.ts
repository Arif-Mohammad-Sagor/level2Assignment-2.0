import { IUser } from './interfece.user';
import userModel from './model.user';

const createUser = async (user: IUser) => {
  const result = await userModel.create(user);
  return result;
};
const getAllUser = async () => {
  const result = await userModel.find();
  return result;
};
const getSingleUser = async (userId: string) => {
  const result = userModel.findOne({ userId });
  return result;
};
const updateUser = async (params: string, userInfo: IUser) => {
  const result = await userModel.findOneAndUpdate(
    { userId: params },
    { $set: userInfo },
  );
  return result;
};
const deleteUser = async (params: string) => {
  const result = await userModel.findByIdAndDelete({ params });
  return result;
};
export default {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
