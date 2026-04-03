import './globals.css'
import { Inter } from 'next/font/google'
import { QueryProvider } from '@/components/providers/query-provider'
import { AuthProvider } from '@/components/providers/auth-provider'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'OverseeAI CMS Shell',
  description: 'Multi-tenant CMS platform for hosting OverseeAI microsites',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          <AuthProvider>
            <div className="cms-shell">
              {children}
            </div>
            <Toaster />
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  )
}