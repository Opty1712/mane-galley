import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import Head from "next/head";
import { FC } from "react";
import { Footer, Sidebar, YandexMetrika } from "../components";
import "../globals.css";
import styles from "../styles.module.css";

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      {
        url: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    apple: "/apple-touch-icon.png",
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
  metadataBase: new URL("https://www.manedigital.ru/"),
  title: "Наталья, продуктовый дизайнер, UX/UI дизайнер",
  description: "Резюме и портфолио Натальи, UX/UI дизайнер",
  openGraph: {
    type: "website",
    title: "Наталья, продуктовый дизайнер, UX/UI дизайнер",
    description: "Наталья, продуктовый дизайнер, UX/UI дизайнер",
    url: "https://www.manedigital.ru/",
    images: [
      {
        url: "/images/me_small.webp",
        width: 640,
        height: 640,
        alt: "Наталья, продуктовый дизайнер, UX/UI дизайнер",
      },
    ],
    siteName: "ManeDigital",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    site: "https://www.manedigital.ru/",
    description: "Наталья, продуктовый дизайнер, UX/UI дизайнер",
    images: ["/images/me_small.webp"],
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <ViewTransitions>
      <html lang="ru">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, height=device-height, initial-scale=1, viewport-fit=cover"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
        </Head>
        <body id="top">
          <YandexMetrika />
          <Sidebar />
          <main className={styles.main} id="content">
            {children}
            <Footer />
          </main>
        </body>
      </html>
    </ViewTransitions>
  );
};

export default RootLayout;
