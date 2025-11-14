import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "About LinguoAI",
    template: "%s | LinguoAI",
  },
  description:
    "Discover the mission behind LinguoAI — helping people write clearly and confidently with AI.",
  alternates: { canonical: "/about" },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
