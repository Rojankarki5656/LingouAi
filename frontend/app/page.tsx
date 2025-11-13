import NavBar from "@/components/nav-bar"
import HeroSection from "@/components/hero-section"
import FeaturesGrid from "@/components/features-grid"
import PricingSection from "@/components/pricing-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import type { Metadata } from "next"
import TryPremiumSection from "@/components/premium-features"

export const metadata: Metadata = {
  title: "LinguoAI — Premium AI Writing Assistant | Grammar, Tone & Clarity Perfected",
  description:
    "LinguoAI helps you write like a pro. Instantly fix grammar, refine tone, and elevate clarity with advanced AI-driven editing and style enhancement.",
  keywords:
    "AI writing assistant, grammar checker, tone corrector, sentence rewriter, AI grammar tool, LinguoAI, Grammarly alternative, text improvement, professional writing, content enhancement, ai detctor, ai detetcor, ai-detector, dectecor ai, writing assistant, grammar correction, tone improvement, style enhancement, essay writing, email writing, creative writing, text analysis, ai writing tool, ai content checker, ai content detector, ai text detector, ai text checker, ai writing detector, ai writing checker, ai content analysis, ai text analysis, ai writing analysis, ai grammar analysis, ai tone analysis, ai style analysis, ai writing enhancement",
  alternates: { canonical: "https://detectorai.me" },
  openGraph: {
    title: "LinguoAI — Write Smarter with AI",
    description:
      "Enhance your writing with LinguoAI. AI-powered grammar correction, tone improvement, and writing clarity — perfect for essays, emails, and blogs.",
    url: "https://detectorai.me",
    siteName: "LinguoAI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://detectorai.me/og-image.jpg",
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
    images: ["https://detectorai.me/twitter-card.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  robots: { index: true, follow: true },
  category: "software",
  creator: "LinguoAI Team",
  publisher: "LinguoAI",
  metadataBase: new URL("https://detectorai.me"),
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
            "@type": "SoftwareApplication",
            name: "LinguoAI",
            applicationCategory: "WritingAssistant",
            operatingSystem: "Web",
            url: "https://detectorai.me",
            image: "https://detectorai.me/logo.png",
            description:
              "LinguoAI is a premium AI writing assistant that enhances grammar, tone, and clarity for writers, students, and professionals.",
            offers: {
              "@type": "Offer",
              priceCurrency: "USD",
              price: "0.00",
              url: "https://detectorai.me/pricing",
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
              url: "https://detectorai.me",
            },
          }),
        }}
      />
    </main>
  )
}
