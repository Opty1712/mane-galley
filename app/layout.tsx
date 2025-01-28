import type { Metadata } from "next";
import { Inter } from "next/font/google";
import BottomNav from "./components/BottomNav";
import Sidebar from "./components/Sidebar";
import "./globals.css";
import styles from "./layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Sidebar />
        <main className={styles.main}>{children}</main>
        <BottomNav />
      </body>
    </html>
  );
}
