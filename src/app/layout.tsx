import './globals.css';

import type { Metadata } from 'next';

import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Charles Heller',
  description: 'Portfolio Website of Charles Heller',
};

export default function RootLayout({
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
    <html lang="en" className="scroll-smooth">
      <body className="">
        <Navbar />
        <main className="pt-[var(--header-h)]">
          {home}
          {about}
          {skills}
          {projects}
          {contacts}
        </main>
      </body>
    </html>
  );
}
