import z from "zod";

export const UserSignupSchema = z
  .object({
    name: z.string().min(1, "Please provide account name"),
    email: z.email("Please provide a valid email account"),
    password: z.string().min(8, "Your password must have at least 8 character"),
  })
  .strict();

export const UserSignInSchema = z
  .object({
    email: z.email("Please provide a valid email account"),
    password: z.string().min(8, "Your password must have at least 8 character"),
  })
  .strict();
