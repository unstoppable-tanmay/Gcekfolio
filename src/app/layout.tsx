import './globals.css';
import React from 'react';
import { Inter } from 'next/font/google';
import NavBar from '@/components/NavBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Gcekfolio',
  description: 'Gcekfolio is a portfolio website for GCEKians',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='relative w-screen overflow-x-hidden bg-background'>
        <NavBar />
        <div>{children}</div>
      </body>
    </html>
  );
}
