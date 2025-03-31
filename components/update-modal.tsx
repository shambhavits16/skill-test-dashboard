"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Loader2 } from "lucide-react"
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
    percentile: "",
    score: "",
  })
  const [isSaving, setIsSaving] = useState(false)

  // Load saved state from localStorage when modal opens
  useEffect(() => {
    if (isOpen) {
      const savedRank = localStorage.getItem("skilltest-rank")
      const savedPercentile = localStorage.getItem("skilltest-percentile")
      const savedScore = localStorage.getItem("skilltest-score")

      setRank(savedRank || "1")
      setPercentile(savedPercentile || "30")
      setScore(savedScore || "10")

      setErrors({
        rank: "",
        percentile: "",
        score: "",
      })
    }
  }, [isOpen])

  const validateRank = (value: string) => {
    if (!value.trim()) {
      return "required | should be number"
    }
    const num = Number(value)
    if (isNaN(num) || num < 1) {
      return "should be number greater than 0"
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

  const validateScore = (value: string) => {
    if (!value.trim()) {
      return "required | score 0-15"
    }
    const num = Number(value)
    if (isNaN(num) || num < 0 || num > 15) {
      return "score 0-15"
    }
    return ""
  }

  const handleRankChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setRank(value)
    setErrors((prev) => ({ ...prev, rank: validateRank(value) }))
  }

  const handlePercentileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setPercentile(value)
    setErrors((prev) => ({ ...prev, percentile: validatePercentile(value) }))
  }

  const handleScoreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setScore(value)
    setErrors((prev) => ({ ...prev, score: validateScore(value) }))
  }

  const handleSave = () => {
    const rankError = validateRank(rank)
    const percentileError = validatePercentile(percentile)
    const scoreError = validateScore(score)

    if (rankError || percentileError || scoreError) {
      setErrors({
        rank: rankError,
        percentile: percentileError,
        score: scoreError,
      })
      return
    }

    setIsSaving(true)

    // Simulate a short delay to show the loading indicator
    setTimeout(() => {
      onSave(rank, percentile, score)
      setIsSaving(false)
    }, 800)
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
                className={`w-48 h-10 text-base ${errors.rank ? "border-red-500" : "border-blue-500"}`}
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
                className={`w-48 h-10 text-base ${errors.percentile ? "border-red-500" : "border-blue-500"}`}
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
            <div className="flex flex-col">
              <Input
                value={score}
                onChange={handleScoreChange}
                className={`w-48 h-10 text-base ${errors.score ? "border-red-500" : "border-blue-500"}`}
              />
              {errors.score && <p className="text-red-500 text-xs mt-1">{errors.score}</p>}
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-8">
          <Button
            variant="outline"
            onClick={onClose}
            className="h-10 px-4 text-indigo-800 border-indigo-800"
            disabled={isSaving}
          >
            cancel
          </Button>
          <Button
            className="h-10 px-6 bg-blue-950 hover:bg-blue-900 flex items-center"
            onClick={handleSave}
            disabled={isSaving}
          >
            {isSaving ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving...
              </>
            ) : (
              <>
                save <ArrowRight className="ml-1 h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}

