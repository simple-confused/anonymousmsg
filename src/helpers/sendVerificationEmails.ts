import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmails";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmails(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Verify your account",
      react: VerificationEmail({ username, otp: verifyCode }),
    });
    return { success: true, message: "Verification email sent" };
  } catch (error) {
    return { success: false, message: "Failed To Send email" };
  }
}
