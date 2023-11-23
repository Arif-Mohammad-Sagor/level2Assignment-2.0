import { IUser } from "./interfece.user";
import userModel from "./model.user";

const createUser =async(user:IUser)=>{
const result = await userModel.create(user);
return result;
}


export default {
  createUser,


};
