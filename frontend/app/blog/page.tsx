"use client"

import NavBar from "@/components/nav-bar"
import Footer from "@/components/footer"
import { motion } from "framer-motion"
import { Calendar, User } from "lucide-react"

export default function BlogPage() {
  const posts = [
    {
      title: "10 Tips to Improve Your Writing Today",
      excerpt: "Learn practical techniques to enhance your writing style and make your content more engaging.",
      author: "Sarah Chen",
      date: "Jan 15, 2025",
      readTime: "5 min read",
    },
    {
      title: "The Future of AI in Writing",
      excerpt: "Exploring how artificial intelligence is transforming the way we write and communicate.",
      author: "James Rodriguez",
      date: "Jan 12, 2025",
      readTime: "8 min read",
    },
    {
      title: "Mastering Email Communication",
      excerpt: "Professional tips for writing emails that get results and maintain relationships.",
      author: "Emma Wilson",
      date: "Jan 8, 2025",
      readTime: "6 min read",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-surface to-background">
      <NavBar />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Blog</h1>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              Insights, tips, and stories about writing and communication.
            </p>
          </motion.div>

          <div className="grid gap-8 max-w-2xl mx-auto">
            {posts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border border-border rounded-xl p-6 bg-surface hover:border-primary/50 transition-all cursor-pointer group"
              >
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-foreground-muted mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-4 text-sm text-foreground-muted">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <span>{post.readTime}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
