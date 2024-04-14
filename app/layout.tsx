import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import { Toaster } from "react-hot-toast"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The cityfloors",
  description: "Providing all categories products!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={cn(inter.className, "bg-light text-black ")}>
        <Toaster/>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
