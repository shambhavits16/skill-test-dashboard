"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

interface UpdateModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (rank: string, percentile: string, score: string) => void
}

export default function UpdateModal({ isOpen, onClose, onSave }: UpdateModalProps) {
  const [rank, setRank] = useState("1")
  const [percentile, setPercentile] = useState("30")
  const [score, setScore] = useState("10")
  const [errors, setErrors] = useState({
    rank: "",
    percentile: ""
  })

  const validateRank = (value: string) => {
    if (!value.trim()) {
      return "required | should be number"
    }
    if (isNaN(Number(value))) {
      return "should be number"
    }
    return ""
  }

  const validatePercentile = (value: string) => {
    if (!value.trim()) {
      return "required | percentile 0-100"
    }
    const num = Number(value)
    if (isNaN(num) || num < 0 || num > 100) {
      return "percentile 0-100"
    }
    return ""
  }

  const handleRankChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setRank(value)
    setErrors(prev => ({ ...prev, rank: validateRank(value) }))
  }

  const handlePercentileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setPercentile(value)
    setErrors(prev => ({ ...prev, percentile: validatePercentile(value) }))
  }

  const handleSave = () => {
    const rankError = validateRank(rank)
    const percentileError = validatePercentile(percentile)

    if (rankError || percentileError) {
      setErrors({
        rank: rankError,
        percentile: percentileError
      })
      return
    }

    onSave(rank, percentile, score)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-xl p-5 py-7">
        <div className="flex justify-between items-center mb-8 px-4">
          <h2 className="text-2xl font-bold">Update scores</h2>
          <div className="w-10 h-10">
            <Image src="/html-logo.png" alt="HTML Logo" width={40} height={40} className="object-contain" />
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-800 text-white font-semibold text-sm">
              1
            </div>
            <label className="text-base font-medium flex-1">
              Update your <span className="font-bold">Rank</span>
            </label>
            <div className="flex flex-col">
              <Input
                value={rank}
                onChange={handleRankChange}
                className={`w-48 h-10 text-base ${errors.rank ? 'border-red-500' : 'border-blue-500'}`}
              />
              {errors.rank && <p className="text-red-500 text-xs mt-1">{errors.rank}</p>}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-800 text-white font-semibold text-sm">
              2
            </div>
            <label className="text-base font-medium flex-1">
              Update your <span className="font-bold">Percentile</span>
            </label>
            <div className="flex flex-col">
              <Input
                value={percentile}
                onChange={handlePercentileChange}
                className={`w-48 h-10 text-base ${errors.percentile ? 'border-red-500' : 'border-blue-500'}`}
              />
              {errors.percentile && <p className="text-red-500 text-xs mt-1">{errors.percentile}</p>}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-800 text-white font-semibold text-sm">
              3
            </div>
            <label className="text-base font-medium flex-1">
              Update your <span className="font-bold">Current Score (out of 15)</span>
            </label>
            <Input
              value={score}
              onChange={(e) => setScore(e.target.value)}
              className="w-48 h-10 text-base border-blue-500"
            />
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-8">
          <Button
            variant="outline"
            onClick={onClose}
            className="h-10 px-4 text-indigo-800 border-indigo-800"
          >
            cancel
          </Button>
          <Button
            className="h-10 px-6 bg-blue-950 hover:bg-blue-900 flex items-center"
            onClick={handleSave}
          >
            save <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}