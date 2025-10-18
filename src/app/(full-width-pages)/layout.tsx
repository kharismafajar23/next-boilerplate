import "@/styles/admin.css";

export default function FullWidthPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
