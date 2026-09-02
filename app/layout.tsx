import type { Metadata } from "next";
import "./globals.css";

const siteOrigin =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://gardarika-show.semenovspb.chatgpt.site";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const canonicalUrl = `${siteOrigin}${basePath}/`;
const socialImageUrl = `${siteOrigin}${basePath}/og.jpg`;

const title = "Гардарика — шоу-программы и события по всей России";
const description =
  "14 направлений шоу, исторические фестивали и организация событий: флаг-шоу, огонь, свет, танец, акробатика, роллер-шоу и авторские программы.";

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title,
  description,
  applicationName: "Гардарика",
  alternates: {
    canonical: canonicalUrl,
  },
  icons: {
    icon: `${basePath}/brand/gardarika-transparent.png`,
    shortcut: `${basePath}/brand/gardarika-transparent.png`,
  },
  openGraph: {
    title,
    description,
    url: canonicalUrl,
    siteName: "Гардарика",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: socialImageUrl,
        width: 1200,
        height: 630,
        alt: "Творческий коллектив «Гардарика»: шоу-программы и события по всей России",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImageUrl],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
