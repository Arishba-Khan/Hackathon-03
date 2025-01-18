import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { BiShoppingBag } from "react-icons/bi";

export default function header() {
  return (
    <header className="">
      {/* Top bar */}
      <div className="bg-[#F5F5F5] flex justify-between sticky items-center px-6 py-2 md:text-[11px] sm:text-[9px] text-[8px] font-medium text-gray-500">
        <Image
          src="/assests/logo.png"
          alt={""}
          width={24}
          height={24}
          className="w-[24px] h-[24px]"
        />

        <div className="flex md:gap-4 sm:gap-3 gap-2">
          <Link href="#" className="hover:text-gray-800">
            Find Link Store
          </Link>
          <Link href="#" className="hover:text-gray-800">
            Help
          </Link>
          <Link href="/signup" className="hover:text-gray-800">
            Join Us
          </Link>
          <Link href="/join" className="hover:text-gray-800">
            Sign In
          </Link>
        </div>
      </div>

      {/* Main navigation */}
      <div className="flex flex-wrap justify-between items-center px-6 py-4">
        {/* Left section (Logo) */}
        <div className="flex items-center">
          <Image
            src="/assests/nike.png"
            alt="Nike Logo"
            className="md:w-[78px] sm:w-[60px] w-[30px]
          "
            width={30}
            height={30}
          />
        </div>

        {/* Center section (Navigation Links) */}
        <nav className="flex gap-4 md:gap-6 text-gray-700 font-medium md:text-[16px] sm:text-[14px] text-[10px] ">
          <Link href="/products" className="hover:text-black whitespace-nowrap">
            New & Featured
          </Link>
          <Link href="#" className="hover:text-black whitespace-nowrap">
            Men
          </Link>
          <Link href="#" className="hover:text-black whitespace-nowrap">
            Women
          </Link>
          <Link href="#" className="hover:text-black whitespace-nowrap">
            Kids
          </Link>
          <Link href="/products" className="hover:text-black whitespace-nowrap">
            Sale
          </Link>
          <Link href="/products" className="hover:text-black whitespace-nowrap">
            SNKRS
          </Link>
        </nav>

        {/* Right section (Search, Wishlist, Cart) */}
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          {/* Search Bar */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none"
            />
            <FaSearch className="absolute right-3 top-2.5 text-gray-500" />
          </div>
          <FaRegHeart className="text-gray-700 md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px]  cursor-pointer hover:text-black" />
          <Link href="/cart">
            <BiShoppingBag className="text-gray-700 md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] cursor-pointer hover:text-black" />
          </Link>{" "}
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="block md:hidden px-6 mt-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none w-full"
          />
          <FaSearch className="absolute right-3 top-2.5 text-gray-500" />
        </div>
      </div>
    </header>
  );
}
