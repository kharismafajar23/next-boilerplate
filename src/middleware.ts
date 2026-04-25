import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/signin",
    signOut: "/signin",
  },
});

export const config = {
  matcher: ["/admin/:path*"],
};
