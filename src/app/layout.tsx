import './globals.css';
import { ReactNode } from 'react';
import Link from 'next/link';
import CartCounter from '@/components/CartCounter';
import { Providers } from './providers';

export const metadata = {
  title: 'Next.js Магазин',
  description: 'Учебный проект: интернет-магазин на Next.js',
  openGraph: {
    title: 'Next.js Магазин',
    description: 'Интернет-магазин, созданный во время обучающего курса',
    type: 'website',
    url: 'https://example.com',
    images: [
      {
        url: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
        width: 1200,
        height: 630,
        alt: 'Обложка магазина',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className="max-w-4xl mx-auto px-4 py-6 font-sans">
        <header className="p-4 bg-gray-900 text-white text-xlmb-8 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Магазин
          </Link>
          <nav className="space-x-4">
            <CartCounter />
            <Link href="/">Главная</Link>
            <Link href="/about">О нас</Link>
          </nav>
        </header>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
