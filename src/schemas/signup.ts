import { z } from "zod";

export const signupSchema = z.object({
  name: z.string().min(2).max(25),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be atleast 8 characters long" })
    .max(24, { message: "Password length should be maximum 24 character" })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      "Password must contain atleast 8 characters, one uppercase, one lowercase, one number and one special character"
    ),
});
