import userModel from '../users/model.user';

const makeOrders = async (userId: string, orderInfo: object) => {
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

  const result = await userModel.findOneAndUpdate(
    { userId },
    { $addToSet: { orders: orderInfo } },
    { upsert: true, new: true },
  );
  return {
    success: true,
    message: 'Order created Successfully',
    data: null,
  };
};

export const ordersServices ={
  makeOrders,
}