import type { Metadata } from "next";
import { Inter } from "next/font/google";
import BottomNav from "./components/BottomNav";
import Sidebar from "./components/Sidebar";
import "./globals.css";

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
        <main
          style={{
            marginLeft: "100px",
            padding: "2rem",
            "@media (maxWidth: 768px)": {
              marginLeft: 0,
            },
          }}
        >
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  );
}
