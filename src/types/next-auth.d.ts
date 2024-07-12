import "next-auth";

declare module "next-auth" {
  // eslint-disable-next-line
  interface Session {
    user: {
      _id?: string;
      isVerified?: boolean;
      isAcceptingMessages?: boolean;
      username?: string;
      // eslint-disable-next-line
    } & DefaultSession["user"];
  }
  // eslint-disable-next-line
  // eslint-disable-next-line
  interface User {
    _id?: string;
    isVerified?: boolean;
    isAcceptingMessages?: boolean;
    username?: string;
  }
}

declare module "next-auth/jwt" {
  // eslint-disable-next-line
  interface JWT {
    _id?: string;
    isVerified?: boolean;
    isAcceptingMessages?: boolean;
    username?: string;
  }
}
