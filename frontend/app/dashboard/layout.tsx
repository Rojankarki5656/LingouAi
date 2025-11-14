import type React from "react"
import type { Metadata } from "next"
import DashboardSidebar from "@/components/dashboard-sidebar"
 
export const metadata: Metadata = {
  title: {
    default: "Dashboard",
    template: "%s | LinguoAI",
  },
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  alternates: { canonical: "/dashboard" },
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen p-4">
      <main className="w-full">
        {children}
      </main>
    </div>
  )
}
