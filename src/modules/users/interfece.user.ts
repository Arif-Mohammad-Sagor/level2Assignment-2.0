interface IName {
  firstName: string;
  lastName: string;
}
interface IAddress {
  street: string;
  city: string;
  country: string;
}

interface IOrders {
  productName: string;
  price: number;
  quantity: number;
}

export interface IUser {
  userId: number;
  username: string;
  password: string;
  fullname: IName;
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: IAddress;
  orders: IOrders[];
}
