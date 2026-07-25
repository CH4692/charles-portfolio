import './globals.css';

import type { Metadata } from 'next';
import { Manrope, Syne } from 'next/font/google';

import Navbar from '@/components/Navbar';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Charles Heller · Quality-Driven Software Engineer',
  description:
    'Portfolio of Charles Heller — quality-driven software engineer shipping modern web apps with testing, architecture, and automation from day one.',
};

export default function RootLayout({
  about,
  approach,
  home,
  projects,
  skills,
  contacts,
}: Readonly<{
  children: React.ReactNode;
  about: React.ReactNode;
  approach: React.ReactNode;
  home: React.ReactNode;
  projects: React.ReactNode;
  skills: React.ReactNode;
  contacts: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${manrope.variable} ${syne.variable}`}>
      <body className="font-sans">
        <Navbar />
        <main className="px-5 pt-[var(--header-h)] sm:px-9">
          {home}
          {projects}
          {approach}
          {about}
          {skills}
          {contacts}
        </main>
      </body>
    </html>
  );
}
