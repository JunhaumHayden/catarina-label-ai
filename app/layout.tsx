import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' })

export const metadata: Metadata = {
  title: 'Catarina Label AI - AI-Powered Data Labeling Framework',
  description:
    'Semi-automated data labeling framework that uses Artificial Intelligence to accelerate model training, focused on the legal sector. Developed by UFSC researchers.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
//         url: '/catarina-label-ai/logo-48x48.png',
        url: 'https://github.com/user-attachments/assets/176a54bb-79e6-4d3c-80fa-451fdda05987',
        type: 'image/png',
      },
    ],
//     apple: '/catarina-label-ai/logo-200x200.png',
    apple: 'https://github.com/user-attachments/assets/176a54bb-79e6-4d3c-80fa-451fdda05987',
  },
}

export const viewport: Viewport = {
  themeColor: '#0d1117',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
