import type { Metadata } from 'next'
import { Cormorant_Garamond, Montserrat, Lora } from 'next/font/google'
import './globals.css'
import RevealObserver from '@/components/RevealObserver'
import { LanguageProvider } from '@/context/LanguageContext'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '500'],
  variable: '--font-montserrat',
})

const lora = Lora({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-lora',
})

export const metadata: Metadata = {
  title: 'Valle Muégano | Tradición elevada a la Alta Mesa',
  description: 'Muéganos artesanales de Tehuacán para hoteles boutique y restaurantes de alta cocina.',
  openGraph: {
    title: 'Valle Muégano',
    locale: 'es_MX',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${cormorant.variable} ${montserrat.variable} ${lora.variable}`}>
      <body>
        <LanguageProvider>
          <RevealObserver />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
