import type { Metadata } from 'next'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import BootstrapClient from '@/components/BootstrapClient'

export const metadata: Metadata = {
  title: 'Russo Pharma - Flash Muscle Supplements',
  description: 'Unlock your peak power with medical-grade supplements. Vit2MAX and Riboxin - Advanced formulas for athletes.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <BootstrapClient />
      </body>
    </html>
  )
}
