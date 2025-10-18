export function generateMetadata({
  title,
  description,
  image = "/images/og-default.jpg",
  url = process.env.NEXT_PUBLIC_BASE_URL,
  type = "website",
}: {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
}) {
  return {
    title: `${title} | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
    description,
    openGraph: {
      title: `${title} | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
      description,
      url,
      siteName: process.env.NEXT_PUBLIC_SITE_NAME,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "id_ID",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
      description,
      images: [image],
    },
  };
}
