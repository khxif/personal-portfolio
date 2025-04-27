import { Sparkles } from '@/components/core/sparkles';
import { Header } from '@/components/header/header';
import { cn } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Khaif',
    template: 'Khaif - %s',
  },
  description: 'My personal Website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      <body className={cn(inter.className, 'bg-[#191328] text-white overflow-x-hidden')}>
        <Header />
        {children}
        <Sparkles />
        <Analytics />
        <SpeedInsights />
        <Toaster richColors position="bottom-right" />
      </body>
    </html>
  );
}
