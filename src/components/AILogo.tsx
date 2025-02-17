import { MessageSquare } from "lucide-react"

export default function AIAgentIcon() {
  return (
    <div className="relative w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center overflow-hidden">
      {/* Circuit board background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full grid grid-cols-4 grid-rows-4">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="border-r border-b border-white/20" />
          ))}
        </div>
      </div>

      {/* Stylized 'A' shape */}
      <div className="relative w-10 h-10 bg-white transform rotate-45">
        <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-purple-600 transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Eyes */}
      {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex space-x-2">
        <div className="w-2 h-2 rounded-full bg-[#33C6FF]" />
        <div className="w-2 h-2 rounded-full bg-[#33C6FF]" />
      </div> */}

      {/* Speech bubble */}
      <MessageSquare className="absolute bottom-1 right-1 w-4 h-4 text-[#33C6FF]" />
    </div>
  )
}

