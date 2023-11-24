import z from 'zod';

const userValidationSchema = z.object({
  userId: z.string(),
  username: z.string(),
  password: z.string(),
  fullname: z.object({
    firstName: z.string(),
    lastName: z.string(),
  }),
  age: z.number(),
  email: z.string(),
  isActive: z.boolean().default(true),
  hobbies: z.array(z.string()),
  address: z.object({
    street: z.string(),
    city: z.string(),
    country: z.string(),
  }),
  orders:z.array(z.object({
    productName:z.string(),
    price:z.number(),
    quantity:z.number()

  }))
  
});

export default userValidationSchema;
