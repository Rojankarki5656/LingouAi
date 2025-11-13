"use client"

import { useEffect, useRef, useState } from "react"
import { FileText, Loader2, Upload } from "lucide-react"

import ReportViewer from "./report-viewer"
import { useRouter } from "next/navigation"



interface AnalysisResult {
  grammarIssues: number
  styleSuggestions: number
  readabilityScore: number
  wordCount: number
  issues: Array<{ type: string; message: string; position: number; severity: string }>
}

interface TextAnalyzerProps {
  text: string
  onTextChange: (text: string) => void
  selectedOptions: string[]
  onOptionsChange?: (options: string[]) => void // ✅ optional callback for parent
}

export default function TextAnalyzer({ text, onTextChange, selectedOptions, onOptionsChange }: TextAnalyzerProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [results, setResults] = useState<AnalysisResult | null>(null)
  const [externalOptions, setExternalOptions] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter();

  // Map backend/raw result into the viewer's expected shape
  const normalizeSeverity = (s: string): "high" | "medium" | "low" => {
    const v = s.toLowerCase()
    if (v === "high" || v === "medium" || v === "low") return v
    return "low"
  }
  const toggleOption = (id: string) => {
    if (isAuthenticated) {
      // Shared (parent-managed)
      const updated = selectedOptions.includes(id)
        ? selectedOptions.filter((item) => item !== id)
        : [...selectedOptions, id]

      onOptionsChange?.(updated)
      console.log("Shared (authenticated):", updated)
    } else {
      // Local-only (not authenticated)
      const updated = externalOptions.includes(id)
        ? externalOptions.filter((item) => item !== id)
        : [...externalOptions, id]

      setExternalOptions(updated)
      console.log("Local (guest):", updated)
    }
  };

  // ✅ Current options depend on auth state
  const activeOptions = isAuthenticated ? selectedOptions : externalOptions
  useEffect(() => {
    const user = localStorage.getItem("user")
    setIsAuthenticated(!!user)
  }, [])

  const toSummary = (r: AnalysisResult) => ({
    grammarIssues: r.grammarIssues,
    styleSuggestions: r.styleSuggestions,
    readabilityScore: r.readabilityScore,
    wordCount: r.wordCount,
    issues: r.issues.map((i) => ({
      type: i.type,
      message: i.message,
      severity: normalizeSeverity(i.severity),
    })),
    text: text, 
  })

  const handleAnalyze = async () => {
    if (!text.trim() || activeOptions.length === 0) return

    setIsAnalyzing(true)
    try {
      const response = await fetch(
        isAuthenticated
          ? "http://localhost:9000/api/v1/analyze/check"
          : "/api/analyze", // fallback for guest demo
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(isAuthenticated && { Authorization: `Bearer ${localStorage.getItem("token") || ""}` }),
          },
          body: JSON.stringify({ text, options: activeOptions }),
        }
      )

      const data = await response.json()
      setResults(data)

      // ✅ Save analysis history locally
      const historyEntry = {
        id: Date.now().toString(),
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        text: text.substring(0, 100),
        wordCount: data.wordCount,
        score: data.readabilityScore,
        grammarIssues: data.grammarIssues,
      }

      const saved = localStorage.getItem("fullAnalysisHistory")
      const history = saved ? JSON.parse(saved) : []
      history.unshift(historyEntry)
      localStorage.setItem("fullAnalysisHistory", JSON.stringify(history.slice(0, 50)))

      // Save current analysis
      localStorage.setItem("currentAnalysis", JSON.stringify({ data, text, options: selectedOptions }))

      router.push("/dashboard/results")
    } catch (error) {
      console.error("Analysis error:", error)
    } finally {
      setIsAnalyzing(false)
    }
  }
  const buttons = [
    { id: "ai-detect", label: "Scan for AI", color: "green" },
    { id: "grammar", label: "Check grammar", color: "yellow" },
    { id: "plagiarism", label: "Check Plagiarism", color: "blue" },
  ];
  const handleFileSelect = async (file: File) => {
    if (file.type === "text/plain" || file.type === "text/markdown" || file.name.endsWith(".md")) {
      const text = await file.text()
      onTextChange(text)
    }
  }

  const handleFileUpload = (fileText: string) => {
    onTextChange(fileText)
  }

  const characterCount = text.length
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length

  return (
    <div className="space-y-4">
      <div className="card-premium bg-[radial-gradient(circle_at_top_left,_#f8fafc_0%,_#f4fdf4_60%,_#ffffff_100%)] backdrop-blur-xl supports-[backdrop-filter]:bg-[#060b13]/50">

        {!isAuthenticated ? (
          <>
            {/* Top buttons (selectable) */}
            <div className="flex flex-wrap gap-5 p-4 border-b">
              {buttons.map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => { toggleOption(btn.id); }}
                  className={`px-4 py-1 text-sm font-medium rounded-full border transition-all duration-200 transform ${externalOptions.includes(btn.id)
                    ? `bg-${btn.color}-600 text-black border-${btn.color}-600 scale-110 shadow-md`
                    : `bg-${btn.color}-50 text-${btn.color}-600 border-${btn.color}-200 hover:bg-${btn.color}-100`
                    }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </>
        ) : null}


        <div className="mb-4">
          <h2 className="text-xl font-semibold text-foreground mb-2">Write or Paste Text</h2>
          <p className="text-sm text-foreground-muted">Enter your text to analyze</p>
        </div>

        <textarea
          value={text}
          onChange={(e) => onTextChange(e.target.value)}
          placeholder="Paste your text here or start typing..."
          className="w-full h-64 p-4 bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
        />

        <div className="flex justify-between items-center mt-4 pt-4 border-t border-border">
          <div className="flex gap-6 text-sm text-foreground-muted">
            <span>{characterCount} characters</span>
            <span>{wordCount} words</span>
          </div>

          <div className="flex items-center gap-2">
            {isAuthenticated ? (
              <>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".txt,.md,.doc,.pdf"
                  onChange={(e) => {
                    const file = e.target.files?.[0]
                    if (file) handleFileSelect(file)
                  }}
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isAnalyzing}
                  className="p-2 hover:bg-surface rounded-lg transition-colors text-foreground-muted hover:text-foreground disabled:opacity-50"
                  title="Upload file"
                >
                  <Upload className="w-5 h-5" />
                </button>
              </>
            ) : null}


            <button
              onClick={handleAnalyze}
              disabled={!text.trim() || isAnalyzing || activeOptions.length === 0}
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg hover:shadow-blue-600/30 transition-all rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 transition-colors"
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <FileText className="w-4 h-4" />
                  Analyze Text
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
