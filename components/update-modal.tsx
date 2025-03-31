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

  const handleSave = () => {
    onSave(rank, percentile, score)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-lg p-8 relative">
        <div className="flex justify-between items-start mb-8">
          <h2 className="text-2xl font-bold">Update scores</h2>
          <div className="w-12 h-12">
            <Image src="/html-logo.png" alt="HTML Logo" width={48} height={48} className="object-contain" />
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="p-2 rounded-full bg-blue-800 text-white font-bold">
              1
            </div>
            <label className="text-lg font-medium">
              Update your <span className="font-bold">Rank</span>
            </label>
            <Input value={rank} onChange={(e) => setRank(e.target.value)} className="ml-auto w-52 h-12 text-lg border-blue-500 border-[1.5px]" />
          </div>

          <div className="flex items-center gap-4">
            <div className="p-2 rounded-full bg-blue-800 text-white font-bold">
              2
            </div>
            <label className="text-lg font-medium">
              Update your <span className="font-bold">Percentile</span>
            </label>
            <Input
              value={percentile}
              onChange={(e) => setPercentile(e.target.value)}
              className="ml-auto w-52 h-12 text-lg border-blue-500 border-[1.5px]"
            />
          </div>

          <div className="flex items-center gap-4">
            <div className="p-2 rounded-full bg-blue-800 text-white font-bold">
              3
            </div>
            <label className="text-lg font-medium">
              Update your <span className="font-bold">Current Score (out of 15)</span>
            </label>
            <Input value={score} onChange={(e) => setScore(e.target.value)} className="ml-auto w-52 h-12 text-lg border-blue-500 border-[1.5px]" />
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-8">
          <Button variant="outline" onClick={onClose} className="h-12 px-4 text-indigo-800 border-indigo-800">
            cancel
          </Button>
          <Button className="h-12 px-6 bg-blue-950 hover:bg-blue-900 border-black border-2" onClick={handleSave}>
            save <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

