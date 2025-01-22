"use client"

import { SetStateAction, useState } from "react"
import { ChevronDown, ChevronUp, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textArea"
import { ToastProvider, useToast } from "../components/ui/toast-context"
import { Toaster } from "../components/ui/toast"

const faqs = [
  {
    question: "How long does shipping take?",
    answer:
      "Shipping typically takes 3-5 business days for domestic orders and 7-14 business days for international orders.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for unworn shoes in their original packaging. Please see our Returns page for more details.",
  },
  {
    question: "Do you offer size exchanges?",
    answer:
      "Yes, we offer free size exchanges within 14 days of receiving your order. Please contact our customer service for assistance.",
  },
  {
    question: "Are your shoes true to size?",
    answer:
      "Most of our shoes fit true to size. However, we recommend checking the size guide on each product page for specific fitting advice.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship to most countries worldwide. Shipping costs and delivery times may vary depending on the destination.",
  },
]

function HelpPageContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const { addToast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", { name, email, message })
    addToast("Message sent successfully! We'll get back to you soon.", "success")
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
      <h1 className="text-4xl font-bold text-center mb-8">How Can We Help?</h1>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <button
              className="flex justify-between items-center w-full text-left"
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
            >
              <span className="text-lg font-medium">{faq.question}</span>
              {openFaq === index ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>
            {openFaq === index && <p className="mt-2 text-gray-600">{faq.answer}</p>}
          </div>
        ))}
      </section>

      <section className="bg-gray-50 p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e: { target: { value: SetStateAction<string> } }) => setEmail(e.target.value)}
              required
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="How can we help you?"
              rows={4}
            />
          </div>
          <Button type="submit" className="w-full">
            <Send className="mr-2 h-4 w-4" /> Send Message
          </Button>
        </form>
      </section>
    </div>
  )
}

export default function HelpPage() {
  return (
    <ToastProvider>
      <HelpPageContent />
      <Toaster />
    </ToastProvider>
  )
}

