import type { Metadata } from "next";
import "./globals.css";

const assetPrefix = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Гардарика — шоу-программы и события по всей России",
  description: "14 направлений шоу, исторические фестивали и организация событий: флаг-шоу, огонь, свет, танец, акробатика, роллер-шоу и авторские программы.",
  icons: {
    icon: `${assetPrefix}/brand/gardarika-transparent.png`,
    shortcut: `${assetPrefix}/brand/gardarika-transparent.png`,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
