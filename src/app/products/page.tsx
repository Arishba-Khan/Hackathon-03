import React from "react"
import { allProducts } from "../../sanity/lib/queries"
import { ProductCardSidebar } from "../components/ProductCardSidebar"
import { client } from "../../sanity/lib/client"
import type { Product } from "../../types/product"

export default async function ProductPage() {
  const products: Product[] = await client.fetch(allProducts)

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="hidden md:block w-1/5 p-4 space-y-8">
        {/* Sidebar Title */}
        <h2 className="text-xl font-medium text-slate-800 mb-4">New({products.length})</h2>

        {/* Categories Section */}
        <div>
          <ul className="space-y-3">
            {[
              "Shoes",
              "Sports Bras",
              "Tops & T-Shirts",
              "Hoodies & Sweatshirts",
              "Jackets",
              "Trousers & Tights",
              "Shorts",
              "Tracksuits",
              "Jumpsuits & Rompers",
              "Skirts & Dresses",
              "Socks",
              "Accessories & Equipment",
            ].map((item, index) => (
              <li
                key={index}
                className="text-slate-800 font-medium leading-tight hover:underline cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Gender Selection Section */}
        <div className="relative border-t border-b border-slate-200 py-4">
          <h3 className="text-lg font-medium mb-3">Gender</h3>
          <div className="space-y-2">
            {["Men", "Women", "Unisex"].map((gender, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="checkbox"
                  id={gender.toLowerCase()}
                  className="form-checkbox h-4 w-4 text-slate-800 bg-slate-200 border-gray-300 rounded-sm focus:ring-slate-500"
                />
                <label
                  htmlFor={gender.toLowerCase()}
                  className="ml-2 text-slate-800 font-medium cursor-pointer"
                >
                  {gender}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Kids Section */}
        <div className="border-b border-slate-200 py-4">
          <h3 className="text-lg font-medium mb-3">Kids</h3>
          <div className="space-y-2">
            {["Girls", "Boys"].map((kid, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="checkbox"
                  id={kid.toLowerCase()}
                  className="form-checkbox h-4 w-4 text-slate-800 bg-slate-200 border-gray-300 rounded-sm focus:ring-slate-500"
                />
                <label
                  htmlFor={kid.toLowerCase()}
                  className="ml-2 text-slate-800 font-medium cursor-pointer"
                >
                  {kid}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Shop By Price Section */}
        <div className="border-b border-slate-200 py-4">
          <h3 className="text-lg font-medium mb-3">Shop By Price</h3>
          <div className="space-y-2">
            {[
              "Under ₹2500.00",
              "₹2501.00 - ₹5000.00",
            ].map((price, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="checkbox"
                  id={`price-${index}`}
                  className="form-checkbox h-4 w-4 text-slate-800 bg-slate-200 border-gray-300 rounded-sm focus:ring-slate-500"
                />
                <label
                  htmlFor={`price-${index}`}
                  className="ml-2 text-slate-800 font-medium cursor-pointer"
                >
                  {price}
                </label>
              </div>
            ))}
          </div>
        </div>
      </aside>
      {/* Products Section */}
      <main className="w-full md:w-3/4 p-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
        {products.map((product: Product) => (
          <ProductCardSidebar key={product.id} product={product} />
        ))}
      </main>
    </div>
  )
}

