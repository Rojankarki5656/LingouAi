import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "Join the Waitlist",
    template: "%s | LinguoAI",
  },
  description:
    "Sign up to get early access to new LinguoAI features and updates.",
  alternates: { canonical: "/waitlist" },
}

export default function WaitlistLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
