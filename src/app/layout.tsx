import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import CallNowButton from '@/components/common/callnobutton';
import { SITE } from '@/lib/site';
import './globals.css';

const manrope = Manrope({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: {
    default: 'MoveSafe Packers and Movers | Packers and Movers in Bangalore',
    template: `%s | ${SITE.shortName}`,
  },
  description: 'Professional home shifting, office relocation, packing and vehicle transport services from HSR Layout, Bangalore.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${manrope.className} min-h-screen bg-stone-50 text-slate-900 antialiased pb-[calc(3.5rem+env(safe-area-inset-bottom))] md:pb-0`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <CallNowButton />
      </body>
    </html>
  );
}
