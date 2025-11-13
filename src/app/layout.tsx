import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { QueryProvider } from '@/lib/react-query/QueryProvider'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  fallback: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica Neue',
    'Arial',
    'sans-serif',
  ],
  adjustFontFallback: false,
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  fallback: [
    'SF Mono',
    'Monaco',
    'Inconsolata',
    'Roboto Mono',
    'Source Code Pro',
    'Consolas',
    'Courier New',
    'monospace',
  ],
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  title: '씨앗메이트 - 농사 정보 서비스',
  description: '실시간 날씨와 AI 농사 조언을 제공하는 감성적인 농사 정보 웹 서비스',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  )
}
