interface QuickStatisticsProps {
  rank: string
  percentile: string
  score: string
}

export default function QuickStatistics({ rank, percentile, score }: QuickStatisticsProps) {
  return (
    <div className="bg-white rounded-lg border p-6">
      <h2 className="text-md font-bold mb-3">Quick Statistics</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center">
            <span className="text-xl bg-gray-100 rounded-full p-3 border text-yellow-500">🏆</span>
          </div>
          <div>
            <div className="text-xl font-bold">{rank}</div>
            <div className="text-gray-500 text-sm">YOUR RANK</div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center">
            <span className="text-xl bg-gray-100 rounded-full p-3 border text-gray-400">📄</span>
          </div>
          <div>
            <div className="text-xl font-bold">{percentile}%</div>
            <div className="text-gray-500 text-sm">PERCENTILE</div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center">
            <span className="text-xl bg-gray-100 rounded-full p-3 border text-green-500">✅</span>
          </div>
          <div>
            <div className="text-xl font-bold">{score} / 15</div>
            <div className="text-gray-500 text-sm">CORRECT ANSWERS</div>
          </div>
        </div>
      </div>
    </div>
  )
}

