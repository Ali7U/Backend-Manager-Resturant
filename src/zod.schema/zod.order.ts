import { TypeOf, z } from "zod";

export const orderSchema = z.object({
  body: z.object({
    foodName: z.string({
      required_error: "Food name is required",
      invalid_type_error: "Food name must be string",
    }),
    price: z.number({
      required_error: "Price is Required!",
      invalid_type_error: "Price must be number",
    }),
    qty: z.number({
      required_error: "Quantity number is required",
      invalid_type_error: "Quantity must be number",
    }),
    total: z.number({
      required_error: "total price is required",
      invalid_type_error: "total price must be number",
    }),
  }),
});

export type OrdersTypeschema = TypeOf<typeof orderSchema>["body"];
