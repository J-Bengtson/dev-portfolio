import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dev Portfolio',
  description: 'A minimal Next.js portfolio starter',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
