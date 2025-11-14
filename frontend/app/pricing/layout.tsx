import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "Pricing — Plans for Everyone",
    template: "%s | LinguoAI",
  },
  description:
    "Transparent pricing for LinguoAI. Choose Starter, Professional, or Enterprise plans to unlock AI grammar, tone, style, detection, and collaboration features.",
  alternates: { canonical: "/pricing" },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
