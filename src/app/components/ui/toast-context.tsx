import type React from "react"
import { createContext, useContext, useState } from "react"

interface Toast {
  id: number
  message: string
  type: "success" | "error" | "info"
}

interface ToastContextType {
  toasts: Toast[]
  addToast: (message: string, type: "success" | "error" | "info") => void
  removeToast: (id: number) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = (message: string, type: "success" | "error" | "info") => {
    const newToast: Toast = { id: Date.now(), message, type }
    setToasts((prevToasts) => [...prevToasts, newToast])
    setTimeout(() => removeToast(newToast.id), 3000) // Auto remove after 3 seconds
  }

  const removeToast = (id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
  }

  return <ToastContext.Provider value={{ toasts, addToast, removeToast }}>{children}</ToastContext.Provider>
}

export const useToast = () => {
  const context = useContext(ToastContext)
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return context
}

