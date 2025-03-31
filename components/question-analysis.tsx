"use client"

import { useMemo } from "react"
import { PieChart, Pie, ResponsiveContainer } from "@/components/ui/chart"
import { Cell } from "recharts"

interface QuestionAnalysisProps {
  score: string
}

export default function QuestionAnalysis({ score }: QuestionAnalysisProps) {
  const scoreValue = Number.parseInt(score, 10)

  // Data for the pie chart
  const data = useMemo(
    () => [
      { name: "Correct", value: scoreValue },
      { name: "Incorrect", value: 15 - scoreValue },
    ],
    [scoreValue],
  )

  const COLORS = ["#4f46e5", "#e5e7eb"]

  return (
    <div className="bg-white rounded-lg border p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-md font-bold">Question Analysis</h2>
        <span className="text-blue-600 text-sm font-bold animate-pulse">{score}/15</span>
      </div>

      <div>
        <p className="text-gray-700 mb-6">
          <span className="font-bold">You scored {score} question correct out of 15.</span>
          {scoreValue < 10
            ? " You need significant improvements."
            : scoreValue < 13
              ? " However it still needs some improvements."
              : " Great job!"}
        </p>

        <div className="h-48 flex justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} cx="50%" cy="50%" innerRadius={55} outerRadius={80} paddingAngle={0} dataKey="value">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              {/* Target emoji in the center */}
              <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="24px">
                🎯
              </text>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

