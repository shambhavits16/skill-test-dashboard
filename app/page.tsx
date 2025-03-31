"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import SkillTestHeader from "@/components/skill-test-header"
import QuickStatistics from "@/components/quick-statistics"
import ComparisonGraph from "@/components/comparison-graph"
import SyllabusAnalysis from "@/components/syllabus-analysis"
import QuestionAnalysis from "@/components/question-analysis"
import Sidebar from "@/components/sidebar"

export default function SkillTestDashboard() {
  // State for the dashboard data
  const [rank, setRank] = useState("1")
  const [percentile, setPercentile] = useState("30")
  const [score, setScore] = useState("10")

  // Function to update all stats at once
  const updateStats = (newRank: string, newPercentile: string, newScore: string) => {
    setRank(newRank)
    setPercentile(newPercentile)
    setScore(newScore)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Content Area */}
        <div className="flex-1 p-6 ps-12 pe-2">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-md text-gray-800 mb-6">Skill Test</h1>

            {/* Main content grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left and middle sections (span 2 columns on large screens) */}
              <div className="lg:col-span-2 space-y-6">
                {/* Skill Test Header */}
                <SkillTestHeader updateStats={updateStats} />

                {/* Quick Statistics */}
                <QuickStatistics rank={rank} percentile={percentile} score={score} />

                {/* Comparison Graph */}
                <ComparisonGraph percentile={percentile} />
              </div>

              {/* Right section (moves to bottom on mobile) */}
              <div className="space-y-6">
                {/* Syllabus Analysis */}
                <SyllabusAnalysis />

                {/* Question Analysis */}
                <QuestionAnalysis score={score} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

