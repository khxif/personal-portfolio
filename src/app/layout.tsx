import { Sparkles } from '@/components/core/sparkles';
import { Navbar } from '@/components/navbar/navbar';
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
      <head>
        <meta
          name="google-site-verification"
          content="zfn0M131brC-O3p9c_FCF0N11JfedBl1Ga8slaZcqX0"
        />
      </head>
      <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      <body className={cn(inter.className, 'bg-[#191328] text-white overflow-x-hidden')}>
        <Navbar />
        {children}
        <Sparkles />
        <Analytics />
        <SpeedInsights />
        <Toaster richColors position="bottom-right" />
      </body>
    </html>
  );
}
