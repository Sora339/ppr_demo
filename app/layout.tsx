import { ReactNode } from 'react'

export const metadata = {
  title: 'PPR Demo - Next.js 15',
  description: 'Partial Prerendering demonstration with Next.js 15 canary',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="ja">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
