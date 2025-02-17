"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import AIChat from "@/components/AIChat"
import { motion } from "framer-motion"


export default function LandingPage() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#0B0014] text-white relative">
        
      <div className="container mx-auto px-4 py-[230px]">
      <motion.h1
      className="text-6xl font-bold mb-6 text-center text-[#ea62a4]"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      Welcome to Agentia
    </motion.h1>
    
        <p className="text-xl text-center mb-8 ">Delivering IT solutions that enable you to work smarter</p>
        <div className="flex justify-center">
          <Link href="/home">
            <Button className="w-[500px] py-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xl hover:from-pink-600 hover:to-purple-700">
              Explore Now
            </Button>
          </Link>
        </div>
      </div>

      {/* Floating chat icon */}
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 rounded-full shadow-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
      >
        <MessageCircle size={24} />
      </button>

      {/* AI Chat modal */}
      {isChatOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-[#1A1A2E] rounded-lg shadow-xl w-full max-w-md">
            <AIChat onClose={() => setIsChatOpen(false)} />
          </div>
        </div>
      )}
    </div>
  )
}

