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
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32"
      aria-labelledby="hero-heading"
      itemScope
      itemType="https://schema.org/SoftwareApplication"
    >
      {/* ✅ Hero Content */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <header className="space-y-4">
            <h1
              id="hero-heading"
              itemProp="name"
              className="text-5xl sm:text-6xl font-bold text-balance text-foreground leading-tight"
            >
              Write with{" "}
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Confidence
              </span>{" "}
              using <span className="text-primary">LinguoAI</span>
            </h1>

            <p
              itemProp="description"
              className="text-xl text-foreground-muted leading-relaxed"
            >
              LinguoAI is your professional writing assistant powered by
              advanced AI — perfect grammar, tone, and clarity for essays,
              emails, and creative writing.
            </p>

            {/* Hidden SEO-rich text for crawlers and screen readers */}
            <p className="sr-only">
              Improve your writing instantly with LinguoAI. Our AI writing tool
              enhances grammar, detects tone, and rewrites sentences to help you
              sound confident and natural.
            </p>
          </header>

          {/* ✅ CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4" role="group" aria-label="Primary actions">
            <Link href="/waitlist" prefetch>
              <button
                aria-label="Join LinguoAI waitlist to get early access"
                className="w-full sm:w-auto px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 group"
              >
                Join Waitlist{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>

            <Link href="/demo" prefetch>
              <button
                aria-label="Watch a demo of LinguoAI in action"
                className="w-full sm:w-auto px-6 py-3 bg-surface text-foreground rounded-lg font-semibold border border-border hover:bg-surface-alt transition-colors flex items-center justify-center gap-2"
              >
                <PlayCircle className="w-4 h-4" />
                Watch Demo
              </button>
            </Link>
          </div>

          {/* ✅ Social Proof Line */}
          <div className="flex items-center gap-2 text-sm text-foreground-muted pt-4">
            <Zap className="w-4 h-4 text-warning" aria-hidden="true" />
            <span>Instant AI text analysis • No credit card required</span>
          </div>
        </motion.div>

        {/* ✅ Interactive Text Analyzer Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="lg:col-span-2">
            <TextAnalyzer
              text={text}
              onTextChange={setText}
              selectedOptions={selectedOptions}
            />
          </div>
        </motion.div>
      </div>

      {/* ✅ Embedded JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "LinguoAI",
            operatingSystem: "Web",
            keywords:
              "AI writing assistant, grammar checker, tone corrector, sentence rewriter, AI grammar tool, LinguoAI, Grammarly alternative, text improvement, professional writing, content enhancement, ai detctor, ai detetcor, ai-detector, dectecor ai, writing assistant, grammar correction, tone improvement, style enhancement, essay writing, email writing, creative writing, text analysis, ai writing tool, ai content checker, ai content detector, ai text detector, ai text checker, ai writing detector, ai writing checker, ai content analysis, ai text analysis, ai writing analysis, ai grammar analysis, ai tone analysis, ai style analysis, ai writing enhancement",
            applicationCategory: "WritingAssistant",
            description:
              "LinguoAI is a premium AI writing assistant that improves grammar, tone, and clarity for essays, professional writing, and creative content.",
            image: "https://linguoai.com/logo.png",
            author: {
              "@type": "Organization",
              name: "LinguoAI",
              url: "https://linguoai.com",
            },
            offers: {
              "@type": "Offer",
              price: "0.00",
              priceCurrency: "USD",
              url: "https://linguoai.com/pricing",
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
