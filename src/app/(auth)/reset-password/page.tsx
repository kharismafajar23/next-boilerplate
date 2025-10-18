import ResetPasswordForm from "@/components/admin/auth/ResetPasswordForm";
import { generateMetadata } from "@/lib/metadata";

import React from "react";

export const metadata = generateMetadata({
  title: "Reset Password",
  description: "Reset password kamu disini",
  image: "/images/og-about.jpg",
  url: `${process.env.NEXT_PUBLIC_BASE_URL}/reset-password`,
  type: "website",
});

export default function ResetPasswordPage() {
  return <ResetPasswordForm />;
}
