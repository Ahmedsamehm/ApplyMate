import { SignupForm } from "@/app/components/signup-form";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Signup",
  description: "signup new account",
  icons: {
    icon: "/favicon.ico",
  },
};
export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Link href="/login">
          <h1 className="flex  gap-1 mb-2 cursor-pointer text-slate-300  hover:text-primary transition-colors">
            <ArrowLeft /> Back to login
          </h1>
        </Link>
        <SignupForm />
      </div>
    </div>
  );
}
