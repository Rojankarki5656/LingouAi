import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], display: "swap" })
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://detectorai.me"

export const metadata: Metadata = {
  title: {
    default:
      "LinguoAI — Best AI Writing Assistant for Grammar, Tone, and Clarity",
    template: "%s | LinguoAI",
  },
  description:
    "LinguoAI is a premium AI writing assistant that refines grammar, enhances tone, and perfects writing clarity. Powered by cutting-edge natural language AI, it’s ideal for students, professionals, and content creators. Write flawless essays, blogs, and emails with precision and confidence.",
  keywords:
    "LinguoAI, AI writing assistant, grammar checker, AI grammar correction, tone improvement, sentence rewriter, AI content detector, Grammarly alternative, writing enhancement, style editor, academic writing assistant, AI paraphrasing tool, professional writing tool, essay rewriter, content clarity, blog writing tool, AI detector, writing optimizer, writing assistant software, AI writing enhancement, grammar correction app, AI writing generator, SEO writing assistant, tone corrector, text improvement software",
  authors: [{ name: "LinguoAI Team", url: "https://detectorai.me" }],
  creator: "LinguoAI",
  publisher: "LinguoAI",
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "https://detectorai.me" },
  openGraph: {
    title:
      "LinguoAI — AI Writing Assistant for Perfect Grammar, Tone, and Clarity",
    description:
      "Elevate your writing with LinguoAI. Perfect grammar, tone, and style instantly using our advanced AI writing correction engine.",
    url: "https://detectorai.me",
    siteName: "LinguoAI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://detectorai.me/logo.png",
        width: 1200,
        height: 630,
        alt: "LinguoAI - Advanced AI Writing Assistant",
      },
      {
        url: "https://detectorai.me/banner.png",
        width: 1920,
        height: 1080,
        alt: "LinguoAI Web App - Grammar & Tone Enhancer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@linguoai",
    creator: "@linguoai",
    title:
      "LinguoAI — Write Smarter with AI | Grammar Checker & Tone Enhancer",
    description:
      "Boost your writing instantly with LinguoAI — the AI-powered tool that perfects grammar, refines tone, and enhances clarity.",
    images: ["https://detectorai.me/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  category: "software",
  classification:
    "AI writing assistant, grammar correction tool, tone and clarity improvement software, AI content detection",
  applicationName: "LinguoAI - Premium AI Writing Assistant",
  referrer: "origin-when-cross-origin",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Essential Meta */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="author" content="LinguoAI Team" />
        <link rel="icon" href="/logo.png" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.png" />

        {/* 🔹 Rich JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://detectorai.me/#organization",
                  name: "LinguoAI",
                  url: "https://detectorai.me",
                  logo: "https://detectorai.me/logo.png",
                  sameAs: [
                    "https://twitter.com/linguoai",
                    "https://linkedin.com/company/linguoai",
                    "https://facebook.com/linguoai",
                    "https://instagram.com/linguoai",
                  ],
                  description:
                    "LinguoAI is an advanced AI writing assistant that enhances grammar, tone, and clarity for professional and academic writing.",
                  contactPoint: [
                    {
                      "@type": "ContactPoint",
                      contactType: "Customer Support",
                      email: "support@detectorai.me",
                      availableLanguage: "English",
                    },
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://detectorai.me/#website",
                  url: "https://detectorai.me",
                  name: "LinguoAI - AI Writing Assistant",
                  potentialAction: {
                    "@type": "SearchAction",
                    target: "https://detectorai.me/search?q={search_term_string}",
                    "query-input": "required name=search_term_string",
                  },
                  inLanguage: "en-US",
                },
                {
                  "@type": "SoftwareApplication",
                  "@id": "https://detectorai.me/#app",
                  name: "LinguoAI",
                  operatingSystem:
                    "Web, Windows, macOS, Android, iOS, ChromeOS",
                  applicationCategory:
                    "AI Writing Assistant, Productivity Tool, Grammar Checker",
                  softwareVersion: "2.5.1",
                  url: "https://detectorai.me",
                  image: "https://detectorai.me/logo.png",
                  description:
                    "LinguoAI refines your writing with powerful AI. It corrects grammar, improves tone, rewrites sentences, and enhances clarity for essays, blogs, and emails.",
                  featureList: [
                    "AI grammar correction",
                    "Tone and style optimization",
                    "Sentence rewriting and rephrasing",
                    "AI content detection",
                    "Plagiarism-free text enhancement",
                    "Real-time writing suggestions",
                    "SEO-friendly content generation",
                  ],
                  offers: {
                    "@type": "Offer",
                    priceCurrency: "USD",
                    price: "0.00",
                    availability: "https://schema.org/InStock",
                    url: "https://detectorai.me/pricing",
                  },
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "4.9",
                    reviewCount: "1620",
                  },
                  publisher: {
                    "@id": "https://detectorai.me/#organization",
                  },
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://detectorai.me/#faq",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "What is LinguoAI?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text:
                          "LinguoAI is an AI-powered writing assistant that improves grammar, tone, and clarity using advanced natural language models.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Is LinguoAI free?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text:
                          "Yes. LinguoAI offers a free plan with AI grammar and tone enhancement, plus premium plans for advanced features.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Can LinguoAI detect AI-generated content?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text:
                          "Yes, LinguoAI includes an AI content detector to analyze and identify AI-generated text with precision.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Who can use LinguoAI?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text:
                          "LinguoAI is built for writers, students, content creators, marketers, and professionals who want flawless, human-like writing.",
                      },
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  )
}
