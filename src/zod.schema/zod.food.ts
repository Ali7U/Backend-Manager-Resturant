import { z } from "zod";

export const createSchema = z.object({
  body: z.object({
    foodName: z
      .string({
        required_error: "Food name is required",
        invalid_type_error: "Food name must be string",
      })
      .min(2, "Title must consist of 2 or more letters"),
    userID: z
      .string({
        required_error: "userId is required",
        invalid_type_error: "userId must be string",
      })
      .uuid(),
    price: z.number({
      required_error: "Price is Required!",
      invalid_type_error: "Price must be number",
    }),
    img: z.string({
      required_error: "Image food is required",
      invalid_type_error: "image must be string",
    }),
  }),
});
export const updateSchema = z.object({
  body: z.object({
    foodName: z
      .string({
        required_error: "Food name is required",
        invalid_type_error: "Food name must be string",
      })
      .min(2, "Title must consist of 2 or more letters"),
    userID: z
      .string({
        required_error: "userId is required",
        invalid_type_error: "userId must be string",
      })
      .uuid(),
    price: z.number({
      required_error: "Price is Required!",
      invalid_type_error: "Price must be number",
    }),
    img: z.string({
      required_error: "Image food is required",
      invalid_type_error: "image must be string",
    }),
  }),
  params: z.object({
    id: z
      .string({
        required_error: "id is required",
        invalid_type_error: "id must be string",
      })
      .uuid(),
  }),
});
export const deleteSchema = z.object({
  body: z.object({
    userID: z
      .string({
        required_error: "userId is required",
        invalid_type_error: "userId must be string",
      })
      .uuid(),
  }),
  params: z.object({
    id: z
      .string({
        required_error: "id is required",
        invalid_type_error: "id must be string",
      })
      .uuid(),
  }),
});
