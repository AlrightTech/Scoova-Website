import { Suspense } from 'react'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import NavigationLoader from '@/components/NavigationLoader'
import { AuthProvider } from '@/contexts/AuthContext'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata = {
  title: 'Scoova',
  description: 'Scoova - Your Educational Platform',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <AuthProvider>
          <Suspense fallback={null}>
            <NavigationLoader />
          </Suspense>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}

