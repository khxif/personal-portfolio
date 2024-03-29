import Header from "@/components/Header/Header";
import SparkleBackGround from "@/components/SparkleBackGround";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Khaif",
    template: "Khaif - %s",
  },
  description: "My personal Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      <body
        className={cn(
          inter.className,
          "bg-[#191328] text-white overflow-x-hidden"
        )}
      >
        <Header />
        <SparkleBackGround />
        {children}
        <Toaster richColors position="top-left" />
      </body>
    </html>
  );
}
