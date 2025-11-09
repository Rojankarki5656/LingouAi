"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Mail, CheckCircle2, Zap, Sparkles, ArrowRight } from "lucide-react"
import { easeOut } from "framer-motion"


export default function ComingSoonPage() {
    const [email, setEmail] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const [result, setResult] = useState<any>(null)
    const [timeLeft, setTimeLeft] = useState({
        months: 0,
        weeks: 0,
        days: 0,
        hours: 0,
    })

    // Countdown Timer
    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date()
            const launchDate = new Date(now.getTime() + 90 * 24 * 60 * 60 * 1000)

            const diff = (launchDate.getTime() - now.getTime()) / 1000

            const months = Math.floor(diff / (30 * 24 * 60 * 60))
            const weeks = Math.floor((diff % (30 * 24 * 60 * 60)) / (7 * 24 * 60 * 60))
            const days = Math.floor((diff % (7 * 24 * 60 * 60)) / (24 * 60 * 60))
            const hours = Math.floor((diff % (24 * 60 * 60)) / (60 * 60))

            setTimeLeft({ months, weeks, days, hours })
        }

        calculateTimeLeft()
        const timer = setInterval(calculateTimeLeft, 1000)

        return () => clearInterval(timer)
    }, [])

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        if (!email) return
        try {
            // Send request to your backend API
            const response = await fetch("/api/v1/waitlist/join", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            })

            // Parse JSON response
            const data = await response.json()

            if (response.status === 200) {
                setResult(data.message)
                console.log("Signup successful:", data)
                setSubmitted(true)
                setTimeout(() => {
                    setEmail("")
                    setSubmitted(false)
                }, 3000)
            } else {
                // If backend sends error message
                setResult(data.error || "Signup failed, please try again")
            }
        } catch (err) {
            console.error("Signup error:", err)
            setResult("Network error, please try again later.")
        }
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    }

    const floatingVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: easeOut },
        },
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 overflow-hidden relative">

            {/* Animated Background Blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-20 left-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl"
                    animate={{ y: [0, 50, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
                    animate={{ y: [0, -50, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            {/* Navigation */}
            <nav className="relative z-10 flex items-center justify-between px-6 py-4 md:px-12 md:py-6 max-w-7xl mx-auto w-full">
                <motion.div
                    variants={itemVariants}
                    className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
                >
                    LinguoAI
                </motion.div>

                <motion.div variants={itemVariants}>
                    <Link
                        href="/"
                        className="px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20"
                    >
                        Back to Home
                    </Link>
                </motion.div>
            </nav>

            {/* Main Content */}
            <motion.div
                className="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)] px-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="text-center max-w-3xl mx-auto">

                    {/* Icon */}
                    <motion.div variants={itemVariants} className="mb-8 inline-flex">
                        <div className="p-4 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/30 backdrop-blur-sm">
                            <Sparkles className="w-8 h-8 text-blue-400" />
                        </div>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                    >
                        Something{" "}
                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent">
                            Amazing
                        </span>{" "}
                        is Coming
                    </motion.h1>

                    {/* Subheading */}
                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto"
                    >
                        We're crafting the ultimate AI-powered writing assistant. Get early access to LinguoAI and transform how you
                        write.
                    </motion.p>

                    {/* Countdown */}
                    <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
                        {[
                            { label: "Months", value: timeLeft.months },
                            { label: "Weeks", value: timeLeft.weeks },
                            { label: "Days", value: timeLeft.days },
                            { label: "Hours", value: timeLeft.hours },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className="p-4 md:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-blue-400/50 transition-colors"
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{item.value}</div>
                                <div className="text-sm text-gray-400">{item.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Email Form */}
                    <motion.div variants={itemVariants} className="mb-12">
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/50 transition-all backdrop-blur-sm"
                            />

                            <motion.button
                                type="submit"
                                className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold transition-all flex items-center justify-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {submitted ? (
                                    <>
                                        <CheckCircle2 className="w-4 h-4" />
                                        Joined!
                                    </>
                                ) : (
                                    <>
                                        Join Waitlist
                                        <ArrowRight className="w-4 h-4" />
                                    </>
                                )}
                            </motion.button>
                        </form>

                        {submitted && (
                            <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-green-400 text-sm mt-3 flex items-center justify-center gap-2"
                            >
                                <CheckCircle2 className="w-4 h-4" />
                                {result}
                            </motion.p>
                        )}
                    </motion.div>

                    {/* ✅ FIXED FEATURE ICONS */}
                    <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
                        {[
                            { icon: Zap, title: "Lightning Fast", description: "Instant AI-powered analysis of your writing" },
                            { icon: Sparkles, title: "Smart Suggestions", description: "Get personalized improvements in real-time" },
                            { icon: Mail, title: "Early Access", description: "Join the exclusive beta program first" },
                        ].map((feature, i) => {
                            const Icon = feature.icon
                            return (
                                <motion.div
                                    key={i}
                                    className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-400/30 transition-colors"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <Icon className="w-8 h-8 text-blue-400 mb-4 mx-auto" />
                                    <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-gray-400 text-sm">{feature.description}</p>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </div>
            </motion.div>

            {/* Floating Particles */}
            <motion.div variants={floatingVariants} className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-0">
                <div className="flex gap-2">
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="w-2 h-2 rounded-full bg-blue-400/50"
                            animate={{ y: [0, -20, 0], opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    )
}
