"use client"
import Image from "next/image"
import Link from "next/link"
import { FaSearch } from "react-icons/fa"
import { FaHome } from "react-icons/fa"
import { FaRegHeart } from "react-icons/fa6"
import { BiShoppingBag } from "react-icons/bi"

import dynamic from "next/dynamic"

// Dynamically import Clerk components (disable SSR)
const SignInButton = dynamic(() => import("@clerk/nextjs").then((mod) => mod.SignInButton), { ssr: false })
const SignedIn = dynamic(() => import("@clerk/nextjs").then((mod) => mod.SignedIn), { ssr: false })
const SignedOut = dynamic(() => import("@clerk/nextjs").then((mod) => mod.SignedOut), { ssr: false })
const UserButton = dynamic(() => import("@clerk/nextjs").then((mod) => mod.UserButton), { ssr: false })

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md animate-fade-in">
      {/* Top bar */}
      <div className="bg-[#F5F5F5] flex justify-between items-center px-6 py-3 text-xs sm:text-sm font-medium text-gray-600">
        <div className="flex gap-4">
          <Link href="/help" className="hover:text-gray-800 transition-colors">
            Help
          </Link>
          <Link href="/about" className="hover:text-gray-800 transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-gray-800 transition-colors">
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <SignedOut>
            <SignInButton>
              <button className="px-4 py-2 bg-black text-white font-semibold rounded-full shadow-md hover:bg-gray-800 transition-colors text-xs sm:text-sm">
                Login
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-8 h-8 sm:w-10 sm:h-10",
                },
              }}
            />
          </SignedIn>
        </div>
      </div>

      {/* Main navigation */}
      <div className="flex flex-wrap justify-between items-center px-4 sm:px-6 py-4">
      {/* Left section (Logo) */}
      <div className="flex items-center">
        <p className="text-black font-extrabold text-lg sm:text-xl md:text-2xl lg:text-3xl">SoleCare</p>
      </div>

      {/* Center section (Navigation Links) */}
      <nav className="order-3 md:order-2 w-full md:w-auto mt-4 md:mt-0 flex justify-center items-center gap-4 md:gap-6 text-gray-700 font-medium text-sm sm:text-base">
        <Link href="/" className="hover:text-black transition-colors">
          <FaHome className="text-xl" />
        </Link>
        <Link href="/products" className="hover:text-black transition-colors whitespace-nowrap">
          All Products
        </Link>
        <Link href="/products" className="hover:text-black transition-colors whitespace-nowrap">
          Men
        </Link>
        <Link href="/products" className="hover:text-black transition-colors whitespace-nowrap">
          Women
        </Link>
      </nav>

      {/* Right section (Search, Wishlist, Cart) */}
      <div className="order-2 md:order-3 flex items-center gap-4">
        {/* Search Bar */}
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black transition-all"
          />
          <FaSearch className="absolute right-3 top-2.5 text-gray-500" />
        </div>
        <Link href={"/wishlist"}>
          <FaRegHeart className="text-gray-700 w-6 h-6 cursor-pointer hover:text-black transition-colors" />
        </Link>
        <Link href="/cart">
          <BiShoppingBag className="text-gray-700 w-6 h-6 cursor-pointer hover:text-black transition-colors" />
        </Link>
      </div>
    </div>

      {/* Mobile Search Bar */}
      <div className="block md:hidden px-6 pb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black transition-all w-full"
          />
          <FaSearch className="absolute right-3 top-2.5 text-gray-500" />
        </div>
      </div>
    </header>
  )
}

