// import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmails";
import { ApiResponse } from "@/types/ApiResponse";
import { createTransport } from "nodemailer";

export async function sendVerificationEmails(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  //yaha pe email bhejne ka code likhna hai
  // Create a transporter object
  const transporter = createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // use SSL
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Configure the mailoptions object
  const mailOptions = {
    from: "Anonymous Message",
    to: email,
    subject: "Verify your account",
    html: `<Html lang="en" dir="ltr">
      <Head>
        <title>Verification Code</title>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      
      <Section>
        <Row>
          <h2>Hello ${username},</h2>
        </Row>
        <Row>
          <Text>
            Thank you for registering. Please use the following verification
            code to complete your registration:
          </Text>
        </Row>
        <Row>
          <Text>${verifyCode}</Text>
        </Row>
        <Row>
          <Text>
            If you did not request this code, please ignore this email.
          </Text>
        </Row>
        
      </Section>
    </Html>`,
  };

  try {
    // await resend.emails.send({
    //   from: "onboarding@resend.dev",
    //   to: email,
    //   subject: "Verify your account",
    //   react: VerificationEmail({ username, otp: verifyCode }),
    // });
    // return { success: true, message: "Verification email sent" };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    return { success: true, message: "Verification email sent" };
  } catch (error) {
    return { success: false, message: "Failed To Send email" };
  }
}
