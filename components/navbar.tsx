import Image from "next/image"

export default function Navbar() {
  return (
    <div className="flex items-center justify-between h-20 px-6 border-b bg-white">
      <div className="flex items-center gap-2 font-semibold text-2xl">
        <Image src="/whatbytelogo.png" alt="WhatBytes Logo" width={35} height={35} />
        <span className="font-bold">WhatBytes</span>
      </div>

      <div className="flex items-center gap-2 border-2 border-gray-300 rounded-md px-1 py-1">
        <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
          <Image
            src="https://randomuser.me/api/portraits/men/75.jpg" 
            alt="Profile"
            width={32}
            height={32}
            className="object-cover"
          />
        </div>
        <span className="font-medium">Rahil Siddique</span>
      </div>
    </div>
  )
}

