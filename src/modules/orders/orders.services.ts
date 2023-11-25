import userModel from '../users/model.user';

const makeOrders = async (userId: number, orderInfo: object) => {
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

const getOrders = async (userId: number) => {
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
  const result = await userModel.findOne({ userId }).select('orders');
  return {
    success: true,
    message: 'Orders Fetch successfully',
    data: result,
  };
};

const getTotalPrice = async (userId: number) => {
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

  const result = await userModel.aggregate([
    {
      $match: { userId: userId },
    },
    {
      $unwind: '$orders',
    },
    {
      $group: {
        _id: null,
        totalPrice: { $sum: '$orders.price' },
      },
    },
  ]);

  return {
    success: true,
    message: 'Total price calculated successfully!',
    data: {
      totalPrice: result,
    },
  };
};
export const ordersServices = {
  makeOrders,
  getOrders,
  getTotalPrice,
};
