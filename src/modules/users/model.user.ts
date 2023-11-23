import { Schema, model } from 'mongoose';
import { IAddress, IName, IUser } from './interfece.user';

const userNameSchema = new Schema<IName>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});
const userAddressSchema = new Schema<IAddress>({
  street: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
});

// const userOrdersSchema = new Schema<IOrders>({
//   productName: { type: String, required: true },
//   price: { type: Number, required: true },
//   quantity: { type: Number, required: true },
// });

const userSchema = new Schema<IUser>({
  userId: { type: Number, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullname: userNameSchema,
  age: { type: Number, required: true },
  email: { type: String, required: true },
  isActive: { type: Boolean, required: true, default: true },
  hobbies: [{ type: String }],
  address: userAddressSchema,
  // orders: userOrdersSchema,
});
const userModel = model<IUser>('users', userSchema);
export default userModel;
