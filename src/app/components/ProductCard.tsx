"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"

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

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${encodeURIComponent(product.id)}`}>
      <div className="flex flex-col text-sm sm:text-base leading-relaxed w-full">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.productName}
            width={300}
            height={300}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="mt-4 flex flex-col">
          <h3 className="text-sm font-medium text-gray-900">{product.productName}</h3>
          <p className="mt-1 text-sm font-medium text-gray-900">${product.price.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  )
}



