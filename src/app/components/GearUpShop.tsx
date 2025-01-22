"use client"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ProductCard } from "./ProductCard"
import React, { useState, useEffect } from "react"
import { gearUpQuery } from "../../sanity/lib/queries"
import { client } from "../../sanity/lib/client"

interface Product {
  id: number
  productName: string
  category: string
  price: number
  colors: string[]
  status: string
  image: string
  description: string
}

export function GearUpShop() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await client.fetch(gearUpQuery)
        setProducts(fetchedProducts)
        setLoading(false)
      } catch (err) {
        console.error("Error fetching products:", err)
        setError("Failed to fetch products. Please try again later.")
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const [currentIndexMen, setCurrentIndexMen] = useState(0)
  const [currentIndexWomen, setCurrentIndexWomen] = useState(0)

  const menProducts = products.filter((product) => product.category === "Men's Shoes")
  const womenProducts = products.filter((product) => product.category === "Women's Shoes")

  const handlePrev = (category: "Men" | "Women") => {
    if (category === "Men") {
      setCurrentIndexMen((prev) => (prev > 0 ? prev - 1 : 0))
    } else {
      setCurrentIndexWomen((prev) => (prev > 0 ? prev - 1 : 0))
    }
  }

  const handleNext = (category: "Men" | "Women") => {
    if (category === "Men") {
      setCurrentIndexMen((prev) => (prev < menProducts.length - 2 ? prev + 1 : prev))
    } else {
      setCurrentIndexWomen((prev) => (prev < womenProducts.length - 2 ? prev + 1 : prev))
    }
  }

  if (loading) return <div className="text-center py-8">Loading...</div>
  if (error) return <div className="text-center py-8 text-red-500">{error}</div>

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Gear Up.</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Shop Men&apos;s</h2>
            <div className="flex space-x-2">
              <ChevronLeft
                className={`w-6 h-6 cursor-pointer ${currentIndexMen === 0 ? "text-gray-300" : "text-gray-600"}`}
                onClick={() => handlePrev("Men")}
              />
              <ChevronRight
                className={`w-6 h-6 cursor-pointer ${currentIndexMen >= menProducts.length - 2 ? "text-gray-300" : "text-gray-600"}`}
                onClick={() => handleNext("Men")}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {menProducts.slice(currentIndexMen, currentIndexMen + 2).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Shop Women&apos;s</h2>
            <div className="flex space-x-2">
              <ChevronLeft
                className={`w-6 h-6 cursor-pointer ${currentIndexWomen === 0 ? "text-gray-300" : "text-gray-600"}`}
                onClick={() => handlePrev("Women")}
              />
              <ChevronRight
                className={`w-6 h-6 cursor-pointer ${currentIndexWomen >= womenProducts.length - 2 ? "text-gray-300" : "text-gray-600"}`}
                onClick={() => handleNext("Women")}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {womenProducts.slice(currentIndexWomen, currentIndexWomen + 2).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

