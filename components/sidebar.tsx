"use client"

import Link from "next/link"
import { FiBarChart2 } from "react-icons/fi";
import { RiAwardFill } from "react-icons/ri";
import { RxFile } from "react-icons/rx";
import { usePathname } from "next/navigation"

export default function Sidebar() {
  const pathname = usePathname()

  const navItems = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: FiBarChart2,
    },
    {
      name: "Skill Test",
      href: "/",
      icon: RiAwardFill,
    },
    {
      name: "Internship",
      href: "/internship",
      icon: RxFile,
    },
  ]

  return (
    <div className="hidden md:flex flex-col w-60 border-r bg-white">
      <nav className="flex-1 pe-3 py-6">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-4 font-bold hover:bg-gray-100 transition-colors mb-2 ${isActive ? "bg-gray-100 rounded-e-full text-blue-600" : "text-gray-700 "
                }`}
            >
              <item.icon className={`h-5 w-5 ${isActive ? "text-blue-600" : "text-gray-700"}`} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  )
}

