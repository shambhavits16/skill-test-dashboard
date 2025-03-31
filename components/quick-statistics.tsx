"use client"

import { useState, useEffect } from "react"

interface QuickStatisticsProps {
  rank: string
  percentile: string
  score: string
}

export default function QuickStatistics({ rank, percentile, score }: QuickStatisticsProps) {
  const [animatedRank, setAnimatedRank] = useState("0")
  const [animatedPercentile, setAnimatedPercentile] = useState("0")
  const [animatedScore, setAnimatedScore] = useState("0")

  // Animation for numbers
  useEffect(() => {
    const animateValue = (start: number, end: number, setter: (value: string) => void, duration: number) => {
      const startTime = Date.now()

      const updateValue = () => {
        const now = Date.now()
        const elapsed = now - startTime
        const progress = Math.min(elapsed / duration, 1)

        const currentValue = Math.floor(progress * (end - start) + start)
        setter(currentValue.toString())

        if (progress < 1) {
          requestAnimationFrame(updateValue)
        }
      }

      requestAnimationFrame(updateValue)
    }

    // Animate all values with different durations for a staggered effect
    animateValue(0, Number.parseInt(rank), setAnimatedRank, 1000)
    animateValue(0, Number.parseInt(percentile), setAnimatedPercentile, 1500)
    animateValue(0, Number.parseInt(score), setAnimatedScore, 2000)
  }, [rank, percentile, score])

  return (
    <div className="bg-white rounded-lg border p-6">
      <h2 className="text-md font-bold mb-3">Quick Statistics</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 relative">
        <div className="flex items-center gap-4 py-3 md:px-4">
          <div className="w-12 h-12 flex items-center justify-center">
            <span className="text-xl bg-gray-100 rounded-full p-3 border text-yellow-500">🏆</span>
          </div>
          <div>
            <div className="text-xl font-bold transition-all duration-300 hover:scale-110">{animatedRank}</div>
            <div className="text-gray-500 text-sm">YOUR RANK</div>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block absolute h-16 w-px bg-gray-200 left-1/3 top-1/2 -translate-y-1/2 -translate-x-1"></div>

        <div className="flex items-center gap-4 py-3 md:px-4">
          <div className="w-12 h-12 flex items-center justify-center">
            <span className="text-xl bg-gray-100 rounded-full p-3 border text-gray-400">📄</span>
          </div>
          <div>
            <div className="text-xl font-bold transition-all duration-300 hover:scale-110">{animatedPercentile}%</div>
            <div className="text-gray-500 text-sm">PERCENTILE</div>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block absolute h-16 w-px bg-gray-200 left-2/3 top-1/2 -translate-y-1/2 -translate-x-1"></div>

        <div className="flex items-center gap-4 py-3 md:px-4">
          <div className="w-12 h-12 flex items-center justify-center">
            <span className="text-xl bg-gray-100 rounded-full p-3 border text-green-500">✅</span>
          </div>
          <div>
            <div className="text-xl font-bold transition-all duration-300 hover:scale-110">{animatedScore} / 15</div>
            <div className="text-gray-500 text-sm">CORRECT ANSWERS</div>
          </div>
        </div>
      </div>
    </div>
  )
}

