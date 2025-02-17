"use client"
import { useChat } from "ai/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X } from "lucide-react"

export default function AIChat({ onClose }: { onClose: () => void }) {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <div className="flex flex-col h-[500px]">
      <div className="flex justify-between items-center p-4 border-b border-gray-700">
        <h2 className="text-xl font-semibold">Agentia AI Assistant</h2>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-6 w-6" />
        </Button>
      </div>
      <div className="flex-grow overflow-auto p-4 space-y-4">
        {messages.map((m) => (
          <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] p-2 rounded-lg ${
                m.role === "user" ? "bg-purple-600 text-white" : "bg-gray-700 text-white"
              }`}
            >
              {m.content}
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700">
        <div className="flex space-x-2">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Type your message..."
            className="flex-grow bg-gray-800 text-white border-gray-600"
          />
          <Button type="submit">Send</Button>
        </div>
      </form>
    </div>
  )
}

