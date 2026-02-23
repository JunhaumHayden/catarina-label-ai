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
        url: 'https://private-user-images.githubusercontent.com/79289647/553284684-21bc64b5-2f01-49b4-aae3-446a4e5028bd.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzE4MTAyNjIsIm5iZiI6MTc3MTgwOTk2MiwicGF0aCI6Ii83OTI4OTY0Ny81NTMyODQ2ODQtMjFiYzY0YjUtMmYwMS00OWI0LWFhZTMtNDQ2YTRlNTAyOGJkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAyMjMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMjIzVDAxMjYwMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTVmMDcyODMyNzNlODEzN2E1NmJlM2MzNGE2MzY2NzllYmY5MzY1YjVlZTBlMGY1M2U0ZjQxNTUzNjc0NzZkMGUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.CMiJFG3JxR8VjmOasUKte9eozgg9vs8dibBQmgLVkDg',
        type: 'image/png',
      },
    ],
//     apple: '/catarina-label-ai/logo-200x200.png',
    apple: 'https://private-user-images.githubusercontent.com/79289647/553284622-aa4d5c6e-0aa7-4823-92d4-18a2de04c28a.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzE4MTAyNjIsIm5iZiI6MTc3MTgwOTk2MiwicGF0aCI6Ii83OTI4OTY0Ny81NTMyODQ2MjItYWE0ZDVjNmUtMGFhNy00ODIzLTkyZDQtMThhMmRlMDRjMjhhLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAyMjMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMjIzVDAxMjYwMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWMzMjYwMmNmNWY1Y2FmMDA4MDI5NDQ3NTBiMWQ0YzhlOTc0ZmFiNDE0YjNmM2ExZWY5MGRlYjFkYTUxODAxNGImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.li407I7l7LE9d56uH4PAf7Ri8_hU6dTNWjKMkJ4ySjI',
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
