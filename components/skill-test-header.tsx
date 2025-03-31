"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import UpdateModal from "./update-modal"

interface SkillTestHeaderProps {
  updateStats: (rank: string, percentile: string, score: string) => void
}

export default function SkillTestHeader({ updateStats }: SkillTestHeaderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleUpdateStats = (rank: string, percentile: string, score: string) => {
    updateStats(rank, percentile, score)
    setIsModalOpen(false)
  }

  return (
    <>
      <div className="bg-white rounded-lg border px-4 py-6">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 flex-shrink-0">
              <Image src="/html-logo.png" alt="HTML Logo" width={64} height={64} className="object-contain" />
            </div>
            <div>
              <h2 className="text-lg font-bold">Hyper Text Markup Language</h2>
              <p className="text-gray-600">Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
            </div>
          </div>
          <Button className="bg-indigo-900 hover:bg-blue-700 border-black border-2 px-7 py-5 font-semibold text-sm" onClick={() => setIsModalOpen(true)}>
            Update
          </Button>
        </div>
      </div>

      <UpdateModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSave={handleUpdateStats} />
    </>
  )
}

