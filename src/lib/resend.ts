import { Resend } from "resend";

export const resend = new Resend(process.env.Resend_API_KEY);
