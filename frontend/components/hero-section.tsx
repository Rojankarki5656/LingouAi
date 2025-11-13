"use client"

import { motion } from "framer-motion"
import { ArrowRight, Zap, PlayCircle } from "lucide-react"
import Link from "next/link"
import TextAnalyzer from "@/components/text-analyzer"
import { useState } from "react"


export default function HeroSection() {
  const [text, setText] = useState("")
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  return (
    <section
      id="hero"
      className="relative overflow-hidden py-24 sm:py-36 flex items-center justify-center"
    >
      {/* Main container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-8"
          >
            <header className="space-y-6">
              <h1
                id="hero-heading"
                itemProp="name"
                className="text-5xl sm:text-5xl font-normal leading-tight text-black-300 tracking-tight"
              >
                Write with{" "}
                <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 bg-clip-text text-transparent animate-gradient-x">
                  Confidence
                </span>{" "}
                using{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
                  LinguoAI
                </span>
              </h1>

              <p
                itemProp="description"
                className="text-lg sm:text-xl text-gray-500 leading-relaxed max-w-lg"
              >
                Transform your writing with AI. From essays to emails, LinguoAI
                enhances grammar, tone, and clarity — helping you write with
                confidence and precision.
              </p>
            </header>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/waitlist" prefetch>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto px-7 py-3 font-semibold rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg hover:shadow-blue-600/30 transition-all flex items-center justify-center gap-2"
                >
                  Join Waitlist{" "}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>

              <Link href="/demo" prefetch>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto px-7 py-3 rounded-xl border border-gray-700 text-gray-700 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                >
                  <PlayCircle className="w-5 h-5" />
                  Watch Demo
                </motion.button>
              </Link>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-2 text-sm text-gray-400 pt-4">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span>Instant AI text analysis • No credit card required</span>
            </div>
          </motion.div>

          {/* Text Analyzer Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative rounded-2xl backdrop-blur-lg shadow-xl"
          >
            <TextAnalyzer
              text={text}
              onTextChange={setText}
              selectedOptions={selectedOptions}
            />
            <div className="absolute -inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur-xl -z-10" />
          </motion.div>
        </div>
      </div>

      {/* SEO JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "LinguoAI",
            operatingSystem: "Web",
            applicationCategory: "WritingAssistant",
            description:
              "LinguoAI is a premium AI writing assistant that improves grammar, tone, and clarity for essays, professional writing, and creative content.",
            image: "https://detectorai.me/logo.png",
            author: {
              "@type": "Organization",
              name: "LinguoAI",
              url: "https://detectorai.me",
            },
            offers: {
              "@type": "Offer",
              price: "0.00",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "1248",
            },
          }),
        }}
      />
      </section>
  )

}
