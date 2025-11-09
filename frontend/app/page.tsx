import NavBar from "@/components/nav-bar"
import HeroSection from "@/components/hero-section"
import FeaturesGrid from "@/components/features-grid"
import PricingSection from "@/components/pricing-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "LinguoAI — Premium AI Writing Assistant | Grammar, Tone & Clarity Perfected",
  description:
    "LinguoAI helps you write like a pro. Instantly fix grammar, refine tone, and elevate clarity with advanced AI-driven editing and style enhancement.",
  keywords:
    "AI writing assistant, grammar checker, tone corrector, sentence rewriter, AI grammar tool, LinguoAI, Grammarly alternative, text improvement, professional writing, content enhancement, ai detctor, ai detetcor, ai-detector, dectecor ai, writing assistant, grammar correction, tone improvement, style enhancement, essay writing, email writing, creative writing, text analysis, ai writing tool, ai content checker, ai content detector, ai text detector, ai text checker, ai writing detector, ai writing checker, ai content analysis, ai text analysis, ai writing analysis, ai grammar analysis, ai tone analysis, ai style analysis, ai writing enhancement",
  alternates: {
    canonical: "https://linguoai.com",
  },
  openGraph: {
    title: "LinguoAI — Write Smarter with AI",
    description:
      "Enhance your writing with LinguoAI. AI-powered grammar correction, tone improvement, and writing clarity — perfect for essays, emails, and blogs.",
    url: "https://linguoai.com",
    siteName: "LinguoAI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://linguoai.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LinguoAI - AI Writing Assistant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@linguoai",
    creator: "@linguoai",
    title: "LinguoAI — Write Smarter with AI",
    description:
      "Perfect grammar, refine tone, and boost clarity with LinguoAI — your premium AI writing companion.",
    images: ["https://linguoai.com/twitter-card.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#ffffff",
  category: "software",
  creator: "LinguoAI Team",
  publisher: "LinguoAI",
  metadataBase: new URL("https://linguoai.com"),
}

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-background via-surface to-background">
      <NavBar />
      <HeroSection />
      <FeaturesGrid />
      <PricingSection />
      <CTASection />
      <Footer />

      {/* ✅ Structured Data for Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "LinguoAI",
            applicationCategory: "WritingAssistant",
            operatingSystem: "Web",
            url: "https://linguoai.com",
            image: "https://linguoai.com/logo.png",
            description:
              "LinguoAI is a premium AI writing assistant that enhances grammar, tone, and clarity for writers, students, and professionals.",
            offers: {
              "@type": "Offer",
              priceCurrency: "USD",
              price: "0.00",
              url: "https://linguoai.com/pricing",
              availability: "https://schema.org/InStock",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "1200",
            },
            publisher: {
              "@type": "Organization",
              name: "LinguoAI",
              url: "https://linguoai.com",
            },
          }),
        }}
      />
    </main>
  )
}
