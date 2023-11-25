interface IOrders {
  productName:string,
  price:number,
  quantity:number,
}
export interface IUser {
  userId: number;
  username: string;
  password: string;
  fullname: {
    firstName: string;
    lastName: string;
  };
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: {
    street: string;
    city: string;
    country: string;
  };
  orders?:IOrders[]
}
