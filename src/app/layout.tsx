import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Продуктовый дайджест — AI, UX/UI и дизайн-системы",
  description:
    "Независимый дайджест материалов об искусственном интеллекте, продуктовом дизайне, UX/UI, дизайн-системах и инструментах дизайнеров.",
  openGraph: {
    title: "Продуктовый дайджест",
    description:
      "Самое интересное об AI, UX/UI и продуктовом дизайне. Идеи, инструменты и исследования, которые стоит прочитать.",
    type: "website",
    locale: "ru_RU",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#080C14",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
