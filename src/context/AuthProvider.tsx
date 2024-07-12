"use client";

import { SessionProvider } from "next-auth/react";

export default function AuthProvider({
  children,
}: {
  // eslint-disable-next-line
  children: React.ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}
