import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://rodrigo-luparelli.vercel.app'),
  title: 'Rodrigo Luparelli - Frontend Developer',
  description: 'Especialista em React/Next.js com 5+ anos de experiência em arquiteturas escaláveis, e-commerce, EdTech e sistemas críticos corporativos.',
  keywords: 'React, Next.js, TypeScript, Frontend Developer, TailwindCSS, JavaScript',
  authors: [{ name: 'Rodrigo Luparelli' }],
  openGraph: {
    title: 'Rodrigo Luparelli - Frontend Developer',
    description: 'Especialista em React/Next.js com 5+ anos de experiência',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rodrigo Luparelli - Frontend Developer',
    description: 'Especialista em React/Next.js com 5+ anos de experiência',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}