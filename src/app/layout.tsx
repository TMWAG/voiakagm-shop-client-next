import './globals.css'
import styles from './layout.module.css';
import localFont from 'next/font/local';
import { Header } from '@/app/components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { getCategories } from "@/lib/api/getCategories";

const SFProDisplay = localFont({
  src: '../../fonts/SF-Pro-Display-Regular.otf',
}); 

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const categories = await getCategories();
  return (
    <html lang="ru">
      <body className={`${SFProDisplay.className} ${styles.rootLayout}`}>
        <Header/>
        <Sidebar categories={categories}/>
        {children}
      </body>
    </html>
  )
}
