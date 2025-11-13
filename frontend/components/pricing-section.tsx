"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Sparkles } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Starter",
    credits: 10,
    price: 4.99,
    features: ["10 Analysis Attempts", "All Core Features", "Email Support", "PDF Reports"],
    accent: "from-blue-500/20 via-blue-500/10 to-transparent",
  },
  {
    name: "Professional",
    credits: 50,
    price: 19.99,
    features: ["50 Analysis Attempts", "Priority Support", "Custom Reports", "AI Humanization"],
    popular: true,
    accent: "from-violet-500/20 via-violet-500/10 to-transparent",
  },
  {
    name: "Power User",
    credits: 100,
    price: 34.99,
    features: ["100 Analysis Attempts", "24/7 Priority Support", "Unlimited Reports", "API Access"],
    accent: "from-emerald-500/20 via-emerald-500/10 to-transparent",
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4 tracking-tight"
        >
          Simple, Transparent Pricing
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto"
        >
          Choose the perfect plan for your workflow. No subscriptions, no surprises.
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        {plans.map((plan, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            viewport={{ once: true }}
            className={`relative rounded-3xl p-[2px] bg-gradient-to-br ${plan.accent} hover:scale-[1.02] transition-transform duration-300`}
          >
            <div className="relative bg-[#0d1220]/80 backdrop-blur-xl rounded-3xl p-8 h-[500px] flex flex-col justify-between border border-white/10">
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white px-5 py-1 rounded-full text-sm font-medium shadow-md">
                  <Sparkles className="inline w-4 h-4 mr-1" /> Most Popular
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-5xl font-extrabold text-white">${plan.price}</span>
                  <span className="text-gray-400 text-sm mb-2">/ {plan.credits} uses</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/dashboard">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-lg shadow-violet-500/30"
                      : "bg-white/10 hover:bg-white/20 text-white border border-white/10"
                  }`}
                >
                  Get Started
                </motion.button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Subtle floating lights for depth */}
      <div className="absolute -z-10 top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.15),transparent_70%)] blur-3xl" />
      <div className="absolute -z-10 bottom-0 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15),transparent_70%)] blur-3xl" />
    </section>
  )
}
