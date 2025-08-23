import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Charles Heller",
  description: "Portfolio Website of Charles Heller",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="p-8">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
