import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { CartProvider } from "@/contexts/cart-context"
import { ThemeProvider } from '@/components/theme-provider'

import { Suspense } from "react"
import {ReactQueryProvider} from "@/src/providers/ReactQueryProvider";

export const metadata: Metadata = {
  title: "Ecommerce",
  description: "Created with v0",
  generator: "Cryptech Links",
}

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
      <ReactQueryProvider>
        <Suspense fallback={null}>
          <CartProvider>
            <ThemeProvider>
              {children}
            </ThemeProvider>
          </CartProvider>
        </Suspense>
        <Analytics />
      </ReactQueryProvider>
      </body>
    </html>
  )
}
