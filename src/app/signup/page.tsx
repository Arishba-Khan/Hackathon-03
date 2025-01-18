'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function SignUpForm() {
  const [isChecked, setIsChecked] = useState(false)
  const [isEmailSignup, setIsEmailSignup] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md space-y-8 px-4">
        <div className="flex flex-col items-center">
          <Image src="/assests/nike.png" alt="Nike Logo" width={60} height={22} className="mb-6" />
          <h2 className="text-2xl font-bold text-center">BECOME A NIKE MEMBER</h2>
        </div>
        <form className="mt-12 space-y-6">
          <input
            type="email"
            placeholder="Email address"
            required
            className="w-full px-3 py-2 border-[1.5px] rounded-[4px] border-slate-200"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="w-full px-3 py-2 border-[1.5px] rounded-[4px] border-slate-200"
          />
          <input
            type="text"
            placeholder="First Name"
            required
            className="w-full px-3 py-2 border-[1.5px] rounded-[4px] border-slate-200"
          />
          <input
            type="text"
            placeholder="Last Name"
            required
            className="w-full px-3 py-2 border-[1.5px] rounded-[4px] border-slate-200"
          />
          <div>
            <input
              type="date"
              placeholder="Date of Birth"
              required
              className="w-full px-3 py-2 border-[1.5px] rounded-[4px] border-slate-200"
            />
            <p className="text-xs text-slate-500 mt-2">
              Get a Nike Member Reward every year on your Birthday.
            </p>
          </div>
          <select className="w-full px-3 py-2 border-[1.5px] rounded-[4px] border-slate-200">
            <option value="">India</option>
          </select>
          <div className="flex gap-4">
            <button type="button" className="w-1/2 px-3 py-2 border-[1.5px] rounded-[4px] border-slate-200 text-slate-600">
              Male
            </button>
            <button type="button" className="w-1/2 px-3 py-2 border-[1.5px] rounded-[4px] border-slate-200 text-slate-600">
              Female
            </button>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              className="sr-only"
              checked={isEmailSignup}
              onChange={() => setIsEmailSignup(!isEmailSignup)}
              id="email-signup"
            />
            <span 
              className={`w-5 h-5 border border-gray-300 rounded mr-2 flex items-center justify-center ${isEmailSignup ? 'bg-black' : 'bg-white'}`}
              onClick={() => setIsEmailSignup(!isEmailSignup)}
            >
              {isEmailSignup && (
                <svg className="w-3 h-3 text-white fill-current" viewBox="0 0 20 20">
                  <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                </svg>
              )}
            </span>
            <label htmlFor="email-signup" className="text-sm text-slate-500">
              Sign up for emails to get updates from Nike on products, offers and your Member benefits
            </label>
          </div>
          <p className="text-sm text-center text-slate-500">
            By creating an account, you agree to Nike&apos;s{' '}
            <Link href="#" className="underline text-slate-600 hover:text-black">
              Privacy Policy
            </Link>{' '}
            and{' '}
            <Link href="#" className="underline text-slate-600 hover:text-black">
              Terms of Use
            </Link>
          </p>
          <button
            type="submit"
            className="w-full py-3 bg-black text-white rounded hover:bg-gray-800 transition-colors"
          >
            JOIN US
          </button>
        </form>
        <p className="text-center text-sm">
          <span className="text-slate-500">Already a Member? </span>
          <Link href="/join" className="text-black underline hover:no-underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  )
}

