import type { Metadata } from 'next';
import { Ubuntu_Mono } from 'next/font/google';
import './globals.css';
import { Background } from '@/components/Background/Background';
import { Navigation } from '@/components/Navigation/Navigation';
import { Logo } from '@/components/Logo/Logo';

const mainFont = Ubuntu_Mono({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700'],
  variable: '--main-font',
});

export const metadata: Metadata = {
  title: 'PuraFocus',
  description:
    'PuraFocus is your space for deep concentration and mindful work. Eliminate distractions and achieve your goals at a pace that suits you best',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mainFont.variable}>
        <Background>
          <Logo />
          {children}
          <Navigation />
        </Background>
      </body>
    </html>
  );
}
