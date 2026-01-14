import type { Metadata } from 'next';
import { Ysabeau_Infant } from 'next/font/google';
import './globals.css';

const mainFont = Ysabeau_Infant({
  variable: '--main-font',
  subsets: ['latin', 'cyrillic'],
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
      <body className={mainFont.variable}>{children}</body>
    </html>
  );
}
