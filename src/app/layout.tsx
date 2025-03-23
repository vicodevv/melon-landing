import localFont from 'next/font/local';
import { Karla } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';

const mabryPro = localFont({
  variable: '--font-mabry',
  src: [
    {
      path: '../../public/fonts/mabry-pro/MabryPro-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/mabry-pro/MabryPro-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/mabry-pro/MabryPro-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/mabry-pro/MabryPro-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/mabry-pro/MabryPro-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/mabry-pro/MabryPro-Italic.ttf',
      weight: '300',
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
      <body className={`${karla.variable} ${mabryPro.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
