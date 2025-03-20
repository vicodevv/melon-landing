import { Karla } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';

const recoleta = localFont({
  variable: '--font-recoleta',
  src: [
    {
      path: '../../public/fonts/Alliance.otf',
      weight: '400',
      style: 'normal',
    },
  ],
});

const karla = Karla({ subsets: ['latin'], variable: '--font-karla' });

export const metadata: Metadata = {
  title: 'Melon',
  description: 'Melon Landing Page',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${karla.variable} ${recoleta.variable} antialiased`}
        style={{
          fontFamily: 'Gelasio-italic, Arial, sans-serif, GeneralSans-Regular',
        }}
      >
        {children}
      </body>
    </html>
  );
}