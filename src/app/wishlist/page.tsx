"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { FaTrash, FaCartPlus } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

type ProductDetailPage = {
  quantity: number
  id: number
  productName: string
  description: string
  price: number
  image: string
  colors?: string[]
  size: string
  inventory: number
  category: string
}

function useWishlist() {
  const [wishlist, setWishlist] = useState<ProductDetailPage[]>([])

  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist")
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist))
    }
  }, [])

  const removeFromWishlist = (productId: number) => {
    setWishlist((prevWishlist) => {
      const updatedWishlist = prevWishlist.filter((product) => product.id !== productId)
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist))
      return updatedWishlist
    })
  }

  return { wishlist, removeFromWishlist }
}

function useCart() {
  const [cart, setCart] = useState<ProductDetailPage[]>([])

  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  const addToCart = (product: ProductDetailPage) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id)
      if (existingProduct) {
        // If the product is already in the cart, increase its quantity
        const updatedCart = prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item,
        )
        localStorage.setItem("cart", JSON.stringify(updatedCart))
        return updatedCart
      } else {
        // If it's a new product, add it to the cart with quantity 1
        const updatedCart = [...prevCart, { ...product, quantity: 1 }]
        localStorage.setItem("cart", JSON.stringify(updatedCart))
        return updatedCart
      }
    })
  }

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((product) => product.id !== productId)
      localStorage.setItem("cart", JSON.stringify(updatedCart))
      return updatedCart
    })
  }

  const updateQuantity = (productId: number, newQuantity: number) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((product) =>
        product.id === productId ? { ...product, quantity: newQuantity } : product,
      )
      localStorage.setItem("cart", JSON.stringify(updatedCart))
      return updatedCart
    })
  }

  const clearCart = () => {
    setCart([])
    localStorage.removeItem("cart")
  }

  return { cart, addToCart, removeFromCart, updateQuantity, clearCart }
}

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist()
  const { addToCart } = useCart()

  const handleRemoveFromWishlist = (productId: number) => {
    removeFromWishlist(productId)
  }

  const handleAddToCart = (product: ProductDetailPage) => {
    addToCart(product)
    removeFromWishlist(product.id)
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">My Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="grid grid-cols-5 gap-4 p-4 font-semibold border-b">
            <div>Product</div>
            <div>Price</div>
            <div>Stock Status</div>
            <div>Action</div>
            <div>Remove</div>
          </div>
          {wishlist.map((product) => (
            <div key={product.id} className="grid grid-cols-5 gap-4 p-4 items-center border-b">
              <div className="flex items-center space-x-4">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.productName}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <span>{product.productName}</span>
              </div>
              <div>₹{product.price}</div>
              <div>
                {product.inventory > 0 ? (
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    In Stock
                  </span>
                ) : (
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Out of Stock
                  </span>
                )}
              </div>
              <div>
                {product.inventory > 0 ? (
                  <Button size="sm" onClick={() => handleAddToCart(product)}>
                    <FaCartPlus className="mr-2" />
                    Add to Cart
                  </Button>
                ) : (
                  <Link href="/contact">
                    <Button size="sm" variant="outline">
                      Contact Us
                    </Button>
                  </Link>
                )}
              </div>
              <div>
                <Button size="sm" variant="ghost" onClick={() => handleRemoveFromWishlist(product.id)}>
                  <FaTrash className="text-red-500" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
