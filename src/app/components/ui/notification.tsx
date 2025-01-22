import React from "react"
import { useState, useEffect } from "react"
import { X } from "lucide-react"

interface NotificationProps {
  message: string
  type: "success" | "error" | "info"
  duration?: number
}

export const Notification: React.FC<NotificationProps> = ({ message, type, duration = 3000 }) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration])

  if (!isVisible) return null

  const bgColor = type === "success" ? "bg-green-500" : type === "error" ? "bg-red-500" : "bg-blue-500"

  return (
    <div className={`fixed top-4 right-4 ${bgColor} text-white p-4 rounded-md shadow-lg max-w-sm z-50`}>
      <div className="flex items-center justify-between">
        <p>{message}</p>
        <button onClick={() => setIsVisible(false)} className="ml-4">
          <X size={20} />
        </button>
      </div>
    </div>
  )
}

