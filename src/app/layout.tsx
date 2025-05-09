
import type { Metadata } from 'next';
import { GeistSans, GeistMono, List_Script } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

const geistSans = GeistSans({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = GeistMono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const listScript = List_Script({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-list-script',
});

export const metadata: Metadata = {
  title: "Evangeline's Welcome",
  description: 'Baby Shower Invitation for Evangeline',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${listScript.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
