import type React from "react"
import Navbar from "@/components/navbar"
import Sidebar from "@/components/sidebar"

export default function InternshipLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Content Area */}
        <div className="flex-1 p-6 ps-12 pe-2">
          <div className="max-w-7xl mx-auto">{children}</div>
        </div>
      </div>
    </div>
  )
}

