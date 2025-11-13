"use client"

import { Mail, Twitter, Github, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-black/25">

      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16 text-sm">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-fuchsia-500 text-transparent bg-clip-text">
              LinguoAI
            </h3>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Empowering writers to create impactful content with AI-assisted clarity, tone, and creativity.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 tracking-wide">Product</h4>
            <ul className="space-y-3 text-gray-600">
              <li><Link href="/features" className="hover:text-black transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-black transition-colors">Pricing</Link></li>
              <li><Link href="/api-docs" className="hover:text-black transition-colors">API</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 tracking-wide">Company</h4>
            <ul className="space-y-3 text-gray-600">
              <li><Link href="/about" className="hover:text-black transition-colors">About</Link></li>
              <li><Link href="/blog" className="hover:text-black transition-colors">Blog</Link></li>
              <li><Link href="/careers" className="hover:text-black transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 tracking-wide">Connect</h4>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a href="mailto:hello@linguoai.com" className="hover:text-black transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" /> hello@linguoai.com
                </a>
              </li>
            </ul>

            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Twitter" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                <Twitter className="w-4 h-4 text-blue-500" />
              </a>
              <a href="#" aria-label="Discord" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                <MessageSquare className="w-4 h-4 text-fuchsia-900" />
              </a>
              <a href="#" aria-label="GitHub" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                <Github className="w-4 h-4 text-gray-900" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2025 LinguoAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
