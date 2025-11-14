import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "Privacy Policy",
    template: "%s | LinguoAI",
  },
  description:
    "Read LinguoAI's privacy policy outlining data collection, usage, and user rights.",
  alternates: { canonical: "/privacy" },
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
