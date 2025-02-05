// "use client"

// import React, { useState, useEffect } from "react"
// import Image from "next/image"
// import { Heart, Trash2, Plus, Minus } from "lucide-react"
// import Link from "next/link"
// import { Button } from "../components/ui/button"

// // Define the ProductDetailPage type
// type ProductDetailPage = {
//   id: number
//   productName: string
//   category: string
//   size: string
//   price: number
//   image: string
//   quantity?: number
// }

// // useCart hook
// function useCart() {
//   const [cart, setCart] = useState<ProductDetailPage[]>([])

//   useEffect(() => {
//     const savedCart = localStorage.getItem("cart")
//     if (savedCart) {
//       setCart(JSON.parse(savedCart))
//     }
//   }, [])

//   const addToCart = (product: ProductDetailPage) => {
//     setCart((prevCart) => {
//       const updatedCart = [...prevCart, { ...product, quantity: 1 }]
//       localStorage.setItem("cart", JSON.stringify(updatedCart))
//       return updatedCart
//     })
//   }

//   const removeFromCart = (productId: number) => {
//     setCart((prevCart) => {
//       const updatedCart = prevCart.filter((product) => product.id !== productId)
//       localStorage.setItem("cart", JSON.stringify(updatedCart))
//       return updatedCart
//     })
//   }

//   const updateQuantity = (productId: number, newQuantity: number) => {
//     setCart((prevCart) => {
//       const updatedCart = prevCart.map((product) =>
//         product.id === productId ? { ...product, quantity: newQuantity } : product,
//       )
//       localStorage.setItem("cart", JSON.stringify(updatedCart))
//       return updatedCart
//     })
//   }

//   const clearCart = () => {
//     setCart([])
//     localStorage.removeItem("cart")
//   }

//   return { cart, addToCart, removeFromCart, updateQuantity, clearCart }
// }

// // Cart component
// export default function Cart() {
//   const { cart, removeFromCart, updateQuantity, clearCart } = useCart()

//   const subtotal = cart.reduce((total, product) => total + product.price * (product.quantity || 1), 0)
//   const shipping = subtotal >= 14000 ? 0 : 500 // Free shipping for orders over ₹14,000
//   const total = subtotal + shipping

//   return (
//     <div className="min-h-screen bg-white flex items-center justify-center py-6 px-4 sm:px-8">
//       <div className="max-w-5xl w-full bg-white p-4 sm:p-6 space-y-8">
//         {/* Free Delivery Section */}
//         <div className="bg-gray-100 p-4 sm:p-6 rounded-lg md:w-2/3 mx-auto md:mx-0">
//           <h2 className="text-lg font-bold mb-2 text-center md:text-left">Free delivery</h2>
//           <p className="text-sm text-gray-600 mb-4 text-center md:text-left">
//             Applies to orders of ₹ 14,000.00 or more.
//           </p>
//           <a href="#" className="text-sm text-black underline block text-center md:text-left">
//             View details
//           </a>
//         </div>

//         {/* Bag Section */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {/* Bag Items */}
//           <div className="md:col-span-2 space-y-8">
//             <h2 className="text-2xl font-bold">Bag</h2>

//             {cart.map((product) => (
//               <div
//                 key={product.id}
//                 className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-8 border-b"
//               >
//                 <Image
//                   src={product.image || "/placeholder.svg"}
//                   alt={product.productName}
//                   width={120}
//                   height={120}
//                   className="rounded-md mb-4 sm:mb-0"
//                 />
//                 <div className="ml-0 sm:ml-4 flex-1 space-y-2">
//                   <h3 className="font-medium text-lg text-gray-800">{product.productName}</h3>
//                   <p className="text-gray-600 text-sm">{product.category}</p>
//                   <p className="text-gray-500 text-sm">
//                     Size: {product.size} | Quantity: {product.quantity || 1}
//                   </p>
//                   <div className="flex items-center space-x-2">
//                     <Button
//                       variant="outline"
//                       size="icon"
//                       onClick={() => updateQuantity(product.id, (product.quantity || 1) - 1)}
//                       disabled={(product.quantity || 1) <= 1}
//                     >
//                       <Minus className="h-4 w-4" />
//                     </Button>
//                     <span>{product.quantity || 1}</span>
//                     <Button
//                       variant="outline"
//                       size="icon"
//                       onClick={() => updateQuantity(product.id, (product.quantity || 1) + 1)}
//                     >
//                       <Plus className="h-4 w-4" />
//                     </Button>
//                   </div>
//                   <div className="flex mt-4">
//                     <button className="text-gray-500 hover:text-black mr-4">
//                       <Heart size={20} />
//                     </button>
//                     <button className="text-gray-500 hover:text-black" onClick={() => removeFromCart(product.id)}>
//                       <Trash2 size={20} />
//                     </button>
//                   </div>
//                 </div>
//                 <div className="text-right mt-4 sm:mt-0">
//                   <p className="font-medium text-lg">₹ {product.price * (product.quantity || 1)}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Summary Section */}
//           <div className="rounded-lg bg-gray-50 p-4 sm:p-6 space-y-6">
//             <h2 className="text-2xl font-medium">Summary</h2>
//             <div className="flex justify-between">
//               <p className="text-gray-600">Subtotal</p>
//               <p className="font-medium">₹ {subtotal}</p>
//             </div>
//             <div className="flex justify-between">
//               <p className="text-gray-600">Estimated Delivery & Handling</p>
//               <p className="font-medium">{shipping === 0 ? "Free" : `₹ ${shipping}`}</p>
//             </div>
//             <div className="flex justify-between text-xl font-medium pt-4 border-t">
//               <p>Total</p>
//               <p>₹ {total}</p>
//             </div>
//             <Link href="/Payment">
//               <Button className="w-full bg-black text-white font-medium py-4 rounded-[30px] mt-6">
//                 Proceed to Checkout
//               </Button>
//             </Link>
//             <Button variant="outline" className="w-full" onClick={clearCart}>
//               Clear Cart
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Heart, Trash2, Plus, Minus } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useAuth } from "@clerk/nextjs"
import dynamic from "next/dynamic"

