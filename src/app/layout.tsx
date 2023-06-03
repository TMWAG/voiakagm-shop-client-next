import { Navbar } from '@/components/layout/Navbar/Navbar';
import './globals.css'
import { Source_Sans_Pro } from 'next/font/google'

const source_sans_pro = Source_Sans_Pro({ subsets: ['latin', 'cyrillic'], style: ['normal'], weight: ['700', '400'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={source_sans_pro.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
