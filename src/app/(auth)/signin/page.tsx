import SignInForm from "@/components/admin/auth/SignInForm";
import { generateMetadata } from "@/lib/metadata";

export const metadata = generateMetadata({
  title: "Sign In",
  description: "Silahkan masukkan akun kamu",
  image: "/images/og-about.jpg",
  url: `${process.env.NEXT_PUBLIC_BASE_URL}/signin`,
  type: "website",
});

export default function SignIn() {
  return <SignInForm />;
}
