import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "Auth",
    template: "%s | LinguoAI",
  },
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  alternates: { canonical: "/auth" },
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
