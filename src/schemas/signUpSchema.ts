import { z } from "zod";
export const usernameValidation = z
  .string()
  .min(3, "Must be 2 char")
  .max(20, "Must be 20 char")
  .regex(/^[a-zA-Z0-9_]*$/, "No special characters allowed");

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});
