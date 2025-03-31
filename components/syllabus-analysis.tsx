import { Progress } from "@/components/ui/progress"

export default function SyllabusAnalysis() {
  const syllabusItems = [
    { name: "HTML Tools, Forms, History", progress: 80, color: "bg-blue-500" },
    { name: "Tags & References in HTML", progress: 60, color: "bg-orange-500" },
    { name: "Tables & References in HTML", progress: 24, color: "bg-red-500" },
    { name: "Tables & CSS Bascis", progress: 96, color: "bg-green-500" },
  ]

  return (
    <div className="bg-white rounded-lg border p-6">
      <h2 className="text-md font-bold mb-7">Syllabus Wise Analysis</h2>
      <div className="space-y-8">
        {syllabusItems.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between mb-4">
              <span className="text-gray-700">{item.name}</span>
              <span className="font-medium text-gray-900">{item.progress}%</span>
            </div>
            <Progress value={item.progress} className={item.color} />
          </div>
        ))}
      </div>
    </div>
  )
}

