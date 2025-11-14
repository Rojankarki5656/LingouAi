import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "Blog — Writing Tips & AI Insights",
    template: "%s | LinguoAI",
  },
  description:
    "Read articles on AI writing, grammar, tone, clarity, and productivity from the LinguoAI team.",
  alternates: { canonical: "/blog" },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
