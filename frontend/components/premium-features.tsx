"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
    {
        id: 1,
        title: "Find credible sources instantly.",
        highlight: "AI Source Finder",
        desc: "Preserve academic integrity — auto-cite scholarly, peer-reviewed, and reputable sources in seconds.",
        leftText: (
            <>
                The integration of <span className="bg-blue-100 text-blue-800 px-1">artificial intelligence (AI)</span>in education is
                revolutionizing how students learn and how educators teach. AI-powered tools are now capable of{" "}
                <span className="bg-red-100 text-red-800 px-1">personalizing learning experiences</span>, offering adaptive feedback, and analyzing
                student performance in real-time. These systems can identify knowledge gaps and tailor materials to each learner’s needs,
                enhancing overall academic outcomes. However, the rapid expansion of AI in classrooms also raises{" "}
                <span className="bg-blue-100 text-blue-800 px-1">ethical concerns</span> — including data privacy, bias in algorithms, and the potential
                over-reliance on automation rather than human judgment. As education enters the digital age, it’s crucial to balance
                technological innovation with equitable access and human-centered values.
            </>
        ),
        rightText: (
            <div className="h-full flex flex-col">
                <p className="text-sm font-semibold text-white-600 mb-2">
                    CLAIM 1{" "}
                    <span className="ml-2 text-xs text-purple-600 bg-purple-100 px-2 py-0.5 rounded-full">
                        Verified & Supported
                    </span>
                </p>
                <p className="text-white-700 mb-4 text-sm">
                    Artificial intelligence enhances personalized learning outcomes and can adapt educational content to individual student performance.
                </p>
                <div className="bg-white border border-gray-200 rounded-lg p-4 text-sm flex-1">
                    <p className="mb-2 text-green-600 font-medium">
                        Relevance: 92%{" "}
                        <span className="ml-2 text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full">
                            Strong Scholarly Support
                        </span>
                    </p>
                    <p className="font-semibold text-black">Source Match Summary</p>
                    <p className="text-gray-500 text-sm">
                        UNESCO AI in Education Report (2023) • Journal of Learning Analytics • EdTech Review
                    </p>
                    <p className="mt-3 text-gray-600">
                        “AI-based systems are shown to improve learning efficiency by up to 35% through adaptive content delivery and
                        data-driven performance monitoring.”
                    </p>
                    <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg text-sm text-green-800">
                        ✅ <span className="font-medium">Feedback:</span> The claim is well-supported. You could enhance your statement by
                        discussing ethical implications and student data security.
                    </div>
                </div>
            </div>
        ),
        buttonLabel: "Search Sources",
    },

    {
        id: 2,
        title: "Detect AI-written content instantly.",
        highlight: "AI Vocabulary Scanner",
        desc: "Spot overused AI phrases, detect robotic tone, and rewrite with human authenticity.",
        leftText: (
            <>
                The growing prevalence of{" "}
                <span className="bg-yellow-100 text-yellow-800 px-1">AI-generated writing</span> has blurred the line between human and machine expression.
                Many essays and research drafts today include{" "}
                <span className="bg-red-100 text-red-800 px-1">formulaic phrases</span> and unnaturally consistent sentence patterns that betray their
                artificial origins. Phrases such as{" "}
                <span className="bg-blue-100 text-blue-800 px-1">“in recent years”</span> or “it is crucial to note” are often repeated across thousands of AI outputs,
                making text sound robotic and predictable. While these tools are valuable for drafting,
                over-reliance on them can diminish{" "}
                <span className="bg-green-100 text-green-800 px-1">authentic voice</span> and originality.
                A balanced approach—where AI assists but doesn’t dominate—ensures that human creativity remains central to communication.
            </>
        ),
        rightText: (
            <div className="h-full flex flex-col">
                <p className="text-sm font-semibold text-gray-100 mb-2">
                    AI VOCABULARY ANALYSIS{" "}
                    <span className="ml-2 text-xs text-yellow-700 bg-yellow-100 px-2 py-0.5 rounded-full">Detected</span>
                </p>
                <p className="text-gray-200 mb-4 text-sm">
                    Overuse of AI-like vocabulary patterns and generic transitional phrases detected in writing sample.
                </p>
                <div className="bg-white border border-gray-200 rounded-lg p-4 text-sm flex-1">
                    <p className="mb-2 text-orange-600 font-medium">AI Confidence: 89%</p>
                    <p className="font-semibold text-black mb-2">Detected AI-Style Expressions:</p>
                    <ul className="text-gray-600 text-xs space-y-1 mt-1">
                        <li>• “In the modern era of technological advancement”</li>
                        <li>• “It is essential to understand that”</li>
                        <li>• “plays a vital role in today’s society”</li>
                    </ul>
                    <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-800">
                        ⚠️ <span className="font-medium">Feedback:</span> Replace repetitive academic clichés with unique transitions and active-voice phrasing.
                        Introduce variety in tone and rhythm to enhance authenticity.
                    </div>
                </div>
            </div>
        ),
        buttonLabel: "AI Vocabulary",
    },
    {
        id: 3,
        title: "Improve clarity, tone, and engagement.",
        highlight: "AI Writing Coach",
        desc: "Refine your writing with tone, structure, and persuasiveness guidance for maximum impact.",
        leftText: (
            <>
                In a rapidly evolving workplace,{" "}
                <span className="bg-blue-100 text-blue-800 px-1">remote collaboration</span> has become a fundamental part of professional life.
                While it offers flexibility, it can also lead to{" "}
                <span className="bg-red-100 text-red-800 px-1">communication gaps and reduced team cohesion</span>.
                To thrive in a digital-first environment, individuals must develop{" "}
                <span className="bg-green-100 text-green-800 px-1">emotional intelligence, empathy, and adaptability</span>.
                Effective communication across virtual platforms relies on tone, context, and clarity.
                The ability to express ideas persuasively—without losing human warmth—is essential
                for leadership, teamwork, and innovation in modern organizations.
            </>
        ),
        rightText: (
            <div className="h-full flex flex-col">
                <p className="text-sm font-semibold text-gray-100 mb-2">WRITING FEEDBACK</p>
                <p className="text-gray-200 mb-4 text-sm">
                    Clear and informative writing. Moderate engagement and tone variation detected.
                </p>
                <div className="bg-white border border-gray-200 rounded-lg p-4 text-sm flex-1">
                    <p className="mb-2 text-blue-600 font-medium">Engagement Score: 80/100</p>
                    <p className="font-semibold text-black mb-1">Suggestions for Improvement:</p>
                    <ul className="text-gray-600 text-xs space-y-1 mt-1">
                        <li>• Use more vivid verbs to add emotional depth.</li>
                        <li>• Break long sentences to improve rhythm and readability.</li>
                        <li>• Include relatable examples or analogies to connect with the reader.</li>
                        <li>• Balance formal tone with conversational transitions.</li>
                    </ul>
                    <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-800">
                        💡 <span className="font-medium">Feedback:</span> Excellent structure. Try adjusting tone shifts between sentences for a more natural flow.
                    </div>
                </div>
            </div>
        ),
        buttonLabel: "Writing Feedback",
    },
    {
        id: 4,
        title: "Ensure originality and credibility.",
        highlight: "Plagiarism Checker",
        desc: "Instantly scan your text across journals, archives, and the open web to ensure 100% originality.",
        leftText: (
            <>
                The surge in{" "}
                <span className="bg-green-100 text-green-800 px-1">renewable energy investments</span> marks a global shift toward sustainability.
                However, research papers on the topic often unintentionally mirror one another due to{" "}
                <span className="bg-red-100 text-red-800 px-1">reused definitions, identical statistics, and overlapping phrases</span>.
                Even when paraphrased, minor similarities can trigger plagiarism detectors.
                Maintaining originality requires not just unique phrasing but{" "}
                <span className="bg-blue-100 text-blue-800 px-1">authentic interpretation and synthesis of ideas</span>.
                Proper citation and paraphrasing practices ensure academic credibility and trustworthiness.
            </>
        ),
        rightText: (
            <div className="h-full flex flex-col">
                <p className="text-sm font-semibold text-gray-100 mb-2">PLAGIARISM SCAN RESULT</p>
                <p className="text-gray-200 mb-4 text-sm">
                    Moderate textual overlap detected. Most matches found in energy and policy databases.
                </p>
                <div className="bg-white border border-gray-200 rounded-lg p-4 text-sm flex-1">
                    <p className="mb-2 text-red-600 font-medium">Similarity Index: 21%</p>
                    <p className="font-semibold mb-1 text-black">Matched Sources:</p>
                    <ul className="text-gray-600 text-xs space-y-1 mt-1">
                        <li>• “Sustainable Energy Trends” — World Bank (9%)</li>
                        <li>• “Energy Policy and Economics” — Elsevier (7%)</li>
                        <li>• “Climate Action Reports 2023” — Springer (3%)</li>
                    </ul>
                    <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-800">
                        ⚠️ <span className="font-medium">Feedback:</span> Rephrase sentences with identical phrasing and attribute all statistical data to credible sources.
                    </div>
                </div>
            </div>
        ),
        buttonLabel: "Plagiarism Checker",
    },
    {
        id: 5,
        title: "Run a deep content integrity check.",
        highlight: "Advanced Scan",
        desc: "Analyze tone, AI probability, structure, citations, and originality in one powerful report.",
        leftText: (
            <>
                Advanced content analysis uses{" "}
                <span className="bg-yellow-100 text-yellow-800 px-1">multi-layer linguistic fingerprinting</span> and{" "}
                <span className="bg-blue-100 text-blue-800 px-1">AI pattern detection</span> to identify nuanced authorship markers.
                This technique evaluates sentence rhythm, stylistic coherence, and even emotional tone
                to determine if text was likely human-written or machine-assisted.
                The scan also checks{" "}
                <span className="bg-green-100 text-green-800 px-1">citation structure, reference authenticity, and factual alignment</span>.
                Such in-depth reporting helps publishers, educators, and organizations ensure their content maintains credibility,
                transparency, and originality across multiple metrics.
            </>
        ),
        rightText: (
            <div className="h-full flex flex-col">
                <p className="text-sm font-semibold text-gray-100 mb-2">ADVANCED SCAN SUMMARY</p>
                <p className="text-gray-200 mb-4 text-sm">
                    Comprehensive multi-layer analysis completed successfully. Below is the breakdown of content integrity.
                </p>
                <div className="bg-white border border-gray-200 rounded-lg p-4 text-sm flex-1">
                    <p className="mb-2 text-green-600 font-medium">Authenticity Score: 94%</p>
                    <p className="font-semibold mb-1 text-black">Detailed Metrics:</p>
                    <ul className="text-gray-600 text-xs space-y-1 mt-1">
                        <li>• Human Writing Probability: 96%</li>
                        <li>• AI Vocabulary Density: 3%</li>
                        <li>• Citation Accuracy: 91%</li>
                        <li>• Tone Consistency Index: 88%</li>
                    </ul>
                    <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg text-sm text-green-800">
                        ✅ <span className="font-medium">Feedback:</span> Excellent clarity and human tone. Maintain variety in word choice and validate references regularly.
                    </div>
                </div>
            </div>
        ),
        buttonLabel: "Advanced Scan",
    },

];


