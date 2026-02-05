import type { Metadata } from 'next'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import BootstrapClient from '@/components/BootstrapClient'
import { GoogleTagManager } from '@next/third-parties/google'


export const metadata: Metadata = {
  title: 'Flash Muscles – Best Bodybuilding & Muscle Supplements in India',
  description: 'Shop authentic whey protein, creatine, and vitamins at FlashMuscles. We guarantee 100% original products from top global brands with lightning-fast delivery across India. Fuel your gains today!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-PS8D96QK" />
      <body>
        {children}
        <BootstrapClient />
      </body>
    </html>
  )
}
