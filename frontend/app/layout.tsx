import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata = {
  title: "LinguoAI — Premium AI Writing Assistant | Grammar, Tone & Style Enhancer",
  description:
    "LinguoAI is your intelligent writing companion powered by advanced AI — refine grammar, enhance tone, and perfect your writing with professional-level precision.",
  keywords:
    "AI writing assistant, grammar checker, tone corrector, sentence rewriter, AI grammar tool, LinguoAI, Grammarly alternative, text improvement, professional writing, content enhancement, ai detctor, ai detetcor, ai-detector, dectecor ai, writing assistant, grammar correction, tone improvement, style enhancement, essay writing, email writing, creative writing, text analysis, ai writing tool, ai content checker, ai content detector, ai text detector, ai text checker, ai writing detector, ai writing checker, ai content analysis, ai text analysis, ai writing analysis, ai grammar analysis, ai tone analysis, ai style analysis, ai writing enhancement",
  authors: [{ name: "LinguoAI Team", url: "https://linguoai.com" }],
  creator: "LinguoAI",
  publisher: "LinguoAI",
  metadataBase: new URL("https://linguoai.com"),
  alternates: {
    canonical: "https://linguoai.com",
  },
  openGraph: {
    title: "LinguoAI — AI Writing Assistant for Perfect Grammar & Tone",
    description:
      "Boost your writing with LinguoAI. Correct grammar, improve tone, and elevate your content using powerful AI-driven technology.",
    url: "https://linguoai.com",
    siteName: "LinguoAI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://linguoai.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LinguoAI - Premium Writing Assistant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@linguoai",
    creator: "@linguoai",
    title: "LinguoAI — AI Writing Assistant for Perfect Grammar & Tone",
    description:
      "Polish your writing instantly with LinguoAI. AI-powered grammar, tone, and clarity enhancements made easy.",
    images: ["https://linguoai.com/twitter-card.jpg"],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="author" content="LinguoAI Team" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="canonical" href="https://linguoai.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "LinguoAI",
              url: "https://linguoai.com",
              logo: "https://linguoai.com/logo.png",
              sameAs: [
                "https://twitter.com/linguoai",
                "https://linkedin.com/company/linguoai",
              ],
              description:
                "LinguoAI is an AI-powered writing assistant that helps improve grammar, tone, and clarity for professional writing.",
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
