import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "Terms of Service",
    template: "%s | LinguoAI",
  },
  description:
    "LinguoAI Terms of Service. Understand user obligations, acceptable use, and legal conditions.",
  alternates: { canonical: "/terms" },
}

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
