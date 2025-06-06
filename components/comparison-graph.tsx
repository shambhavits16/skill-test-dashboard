"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts"
import { TrendingUp } from "lucide-react"
import { useMemo } from "react"

interface ComparisonGraphProps {
  percentile: string
}

export default function ComparisonGraph({ percentile }: ComparisonGraphProps) {
  const percentileValue = Number.parseInt(percentile, 10)

  // Generate data for the graph based on the percentile
  const data = useMemo(() => {
    // Base data points
    const baseData = [
      { x: 0, y: 5, students: 1 },
      { x: 10, y: 10, students: 2 },
      { x: 20, y: 15, students: 2 },
      { x: 30, y: 25, students: 3 },
      { x: 40, y: 35, students: 3 },
      { x: 50, y: 60, students: 4 },
      { x: 60, y: 80, students: 4 },
      { x: 70, y: 65, students: 3 },
      { x: 80, y: 45, students: 3 },
      { x: 90, y: 25, students: 4 },
      { x: 100, y: 10, students: 2 },
    ]

    // Add the user's percentile point
    const userPoint = { x: percentileValue, y: 25 + percentileValue / 10, students: 3, isUser: true }

    // Combine and sort
    return [...baseData, userPoint].sort((a, b) => a.x - b.x)
  }, [percentileValue])

  return (
    <div className="bg-white rounded-lg border p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-md font-bold">Comparison Graph</h2>
          <p className="text-gray-700 mt-3">
            <span className="font-bold">You scored {percentileValue}% percentile</span> which is lower than the
            <br className="hidden md:block"></br>
            average percentile 72% of all the engineers who took this assessment
          </p>
        </div>
        <div className="w-10 h-10 flex items-center justify-center text-3xl bg-gray-100 rounded-full p-3 border">
          <TrendingUp className="w-7 h-7 text-red-500" />
        </div>
      </div>

      <div className="h-64 mt-8 relative">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 20, bottom: 20, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="x"
              domain={[0, 100]}
              ticks={[0, 25, 50, 75, 100]}
              label={{ value: "", position: "bottom" }}
            />
            <YAxis hide />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-white p-2 border rounded shadow-md">
                      <p className="text-lg font-bold">{`${payload[0].payload.x}`}</p>
                      <p className="text-sm text-purple-500">{`numberOfStudent : ${payload[0].payload.students}`}</p>
                    </div>
                  )
                }
                return null
              }}
            />
            <ReferenceLine
              x={percentileValue}
              stroke="#888"
              strokeDasharray="3 3"
              label={{
                value: "your percentile",
                position: "insideBottomRight",
                fill: "#666",
                fontSize: 12,
                dy: -20,
                dx: 0,
              }}
            />
            <Line
              type="monotone"
              dataKey="y"
              stroke="#6366f1"
              strokeWidth={2}
              dot={(props) => {
                const { cx, cy, payload } = props
                return payload.isUser ? (
                  <circle cx={cx} cy={cy} r={6} fill="#6366f1" />
                ) : (
                  <circle cx={cx} cy={cy} r={4} fill="#6366f1" />
                )
              }}
              activeDot={{ r: 6, fill: "#4f46e5" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}