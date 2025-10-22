import { LoginForm } from "@/app/components/login-form";
import { Metadata } from "next";
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
        <LoginForm />
      </div>
    </div>
  );
}
