"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import type { Product } from "../../types/product"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProductCardSidebarProps {
  product: Product
}

export function ProductCardSidebar({ product }: ProductCardSidebarProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={`/products/${encodeURIComponent(product.id)}`}>
      <motion.div
        className="group relative bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl max-w-[150px] sm:max-w-[250px] lg:max-w-[300px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        layoutId={`product-${product.id}`}
      >
        <div className="relative aspect-w-1 aspect-h-1">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.productName}
            width={300}
            height={300}
            className="w-full h-auto object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button className="bg-white text-gray-800 font-semibold py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
              View Product
            </Button>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-sm sm:text-base text-gray-800 mb-1">{product.productName}</h3>
          <p className="text-xs sm:text-sm text-gray-600 mb-2">{product.category}</p>
          <div className="flex justify-between items-center">
            <span className="font-bold text-sm sm:text-base text-gray-900">₹{product.price.toFixed(2)}</span>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-500 hover:text-red-500 transition-colors duration-300"
            >
              <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>
        {isHovered && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600"
            layoutId="underline"
          />
        )}
      </motion.div>
    </Link>
  )
}


