import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Charles Heller",
  description: "Portfolio Website of Charles Heller",
};

export default function RootLayout({
  children,
  about,
  home,
  projects,
  skills,
  contacts,
}: Readonly<{
  children: React.ReactNode;
  about: React.ReactNode;
  home: React.ReactNode;
  projects: React.ReactNode;
  skills: React.ReactNode;
  contacts: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {/* <main>{children}</main> */}
        {home}
        {about}
        {skills}
        {projects}
        {contacts}
      </body>
    </html>
  );
}
