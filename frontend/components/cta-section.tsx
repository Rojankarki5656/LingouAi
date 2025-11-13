"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, BookOpen } from "lucide-react"

export default function CTASection() {
  return (
    <section className="relative py-16 px-4 sm:px-6">
      {/* Background glow effects */}
      <div className="absolute -z-10 inset-0 flex justify-center items-center">
        <div className="w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_70%)] blur-2xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative bg-white/[0.05] border border-white/10 backdrop-blur-xl rounded-2xl p-8 sm:p-10 text-center shadow-[0_0_30px_rgba(59,130,246,0.08)] overflow-hidden max-w-4xl mx-auto"
      >
        {/* Gradient edges */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 via-transparent to-fuchsia-500/10 opacity-50 pointer-events-none" />

        {/* Title & Description */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight mb-4"
        >
          Ready to Transform Your Writing?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="relative text-base sm:text-lg text-gray-400 max-w-xl mx-auto mb-8"
        >
          Join thousands of creators and professionals using{" "}
          <span className="text-primary font-semibold">LinguoAI</span> to create clear, confident, and credible writing.
        </motion.p>

        {/* Buttons */}
        <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/dashboard">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-fuchsia-500 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/20 flex items-center gap-2 transition-all duration-300"
            >
              Start Writing Better
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>

          <Link href="/docs">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 bg-white/10 text-gray-900 font-semibold rounded-lg border border-white/10 hover:bg-white/20 transition-all flex items-center gap-2"
            >
              <BookOpen className="w-5 h-5 text-gray-600" />
              View Documentation
            </motion.button>
          </Link>
        </div>
      </motion.div>

      {/* Subtle ambient gradient */}
      <div className="absolute -z-20 bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.08),transparent_70%)] blur-2xl" />
    </section>
  )
}
