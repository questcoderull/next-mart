import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export const middleware = async (req) => {
  const token = await getToken({ req });

  const isTokenOk = Boolean(token);
  const isUser = token?.role == "user";

  const isUserSpecificRoute = req.nextUrl.pathname.startsWith("/dashboard");

  if (isUserSpecificRoute && !isUser) {
    const callbackUrl = encodeURIComponent(req.nextUrl.pathname);

    return NextResponse.redirect(
      new URL(`/api/auth/signin?callbackUrl=${callbackUrl}`, req.url)
    );
  }
  return NextResponse.next();
};
