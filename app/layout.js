import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MakaDonVeli',
  description: 'Join the Chicken Coop - For variaty games and plemty of salt.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='min-h-screen'>
      <body className={inter.className + 'min-h-screen flex flex-col justify-between'} style={{backgroundImage: `url("/assets/bg1.jpg")`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <Header />
        <main className='h-[93vh]'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
