"use client"

import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import CheckoutPage from "./CheckoutPage"
import convertToSubCurrency from "./lib/ConvertToSubCurrency"

if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined")
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

const StripePayment = ({ amount }: { amount: number }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Complete Your Payment</h1>
      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubCurrency(amount),
          currency: "inr",
          appearance: {
            theme: "stripe",
            variables: {
              colorPrimary: "#0070f3",
              colorBackground: "#ffffff",
              colorText: "#30313d",
              colorDanger: "#df1b41",
              fontFamily: "Ideal Sans, system-ui, sans-serif",
              spacingUnit: "4px",
              borderRadius: "4px",
            },
          },
        }}
      >
        <CheckoutPage amount={amount} />
      </Elements>
    </div>
  )
}

export default StripePayment