// Dynamically import Clerk components (disable SSR)
const SignInButton = dynamic(() => import("@clerk/nextjs").then((mod) => mod.SignInButton), { ssr: false })
const SignedIn = dynamic(() => import("@clerk/nextjs").then((mod) => mod.SignedIn), { ssr: false })
const SignedOut = dynamic(() => import("@clerk/nextjs").then((mod) => mod.SignedOut), { ssr: false })

// Define the ProductDetailPage type
type ProductDetailPage = {
  id: number
  productName: string
  category: string
  size: string
  price: number
  image: string
  quantity?: number
}

// useCart hook
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
      const updatedCart = [...prevCart, { ...product, quantity: 1 }]
      localStorage.setItem("cart", JSON.stringify(updatedCart))
      return updatedCart
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

// Cart component
export default function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart()
  const { isLoaded, isSignedIn } = useAuth()
  const router = useRouter()

  const subtotal = cart.reduce((total, product) => total + product.price * (product.quantity || 1), 0)
  const shipping = subtotal >= 14000 ? 0 : 500 // Free shipping for orders over ₹14,000
  const total = subtotal + shipping

  const handleProceedToCheckout = () => {
    if (isLoaded && isSignedIn) {
      router.push("/Payment")
    }
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-6 px-4 sm:px-8">
      <div className="max-w-5xl w-full bg-white p-4 sm:p-6 space-y-8">
        {/* Free Delivery Section */}
        <div className="bg-gray-100 p-4 sm:p-6 rounded-lg md:w-2/3 mx-auto md:mx-0">
          <h2 className="text-lg font-bold mb-2 text-center md:text-left">Free delivery</h2>
          <p className="text-sm text-gray-600 mb-4 text-center md:text-left">
            Applies to orders of ₹ 14,000.00 or more.
          </p>
          <a href="#" className="text-sm text-black underline block text-center md:text-left">
            View details
          </a>
        </div>

        {/* Bag Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bag Items */}
          <div className="md:col-span-2 space-y-8">
            <h2 className="text-2xl font-bold">Bag</h2>

            {cart.map((product) => (
              <div
                key={product.id}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-8 border-b"
              >
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.productName}
                  width={120}
                  height={120}
                  className="rounded-md mb-4 sm:mb-0"
                />
                <div className="ml-0 sm:ml-4 flex-1 space-y-2">
                  <h3 className="font-medium text-lg text-gray-800">{product.productName}</h3>
                  <p className="text-gray-600 text-sm">{product.category}</p>
                  <p className="text-gray-500 text-sm">
                    Size: {product.size} | Quantity: {product.quantity || 1}
                  </p>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(product.id, (product.quantity || 1) - 1)}
                      disabled={(product.quantity || 1) <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span>{product.quantity || 1}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(product.id, (product.quantity || 1) + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex mt-4">
                    <button className="text-gray-500 hover:text-black mr-4">
                      <Heart size={20} />
                    </button>
                    <button className="text-gray-500 hover:text-black" onClick={() => removeFromCart(product.id)}>
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
                <div className="text-right mt-4 sm:mt-0">
                  <p className="font-medium text-lg">₹ {product.price * (product.quantity || 1)}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <div className="rounded-lg bg-gray-50 p-4 sm:p-6 space-y-6">
            <h2 className="text-2xl font-medium">Summary</h2>
            <div className="flex justify-between">
              <p className="text-gray-600">Subtotal</p>
              <p className="font-medium">₹ {subtotal}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Estimated Delivery & Handling</p>
              <p className="font-medium">{shipping === 0 ? "Free" : `₹ ${shipping}`}</p>
            </div>
            <div className="flex justify-between text-xl font-medium pt-4 border-t">
              <p>Total</p>
              <p>₹ {total}</p>
            </div>
            <SignedIn>
              <Button
                className="w-full bg-black text-white font-medium py-4 rounded-[30px] mt-6"
                onClick={handleProceedToCheckout}
              >
                Proceed to Checkout
              </Button>
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <Button className="w-full bg-black text-white font-medium py-4 rounded-[30px] mt-6">
                  Sign in to Checkout
                </Button>
              </SignInButton>
            </SignedOut>
            <Button variant="outline" className="w-full" onClick={clearCart}>
              Clear Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

