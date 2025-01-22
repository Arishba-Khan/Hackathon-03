import type React from "react"
import { useToast } from "./toast-context"
import { X } from "lucide-react"

export const Toast: React.FC<{ toast: { id: number; message: string; type: string } }> = ({ toast }) => {
  const { removeToast } = useToast()

  return (
    <div
      className={`${
        toast.type === "success" ? "bg-green-500" : toast.type === "error" ? "bg-red-500" : "bg-blue-500"
      } text-white p-4 rounded-md shadow-lg flex justify-between items-center`}
    >
      <p>{toast.message}</p>
      <button onClick={() => removeToast(toast.id)} className="text-white hover:text-gray-200">
        <X size={18} />
      </button>
    </div>
  )
}

export const Toaster: React.FC = () => {
  const { toasts } = useToast()

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col space-y-2">
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} />
      ))}
    </div>
  )
}

