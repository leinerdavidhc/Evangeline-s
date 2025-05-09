
import type { Metadata } from 'next';
import { Dancing_Script } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dancing-script',
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
      <body className={`${GeistSans.variable} ${GeistMono.variable} ${dancingScript.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

