export default function SyllabusAnalysis() {
  const syllabusItems = [
    { name: "HTML Tools, Forms, History", progress: 80, color: "bg-blue-500", lightColor: "bg-blue-100", textColor: "text-blue-500" },
    { name: "Tags & References in HTML", progress: 60, color: "bg-orange-500", lightColor: "bg-orange-100", textColor: "text-orange-500" },
    { name: "Tables & References in HTML", progress: 24, color: "bg-red-500", lightColor: "bg-red-100", textColor: "text-red-500" },
    { name: "Tables & CSS Bascis", progress: 96, color: "bg-green-500", lightColor: "bg-green-100", textColor: "text-green-500" },
  ]
  
  return (
    <div className="bg-white rounded-lg border p-6">
      <h2 className="text-md font-bold mb-7">Syllabus Wise Analysis</h2>
      <div className="space-y-8">
        {syllabusItems.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="mb-4">
              <span className="text-gray-700">{item.name}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className={`h-2 w-full ${item.lightColor} rounded-full overflow-hidden`}>
                <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.progress}%` }}></div>
              </div>
              <span className={`font-medium ${item.textColor} w-12 text-right`}>
                {item.progress}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}