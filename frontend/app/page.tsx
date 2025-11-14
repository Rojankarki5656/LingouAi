import NavBar from "@/components/nav-bar"
import HeroSection from "@/components/hero-section"
import FeaturesGrid from "@/components/features-grid"
import PricingSection from "@/components/pricing-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import type { Metadata } from "next"
import TryPremiumSection from "@/components/premium-features"

export const metadata: Metadata = {
  title:
    "LinguoAI — Best AI Writing Assistant for Grammar, Tone, and Clarity | AI Detector, Grammar Checker, Essay Rewriter & Content Enhancer",
  description:
    "LinguoAI is your all-in-one AI writing assistant for grammar correction, tone improvement, and clarity enhancement. Write smarter with real-time AI feedback that refines your writing style, fixes grammar, rewrites sentences, and optimizes tone. Perfect for essays, blogs, business emails, creative writing, academic papers, and professional communication.",
  keywords:
    "LinguoAI, AI writing assistant, best AI grammar checker, AI writing tool, Grammarly alternative, AI text editor, grammar correction, grammar fixer, tone improvement, style enhancement, writing clarity, content rewriting, AI sentence rewriter, professional writing assistant, AI content checker, AI detector, AI content detector, AI plagiarism detector, AI text analysis, AI text enhancer, academic writing improvement, business writing assistant, creative writing editor, blog writing tool, essay writing help, AI tone corrector, AI grammar analysis, SEO content optimizer, AI writing enhancer, AI copy editor, AI text rewriter, content creation tool, AI writing detector, AI writing analysis, AI paraphrasing tool, AI sentence corrector, AI writing generator, AI proofreading tool, AI essay checker, AI detector online, AI writing improvement software",
  alternates: { canonical: "https://detectorai.me" },
  openGraph: {
    title:
      "LinguoAI — Advanced AI Writing Assistant | Grammar, Style, and Clarity Perfected with Intelligent Editing",
    description:
      "Experience flawless writing with LinguoAI. Our AI-powered assistant corrects grammar, improves tone, enhances clarity, and rewrites your text with natural flow and precision. Ideal for students, professionals, content creators, and businesses seeking high-quality writing support.",
    url: "https://detectorai.me",
    siteName: "LinguoAI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://detectorai.me/logo.png",
        width: 1200,
        height: 630,
        alt: "LinguoAI - Best AI Writing Assistant for Grammar, Tone, and Clarity",
      },
      {
        url: "https://detectorai.me/banner-preview.png",
        width: 1920,
        height: 1080,
        alt: "LinguoAI AI Writing and Grammar Correction Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@linguoai",
    creator: "@linguoai",
    title:
      "LinguoAI — Smart AI Writing Assistant | Grammar Checker, Tone Improver, and Sentence Rewriter",
    description:
      "Write confidently with LinguoAI — your AI-powered writing assistant that enhances grammar, tone, and style for essays, emails, blogs, and professional documents.",
    images: ["https://detectorai.me/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  category: "software",
  creator: "LinguoAI Team",
  publisher: "LinguoAI",
  metadataBase: new URL("https://detectorai.me"),
  applicationName: "LinguoAI - AI Writing Assistant",
  authors: [{ name: "LinguoAI Team", url: "https://detectorai.me" }],
  generator: "Next.js, LinguoAI Engine",
  viewport:
    "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
  themeColor: "#ffffff",
  referrer: "origin-when-cross-origin",
  classification:
    "AI writing tool, grammar checker, text enhancer, AI content detector, essay rewriter, content optimizer",
}


export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#f9fafb] via-[#ecf7f3] to-[#e6f2ff]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(173,216,230,0.35),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(144,238,144,0.25),transparent_70%)]" />


      {/* ✅ Page Content */}
      <div className="relative z-10">
        <NavBar />
        <HeroSection />
        <div className="h-px w-full bg-gray-300 my-8" />
        <TryPremiumSection />
        <div className="h-px w-full bg-gray-300 my-8" />
        <FeaturesGrid />
        <div className="h-px w-full bg-gray-300 my-8" />
        <PricingSection />
        <CTASection />
        <Footer />
      </div>

      {/* ✅ Structured Data for Google Rich Results */}
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
            "https://www.instagram.com/linguoai",
            "https://www.youtube.com/@linguoai"
          ],
          contactPoint: {
            "@type": "ContactPoint",
            email: "support@detectorai.me",
            contactType: "customer support",
            availableLanguage: ["English"]
          },
          foundingDate: "2024",
          founder: {
            "@type": "Person",
            name: "LinguoAI Team"
          },
          address: {
            "@type": "PostalAddress",
            addressCountry: "US"
          }
        },
        {
          "@type": "WebSite",
          "@id": "https://detectorai.me/#website",
          url: "https://detectorai.me",
          name: "LinguoAI - AI Writing Assistant",
          alternateName: "LinguoAI Grammar Checker & AI Content Detector",
          description:
            "LinguoAI is a next-generation AI writing assistant that helps you perfect grammar, improve tone, and enhance clarity. Write essays, emails, and blogs with flawless precision using advanced AI grammar and tone correction.",
          publisher: { "@id": "https://detectorai.me/#organization" },
          potentialAction: {
            "@type": "SearchAction",
            target: "https://detectorai.me/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          },
          inLanguage: "en-US"
        },
        {
          "@type": "SoftwareApplication",
          "@id": "https://detectorai.me/#software",
          name: "LinguoAI",
          applicationCategory: "WritingAssistant, Productivity, AI Tool",
          operatingSystem: "Web, Windows, macOS, Android, iOS",
          softwareVersion: "2.5.1",
          url: "https://detectorai.me",
          image: "https://detectorai.me/logo.png",
          description:
            "LinguoAI is an intelligent AI writing software designed to refine your grammar, tone, and clarity. Ideal for students, writers, professionals, and content creators looking to elevate their writing with real-time AI-powered feedback and rewriting suggestions.",
          keywords:
            "AI writing assistant, grammar checker, tone improver, content detector, Grammarly alternative, AI essay checker, AI writing enhancer, AI paraphrasing tool, text optimizer, writing clarity, AI writing detector, AI content analysis",
          applicationSubCategory: "AI Writing & Editing Tools",
          softwareHelp: "https://detectorai.me/help",
          offers: {
            "@type": "Offer",
            priceCurrency: "USD",
            priceValidUntil: "2025-12-31",
            price: "0.00",
            url: "https://detectorai.me/pricing",
            availability: "https://schema.org/InStock",
            category: "Freemium"
          },
          featureList: [
            "AI grammar correction",
            "Sentence rewriting",
            "Tone and style improvement",
            "Plagiarism-free rewriting",
            "AI content detection",
            "Essay and blog writing help",
            "Email and business communication refinement",
            "Academic writing enhancement"
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "1542",
            bestRating: "5",
            worstRating: "1"
          },
          publisher: { "@id": "https://detectorai.me/#organization" },
          author: { "@id": "https://detectorai.me/#organization" }
        },
        {
          "@type": "Product",
          "@id": "https://detectorai.me/#features",
          name: "LinguoAI Writing Assistant",
          brand: "LinguoAI",
          sku: "LINGUOAI001",
          category: "AI Writing & Productivity Tools",
          image: "https://detectorai.me/logo.png",
          description:
            "LinguoAI helps you write smarter and faster. Improve grammar, refine tone, and boost clarity with real-time AI editing suggestions for all kinds of writing — essays, blogs, emails, and more.",
          review: [
            {
              "@type": "Review",
              author: { "@type": "Person", name: "James Carter" },
              datePublished: "2025-10-20",
              reviewBody:
                "LinguoAI completely changed how I write emails and essays. The grammar suggestions and tone analysis are better than Grammarly.",
              name: "Amazing AI Writing Tool",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5"
              }
            },
            {
              "@type": "Review",
              author: { "@type": "Person", name: "Sophia Lee" },
              datePublished: "2025-09-14",
              reviewBody:
                "The clarity suggestions and tone refinement make my writing sound professional. Highly recommended for writers!",
              name: "Perfect for content creators",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "4.8",
                bestRating: "5"
              }
            }
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "1542"
          },
          offers: {
            "@type": "Offer",
            priceCurrency: "USD",
            price: "0.00",
            priceValidUntil: "2025-12-31",
            url: "https://detectorai.me/pricing",
            availability: "https://schema.org/InStock"
          }
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
                  "LinguoAI is an AI-powered writing assistant that enhances grammar, tone, and clarity. It helps students, professionals, and creators write more effectively using intelligent rewriting and tone optimization."
              }
            },
            {
              "@type": "Question",
              name: "Is LinguoAI free to use?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Yes, LinguoAI offers a free plan with premium AI writing features and an optional pro upgrade for advanced tools like tone analytics and plagiarism checking."
              }
            },
            {
              "@type": "Question",
              name: "How is LinguoAI different from Grammarly?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "LinguoAI not only checks grammar but also improves tone, style, and clarity. It uses next-generation AI models for contextual rewriting, AI content detection, and academic-level refinement."
              }
            },
            {
              "@type": "Question",
              name: "Does LinguoAI detect AI-generated text?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Yes, LinguoAI includes an AI content detector that identifies whether text is human-written or AI-generated, useful for educators, editors, and content creators."
              }
            }
          ]
        }
      ]
    }),
  }}
/>

    </main>
  )
}
