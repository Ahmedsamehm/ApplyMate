import { LoginForm } from "@/app/components/login-form";

import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
  icons: {
    icon: "/favicon.ico",
  },
};
export default function page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Link href="/">
          <h1 className="flex  gap-1 mb-2 cursor-pointer text-slate-300  hover:text-primary transition-colors">
            <ArrowLeft /> Back to home
          </h1>
        </Link>
        <LoginForm />
      </div>
    </div>
  );
}
