"use client"

import Image from "next/image"
import Link from "next/link"
import { air } from "@/sanity/lib/queries"
import { client } from "@/sanity/lib/client"
import type { Product } from "@/types/product"
import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function AirProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [visibleCount, setVisibleCount] = useState(3)
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts: Product[] = await client.fetch(air)
      setProducts(fetchedProducts)
    }

    fetchProducts()
  }, [])

  const handleLoadMore = () => {
    setVisibleCount(products.length)
  }

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <section className="p-5 sm:p-10">
      <div className="flex justify-center items-center flex-col p-10">
        <p className="text-sm font-medium">First Look</p>
        <h2 className="text-4xl sm:text-5xl font-bold uppercase text-center mt-2">Nike Air Max Pulse</h2>
        <p className="text-sm sm:text-base leading-relaxed w-full sm:w-[80%] md:w-[60%] pt-6 pb-4 text-center">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse —designed to push you past your
          limits and help you go to the max.
        </p>
        <div className="mt-6">
          <Button
            onClick={handleLoadMore}
            className="bg-black text-white font-semibold py-2 px-6 rounded-full hover:bg-gray-800 transition duration-300 ease-in-out"
          >
            Shop Air Max
          </Button>
        </div>
      </div>
    </section>
      <section className="flex flex-wrap justify-between items-center py-6 px-8 sm:px-12">
        <h2 className="font-bold text-2xl sm:text-3xl text-gray-800">Best of Air Max</h2>
      </section>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 sm:px-12 pb-12"
      >
        {products.slice(0, visibleCount).map((product) => (
          <Link key={product.id} href={`/products/${encodeURIComponent(product.id)}`}>
            <motion.div
              className="group relative bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl"
              onMouseEnter={() => setHoveredProduct(product.id.toString())}
              onMouseLeave={() => setHoveredProduct(null)}
              layoutId={`product-${product.id}`}
            >
              <div className="relative aspect-w-1 aspect-h-1">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.productName}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button className="bg-white text-gray-800 font-semibold py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    View Product
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800 mb-1">{product.productName}</h3>
                <p className="text-sm text-gray-600 mb-2">{product.stockStatus}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg text-gray-900">${product.price}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-500 hover:text-red-500 transition-colors duration-300"
                  >
                    <Heart className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              {hoveredProduct === product.id.toString() && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600"
                  layoutId="underline"
                />
              )}
            </motion.div>
          </Link>
        ))}
      </motion.section>
    </div>
  )
}

