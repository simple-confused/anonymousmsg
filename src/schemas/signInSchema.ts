import { z } from "zod";
export const signInSchema = z.object({
  identifier: z.string().min(3, { message: "Must be 3 char" }),
  password: z.string().min(6, { message: "Must be 6 char" }),
});
