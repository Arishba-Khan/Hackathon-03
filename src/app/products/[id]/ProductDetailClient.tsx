"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { FaCartPlus, FaHeart, FaChevronDown } from "react-icons/fa"
import { Button } from "../../components/ui/button"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

// Define the ProductDetailPage type
type ProductDetailPage = {
  quantity: number
  id: number
  productName: string
  description: string
  price: number
  image: string
  colors?: string[]
  color?: string
  size: string
  inventory: number
  category: string
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
    
  
  // New useWishlist hook
  function useWishlist() {
    const [wishlist, setWishlist] = useState<ProductDetailPage[]>([])
  
    useEffect(() => {
      const savedWishlist = localStorage.getItem("wishlist")
      if (savedWishlist) {
        setWishlist(JSON.parse(savedWishlist))
      }
    }, [])
  
    const addToWishlist = (product: ProductDetailPage) => {
      setWishlist((prevWishlist) => {
        const updatedWishlist = [...prevWishlist, product]
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist))
        return updatedWishlist
      })
    }
  
    const removeFromWishlist = (productId: number) => {
      setWishlist((prevWishlist) => {
        const updatedWishlist = prevWishlist.filter((product) => product.id !== productId)
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist))
        return updatedWishlist
      })
    }
  
    const isInWishlist = (productId: number) => {
      return wishlist.some((product) => product.id === productId)
    }
  
    return { wishlist, addToWishlist, removeFromWishlist, isInWishlist }
  }
  
export default function ProductDetailClient({ product }: { product: ProductDetailPage }) {
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const [addedToCart, setAddedToCart] = useState(false)
  const [inWishlist, setInWishlist] = useState(false)
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || "")
  const [selectedSize, setSelectedSize] = useState(product.size)
  const [showDescription, setShowDescription] = useState(false)

  useEffect(() => {
    setInWishlist(isInWishlist(product.id))
  }, [product.id, isInWishlist])

  const handleAddToCart = () => {
    addToCart({ ...product, color: selectedColor, size: selectedSize })
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  const handleWishlistToggle = () => {
    if (inWishlist) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
    setInWishlist(!inWishlist)
  }

  return (
    <div className="flex flex-col lg:flex-row justify-between p-4 sm:p-6 lg:p-10 max-w-7xl mx-auto">
      <motion.div
        className="lg:w-1/2 mb-6 lg:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.productName}
          width={653}
          height={653}
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </motion.div>

      <motion.div
        className="lg:w-1/2 lg:pl-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">{product.productName}</h2>
            <Button
              variant="ghost"
              size="icon"
              className={`text-2xl ${inWishlist ? "text-red-500" : "text-gray-400"} hover:text-red-500 transition-colors`}
              onClick={handleWishlistToggle}
            >
              <FaHeart />
            </Button>
          </div>
          <p className="text-2xl font-bold text-gray-700">₹ {product.price}</p>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Color</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors?.map((color, index) => (
                  <button
                    key={index}
                    className={`w-8 h-8 rounded-full border-2 ${selectedColor === color ? "border-black" : "border-gray-300"}`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Size</h3>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value={product.size}>{product.size}</option>
                {/* Add more size options if available */}
              </select>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button className="flex-1 py-6 text-lg" onClick={handleAddToCart} disabled={addedToCart}>
              <FaCartPlus className="mr-2" />
              {addedToCart ? "Added to Cart" : "Add To Cart"}
            </Button>
            <Button variant="outline" className="py-6">
              Buy Now
            </Button>
          </div>

          <AnimatePresence>
            {addedToCart && (
              <motion.p
                className="text-green-600 mt-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                Product added to cart successfully!
              </motion.p>
            )}
          </AnimatePresence>

          <div className="mt-6">
            <button
              className="flex items-center justify-between w-full text-left"
              onClick={() => setShowDescription(!showDescription)}
            >
              <span className="text-lg font-semibold">Product Description</span>
              <FaChevronDown className={`transform transition-transform ${showDescription ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {showDescription && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="mt-2 text-gray-600">{product.description}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-4 p-4 bg-gray-100 rounded-md">
            <p className="text-sm text-gray-600">In stock: {product.inventory}</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

