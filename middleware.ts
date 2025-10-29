import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
const protectedRoutes = ["/dashboard", "/dashboard/addjob"];

const authRoutes = ["/sign-in", "/sign-up"];
export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();
  const path = req.nextUrl.pathname;

  if (userId && authRoutes.includes(path)) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (!userId && protectedRoutes.includes(path)) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  return;
});

export const config = {
  matcher: ["/((?!_next|.*\\..*|api).*)"],
};

// export function middleware(req: any) {
//   const path = req.nextUrl.pathname;

//   if (authRoutes.includes(path)) {
//     return console.log("protected route");
//   }
// }
