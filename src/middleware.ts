import { NextResponse } from "next/server";
import NextAuth from "next-auth";
import { authConfig } from "@/lib/auth.config";

const { auth: middleware } = NextAuth(authConfig);

const PUBLIC_ROUTES: string[] = [];
const AUTH_ROUTES = ["/auth/signup", "/auth/signin"];

export default middleware((request) => {
  const { nextUrl } = request;
  const _authenticated = !!request.auth;

  if (nextUrl.pathname.startsWith("/api/auth")) return;

  if (AUTH_ROUTES.includes(nextUrl.pathname)) {
    if (_authenticated) {
      return NextResponse.redirect(new URL("/dashboard", nextUrl));
    }
    return;
  }

  if (!_authenticated && !PUBLIC_ROUTES.includes(nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/auth/signin", nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
