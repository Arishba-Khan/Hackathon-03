"use client"

import { useState, useEffect } from "react"
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js"
import convertToSubCurrency from "./lib/ConvertToSubCurrency"

const CheckoutPage = ({ amount }: { amount: number }) => {
  const stripe = useStripe()
  const elements = useElements()

  const [errorMessage, setError] = useState<string>()
  const [clientSecret, setClientSecret] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (amount) {
      fetch("/api/payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: convertToSubCurrency(amount), currency: "inr" }),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret))
    }
  }, [amount])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    if (!stripe || !elements) {
      return
    }

    const { error: submitErrors } = await elements.submit()
    if (submitErrors) {
      setError(submitErrors.message)
      setLoading(false)
      return
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `${window.location.origin}/payment-success?amount=${amount}`,
      },
    })

    if (error) {
      setError(error.message)
    } else {
      setError("")
    }
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {clientSecret && <PaymentElement className="mb-6" />}
      <button
        type="submit"
        disabled={loading || !amount}
        className="w-full flex justify-center mt-6 px-4 py-2 bg-black text-white rounded-3xl font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-colors"
      >
        {loading ? "Processing..." : amount ? `Pay ₹ ${amount.toFixed(2)}` : "Invalid Amount"}
      </button>
      {errorMessage && <div className="text-red-600 text-sm mt-2">{errorMessage}</div>}
    </form>
  )
}

export default CheckoutPage

