import './globals.css'
import { Footer, Navbar } from '@/components'

export const metadata = {
  title: 'Car Bazar',
  description: 'Discover The Best',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer /> 
        </body>
    </html>
  )
}
