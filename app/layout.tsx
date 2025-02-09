import type { Metadata } from "next";
import Head from "next/head";
import { FC } from "react";
import { ScrollToTop, Sidebar } from "./components";
import "./globals.css";
import styles from "./layout.module.css";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
    shortcut: {
      url: "/favicon.png",
      type: "image/x-icon",
    },
  },
  metadataBase: new URL("https://www.mane.gallery/"),
  title: "Наталья, продуктовый дизайнер, UX/UI дизайнер",
  description: "Резюме и портфолио Натальи, UX/UI дизайнер",
  openGraph: {
    type: "website",
    title: "Наталья, продуктовый дизайнер, UX/UI дизайнер",
    description: "Наталья, продуктовый дизайнер, UX/UI дизайнер",
    url: "https://www.mane.gallery/",
    images: [
      {
        url: "/images/me_small.webp",
        width: 640,
        height: 640,
        alt: "Наталья, продуктовый дизайнер, UX/UI дизайнер",
      },
    ],
    siteName: "Notion",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    site: "https://www.mane.gallery/",
    description: "Наталья, продуктовый дизайнер, UX/UI дизайнер",
    images: ["/images/me_small.webp"],
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="ru">
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1, viewport-fit=cover"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </Head>
      <body>
        <Sidebar />
        <main className={styles.main} id="content">
          {children}
          <ScrollToTop />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
