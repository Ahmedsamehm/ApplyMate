import { Metadata } from "next";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SignUp } from "@clerk/nextjs";
export const metadata: Metadata = {
  title: "Signup",
  description: "signup new account",
};
export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Link href="/sign-in">
          <h1 className="flex  gap-1 mb-2 cursor-pointer text-slate-300  hover:text-primary transition-colors">
            <ArrowLeft /> Back to login
          </h1>
        </Link>
        <SignUp path="/sign-up" routing="path" />
      </div>
    </div>
  );
}
