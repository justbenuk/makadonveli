import './globals.css'
import { Inter } from 'next/font/google'
import Hero from '@/components/hero/hero'
import {Analytics} from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MakaDonVeli',
  description: 'Join the Chicken Coop - For variaty games and plemty of salt.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='h-screen'>
      <body className={inter.className }>
        <Hero />
        <main className=''>{children}</main>
        <Analytics />
      </body>
    </html>
  )
}
