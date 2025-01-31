import type { Metadata } from "next";
import { FC } from "react";
import { Sidebar } from "./components";
import "./globals.css";
import styles from "./layout.module.css";

export const metadata: Metadata = {
  title: "Наталья, продуктовый дизайнер",
  description:
    "Портфолио и резюме Натальи Манаткиной, продуктого дизайнера, UX/UI дизайнера",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="ru">
      <body>
        <Sidebar />
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
