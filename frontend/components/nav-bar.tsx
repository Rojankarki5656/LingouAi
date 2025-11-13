"use client"

import Link from "next/link"
import { Sparkles } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function NavBar() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const user = localStorage.getItem("user")
    setIsAuthenticated(!!user)
  }, [])

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "/waitlist", label: "Join Waitlist" },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b bg-[radial-gradient(circle_at_top_left,_#f8fafc_0%,_#f4fdf4_60%,_#ffffff_100%)] backdrop-blur-xl supports-[backdrop-filter]:bg-[#060b13]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0A006B] to-[#0031E0] flex items-center justify-center shadow-[0_0_20px_rgba(151,243,197,0.2)] group-hover:shadow-[0_0_25px_rgba(151,243,197,0.3)] transition-shadow">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-black group-hover:text-[#000000] transition-colors">
              LinguoAI
            </span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="relative text-foreground-muted hover:text-white font-medium transition-colors"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#97ADF7] to-[#C9F797] transition-all duration-300 group-hover:w-full hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            {isAuthenticated ? (
              <button
                onClick={() => router.push("/dashboard")}
                className="px-4 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-[#97ADF7] to-[#C9F797] hover:opacity-90 transition-all duration-200 shadow-[0_0_10px_rgba(151,243,197,0.2)]"
              >
                Dashboard
              </button>
            ) : (
              <>
                <button
                  onClick={() => router.push("/auth/login")}
                  className="px-4 py-2 rounded-lg font-medium text-gray-700 hover:text-green-600 hover:bg-grey/10 transition-all"
                >
                  Sign In
                </button>
                <button
                  onClick={() => router.push("/auth/signup")}
                  className="px-4 py-2 rounded-lg font-semibold text-[#0a0f1f] bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg hover:shadow-blue-600/30 transition-all hover:opacity-90 duration-200"
                >
                  Get Started
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
