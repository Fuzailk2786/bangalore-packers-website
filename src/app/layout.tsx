import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import CallNowButton from '@/components/common/CallNowButton';
import '../app/globals.css'; // <-- Change it exactly to this!

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.yourdomain.com'),
  title: {
    default: 'Best Packers and Movers in Bangalore | Safe & Reliable Shifting',
    template: '%s | MoveSafe Packers and Movers Bangalore'
  },
  description: 'Top-rated Packers and Movers in Bangalore. Get professional home shifting, office relocation, domestic moving, and vehicle transport services at affordable rates.',
  alternates: {
    canonical: './',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.yourdomain.com',
    siteName: 'MoveSafe Packers and Movers',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'MoveSafe Packers and Movers Bangalore' }]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased relative min-h-screen pb-16 md:pb-0`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <CallNowButton />
      </body>
    </html>
  );
}
