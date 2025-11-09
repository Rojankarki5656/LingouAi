"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight, CheckCircle2, Zap, TrendingUp, Users } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function WaitlistPage() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [result, setResult] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setLoading(true)

    try {
      // Send request to your backend API
      const response = await fetch("/api/v1/waitlist/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      // Parse JSON response
      const data = await response.json()

      if (response.status === 200) {
        setResult(data.message)
        console.log("Signup successful:", data)
        setSubmitted(true)
        setTimeout(() => {
          setEmail("")
          setSubmitted(false)
        }, 3000)
      } else {
        // If backend sends error message
        setResult(data.error || "Signup failed, please try again")
      }
    } catch (err) {
      console.error("Signup error:", err)
      setResult("Network error, please try again later.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-surface to-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-blue-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg text-foreground">LinguoAI</span>
            </Link>
            <Link href="/" className="text-foreground-muted hover:text-foreground transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <p className="text-sm font-medium text-primary">Coming Soon</p>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            The Future of Professional Writing
          </h1>

          <p className="text-xl text-foreground-muted mb-12 max-w-2xl mx-auto leading-relaxed">
            LinguoAI is launching soon. Get early access to the AI-powered writing assistant that transforms how teams
            write better content, faster.
          </p>
        </motion.div>

        {/* Waitlist Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-md mx-auto mb-16"
        >
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-6 py-4 bg-surface border border-border rounded-lg text-foreground placeholder-foreground-muted focus:outline-none focus:border-primary transition-colors"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-foreground-muted hover:text-primary transition-colors disabled:opacity-50"
                >
                  {loading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <Zap className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <ArrowRight className="w-5 h-5" />
                  )}
                </button>
              </div>
              <p className="text-xs text-foreground-muted">We'll notify you when LinguoAI launches. No spam, ever.</p>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-6 bg-primary/10 border border-primary/30 rounded-lg text-center"
            >
              <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">You're on the list!</h3>
              <p className="text-foreground-muted">Check your email for updates about LinguoAI's launch.</p>
            </motion.div>
          )}
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {[
            {
              icon: TrendingUp,
              title: "Boost Productivity",
              description: "Write 10x faster with AI-powered suggestions and corrections",
            },
            {
              icon: CheckCircle2,
              title: "Perfect Quality",
              description: "Grammar, style, and tone corrections in real-time",
            },
            {
              icon: Users,
              title: "Team Collaboration",
              description: "Share and collaborate on documents with your team seamlessly",
            },
          ].map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
              className="p-6 bg-surface border border-border rounded-lg hover:border-primary/50 transition-colors"
            >
              <benefit.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-foreground-muted text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Launch Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-surface border border-border rounded-lg p-8 md:p-12 mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">What to Expect</h2>

          <div className="space-y-8">
            {[
              {
                phase: "Phase 1",
                title: "Beta Access",
                description: "Early access for waitlist members with exclusive features",
                timeline: "Next Month",
              },
              {
                phase: "Phase 2",
                title: "Feature Rollout",
                description: "Premium tools, advanced analytics, and team collaboration",
                timeline: "6 Weeks",
              },
              {
                phase: "Phase 3",
                title: "Full Launch",
                description: "Complete platform with all features and integrations",
                timeline: "12 Weeks",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary flex items-center justify-center font-bold text-primary">
                    {idx + 1}
                  </div>
                  {idx < 2 && <div className="w-1 h-16 bg-gradient-to-b from-primary/50 to-transparent mt-4" />}
                </div>

                <div className="pb-8">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-semibold text-primary uppercase tracking-wide">{item.phase}</p>
                      <h3 className="text-lg font-bold text-foreground mt-1">{item.title}</h3>
                      <p className="text-foreground-muted mt-2">{item.description}</p>
                    </div>
                    <span className="text-sm font-medium text-foreground-muted whitespace-nowrap ml-4">
                      {item.timeline}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Waitlist Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          <div className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg">
            <p className="text-4xl font-bold text-primary mb-2">2,547</p>
            <p className="text-foreground-muted">Early Access Signups</p>
          </div>
          <div className="p-8 bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 rounded-lg">
            <p className="text-4xl font-bold text-blue-500 mb-2">1.2M+</p>
            <p className="text-foreground-muted">Documents Analyzed (Beta)</p>
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Frequently Asked</h2>

          <div className="space-y-4">
            {[
              {
                q: "When will LinguoAI launch?",
                a: "We're targeting launch in a few months. Join the waitlist for exclusive early access!",
              },
              {
                q: "Will there be a free tier?",
                a: "Yes, LinguoAI will offer a free tier with basic features and premium plans for advanced capabilities.",
              },
              {
                q: "Can I share access with my team?",
                a: "Team collaboration is a core feature. Enterprise plans support unlimited team members.",
              },
              {
                q: "What about data privacy?",
                a: "Your data is encrypted end-to-end. We comply with GDPR, CCPA, and other privacy regulations.",
              },
            ].map((faq, idx) => (
              <details
                key={idx}
                className="group p-4 bg-surface border border-border rounded-lg cursor-pointer hover:border-primary/50 transition-colors"
              >
                <summary className="flex items-center justify-between font-semibold text-foreground">
                  {faq.q}
                  <span className="text-foreground-muted group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-foreground-muted mt-4">{faq.a}</p>
              </details>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border mt-20 py-12 bg-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-foreground-muted text-sm">
          <p>&copy; 2025 LinguoAI. All rights reserved.</p>
        </div>
      </footer>
    </div>

    
  )
}