const buttonOrder = ["Search Sources", "AI Vocabulary", "Writing Feedback", "Plagiarism Checker", "Advanced Scan"];

export default function PremiumFeaturesSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-rotate every 5 seconds
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % features.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isPaused]);

    const feature = features[activeIndex];

    return (
        <section
            id="hero"
            className="py-20 px-6 sm:px-12 flex flex-col items-center text-center relative z-10"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Top Button */}
            <button className="px-4 py-1.5 mb-6 rounded-full border border-gray-900 bg-[#0f1629]/70 text-sm text-gray-200 hover:bg-[#1b2340]/70 transition">
                Try Premium Features
            </button>

            {/* Animated Heading */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl"
                >
                    <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
                        {feature.title}{" "}
                        <span className="text-blue-600">{feature.highlight}</span>
                    </h2>
                    <p className="text-gray-600 mt-3 max-w-2xl mx-auto">{feature.desc}</p>
                </motion.div>
            </AnimatePresence>

            {/* Animated Preview Box */}
            <div className="mt-14 w-full max-w-5xl min-h-[460px] rounded-2xl bg-[radial-gradient(circle_at_top_left,_#f8fafc_0%,_#f4fdf4_60%,_#ffffff_100%)] backdrop-blur-xl supports-[backdrop-filter]:bg-[#060b13]/50 p-6 flex flex-col lg:flex-row gap-6 overflow-hidden">
                {/* Left Panel */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={feature.id + '-left'}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 rounded-xl p-5 text-left text-gray-900 leading-relaxed border border-white/10 bg-[#f8f7f4]/50"
                    >
                        {feature.leftText}
                    </motion.div>
                </AnimatePresence>

                {/* Right Panel */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={feature.id + '-right'}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 rounded-xl p-5 text-left border border-white bg-[#1b2340]/50 min-h-[260px] text-white"
                    >
                        {feature.rightText}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Bottom Clickable Buttons */}
            <div className="mt-10 flex flex-wrap justify-center gap-3">
                {buttonOrder.map((label, idx) => {
                    const isActive = features[activeIndex].buttonLabel === label;
                    return (
                        <button
                            key={label}
                            onClick={() => setActiveIndex(idx)}
                            className={`px-5 py-2 rounded-full border text-sm font-medium transition-all duration-300 ${isActive
                                ? 'bg-blue-600 text-white border-blue-500 shadow-md'
                                : 'bg-[#0f1629]/70 text-gray-300 border-gray-600 hover:bg-[#1b2340]'
                                }`}
                        >
                            {label}
                        </button>
                    );
                })}
            </div>

            {/* Dots */}
            <div className="mt-6 flex gap-2">
                {features.map((_, idx) => (
                    <div
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        className={`w-2 h-2 rounded-full cursor-pointer transition-all ${activeIndex === idx ? 'bg-blue-500 w-6' : 'bg-gray-500/50'
                            }`}
                    />
                ))}
            </div>
        </section>

    );
}