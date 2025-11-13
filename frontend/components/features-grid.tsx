"use client"

import { motion } from "framer-motion"
import {
  CheckCircle2,
  Zap,
  BarChart3,
  Brain,
  Shield,
  Download,
} from "lucide-react"

const features = [
  {
    icon: CheckCircle2,
    title: "Grammar & Spelling",
    description:
      "Catch every mistake before it matters. Advanced real-time correction powered by deep AI.",
    color: "from-blue-400 to-cyan-400",
  },
  {
    icon: Zap,
    title: "Style & Tone",
    description:
      "Shift your tone from casual to professional seamlessly with adaptive AI rewriting.",
    color: "from-purple-400 to-pink-400",
  },
  {
    icon: BarChart3,
    title: "Readability Analysis",
    description:
      "Understand your audience better with clarity scores and sentence flow insights.",
    color: "from-emerald-400 to-teal-400",
  },
  {
    icon: Brain,
    title: "AI Content Detection",
    description:
      "Detect AI-written text and humanize it with advanced language reconstruction.",
    color: "from-orange-400 to-amber-400",
  },
  {
    icon: Shield,
    title: "Plagiarism Check",
    description:
      "Ensure originality with fast, web-scale plagiarism scanning technology.",
    color: "from-rose-400 to-red-400",
  },
  {
    icon: Download,
    title: "Detailed Reports",
    description:
      "Generate downloadable insights and detailed improvement breakdowns instantly.",
    color: "from-indigo-400 to-sky-400",
  },
]

export default function FeaturesGrid() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden py-24 sm:py-36 flex items-center justify-center"
    >

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6 tracking-tight">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Write Smarter
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Professional-grade AI tools that elevate your writing to perfection.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{
                duration: 0.4,
                delay: idx * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="relative group rounded-2xl bg-white/5 border border-white/10 p-8 shadow-xl backdrop-blur-md transition-all hover:bg-white/[0.08] hover:border-white/20"
            >
              <div
                className={`absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition duration-500 bg-gradient-to-r ${feature.color}`}
              />

              <div
                className={`relative w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-r ${feature.color} bg-opacity-10 mb-6`}
              >
                <feature.icon className="w-7 h-7 text-gray-600 drop-shadow-md" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
              <div
                className={`mt-6 h-[2px] w-16 bg-gradient-to-r ${feature.color} rounded-full group-hover:w-24 transition-all`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
