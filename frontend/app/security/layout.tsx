import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "Security",
    template: "%s | LinguoAI",
  },
  description:
    "Learn how LinguoAI protects your data with encryption, secure infrastructure, and best practices.",
  alternates: { canonical: "/security" },
}

export default function SecurityLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
