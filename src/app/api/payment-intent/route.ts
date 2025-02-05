// import { NextRequest, NextResponse } from "next/server";
// import Stripe from 'stripe';

// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// export async function POST(request: NextRequest) {
//     try {
//         const { amount } = await request.json();

//         const paymentIntent = await stripe.paymentIntents.create({
//             amount: amount,
//             currency: 'usd',
//             automatic_payment_methods: { enabled: true },
//             // automatic_payment_methods: ['card_present'], 
//         })

//         return NextResponse.json({ clientSecret: paymentIntent.client_secret })

//     }
//     catch (err: unknown) {
//         if (err instanceof Error) {
//             return NextResponse.json({
//                 status: 500,
//                 body: { error: err.message }
//             })
//         }
//     }
// }

import { type NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not defined")
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2025-01-27.acacia", // Use the latest API version
})

export async function POST(request: NextRequest) {
  try {
    const { amount, currency = "inr" } = await request.json()

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: currency,
      automatic_payment_methods: { enabled: true },
    })

    return NextResponse.json({ clientSecret: paymentIntent.client_secret })
  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 500 })
    }
    return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 })
  }
}

