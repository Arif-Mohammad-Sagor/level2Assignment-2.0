import { Query, Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
import { IUser } from './interfece.user';
import config from '../../config';

const userSchema = new Schema<IUser>({
  userId: { type: Number, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullname: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  isActive: { type: Boolean, required: true, default: true },
  hobbies: [{ type: String }],
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
  },
});

userSchema.pre('save', async function (next) {
  //hashing password
  this.password = await bcrypt.hash(this.password, Number(config.salt_round));
  next();
});

userSchema.methods.toJSON = function () {// removing  password
  const userObject = this.toObject();
  delete userObject.password;
  return userObject;
};

const userModel = model<IUser>('users', userSchema);
export default userModel;
