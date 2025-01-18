"use client";

import React, { useState } from "react";
import Image from "next/image";

const Order = () => {
  const [pan, setPan] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="container mx-auto px-[100px] py-6">
      <div className="flex flex-col lg:flex-row justify-between lg:gap-[120px] max-w-[1380px] mx-auto">
        {/* Left Section */}
        <div className="w-full lg:w-[430px] flex-shrink-0 mb-8 lg:mb-0">
          {/* Order Details */}
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-5">
              How would you like to get your order?
            </h2>
            <p className="text-sm mb-4">
              Customs regulation for India requires a copy of the recipient's
              KYC. The address on the KYC needs to match the shipping address.
              Our courier will contact you via SMS/email to obtain a copy of
              your KYC. The KYC will be stored securely and used solely for the
              purpose of clearing customs (including sharing it with customs
              officials) for all orders and returns. If your KYC does not match
              your shipping address, please click the link for more information.{" "}
              <a href="#" className="text-blue-600 underline">
                Learn More
              </a>
            </p>
            <input
              type="text"
              placeholder="Deliver it"
              className="w-full h-[55px] px-4 border border-gray-300 rounded-md"
            />
          </div>

          {/* Address Form */}
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-5">
              Enter your name and address:
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full h-[55px] px-4 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full h-[55px] px-4 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Address Line 1"
                className="w-full h-[55px] px-4 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Address Line 2"
                className="w-full h-[55px] px-4 border border-gray-300 rounded-md"
              />
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Postal Code"
                  className="w-1/2 h-[55px] px-4 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Locality"
                  className="w-1/2 h-[55px] px-4 border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex gap-4">
                <select className="w-1/2 h-[55px] px-4 border border-gray-300 rounded-md">
                  <option>State/Territory</option>
                </select>
                <select className="w-1/2 h-[55px] px-4 border border-gray-300 rounded-md">
                  <option>India</option>
                </select>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-5">
              What's your contact information?
            </h2>
            <input
              type="email"
              placeholder="Email"
              className="w-full h-[55px] px-4 border border-gray-300 rounded-md mb-4"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full h-[55px] px-4 border border-gray-300 rounded-md"
            />
          </div>

          {/* PAN Information */}
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-5">What's your PAN?</h2>
            <input
              type="text"
              placeholder="PAN"
              value={pan}
              onChange={(e) => setPan(e.target.value)}
              className="w-full h-[55px] px-4 border border-gray-300 rounded-md mb-2"
            />
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                className="mr-2"
              />
              <label>Save PAN details to profile</label>
            </div>
            <button
              className="w-full h-[55px] bg-[#d9dada] text-[#515050] rounded-3xl font-medium"
              onClick={() => alert("Continue clicked!")}
            >
              Continue
            </button>
            <div className="space-y-4 mt-8 w-full">
              <p className="border-b-[1.5px] border-[#d1d2d2] pb-4 text-black font-medium">
                Delivery
              </p>
              <p className="border-b-[1.5px] border-[#d1d2d2] pb-4 text-[#727272] font-medium">
                Shipping
              </p>
              <p className="border-b-[1.5px] border-[#d1d2d2] pb-4 text-[#727272] font-medium">
                Billing
              </p>
              <p className="border-b-[1.5px] border-[#d1d2d2] pb-4 text-[#727272] font-medium">
                Payment
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[310px] flex-shrink-0">
          <div className="p-4 rounded-lg ">
            <h1 className="text-lg font-medium mb-5">Order Summary</h1>
            <div className="border-b pb-4 mb-4">
              <div className="flex justify-between mb-4">
                <span>Subtotal</span>
                <span>₹ 20,890.00</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery</span>
                <span>Free</span>
              </div>
            </div>
            <div className="border-b pb-4">
              <div className="flex justify-between">
                <span className="font-bold text-black">Total</span>
                <span className="font-bold text-black">₹ 20,890.00</span>
              </div>
            </div>

            <div>
              <p className="font-medium mb-4">
                Arrives Mon, 27 Mar - Wed, 12 Apr
              </p>
              <div className="flex mb-4">
                <Image
                  src="/product/c1.jpg"
                  alt="Product Image"
                  width={208}
                  height={208}
                  className="object-cover mr-4"
                />
                <div className="max-w-[80px]">
                  <p className="text-sm font-medium">
                    Nike Dri-FIT ADV TechKnit Ultra
                  </p>
                  <p className="text-sm">Qty 1 | Size L</p>
                  <p className="text-sm">₹ 3,895.00</p>
                </div>
              </div>
              <div className="flex">
                <Image
                  src="/product/c2.jpg"
                  alt="Product Image"
                  width={208}
                  height={208}
                  className="object-cover mr-4"
                />
                <div className="max-w-[80px]">
                  <p className="text-sm font-medium">Nike Air Max 97 SE</p>
                  <p className="text-sm">Qty 1 | Size UK 8</p>
                  <p className="text-sm">₹ 16,995.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
