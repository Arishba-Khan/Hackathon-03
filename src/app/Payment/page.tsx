"use client"

import { useState, useEffect } from "react"
import Order from "../components/OrderPage"
import StripePayment from "../components/StripePayment"
import { ProductDetailPage } from "../products/[id]/page";

// useCart hook
function useCart() {
  const [cart, setCart] = useState<ProductDetailPage[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const addToCart = (product: ProductDetailPage) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        const updatedCart = prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      } else {
        const updatedCart = [...prevCart, { ...product, quantity: 1 }];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter(
        (product) => product.id !== productId
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((product) =>
        product.id === productId
          ? { ...product, quantity: newQuantity }
          : product
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return { cart, addToCart, removeFromCart, updateQuantity, clearCart };
}

export default function CheckoutAndPaymentLayout() {

  const { cart } = useCart()
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const subtotal = cart.reduce((total: number, product: { price: number; quantity: any }) => total + product.price * (product.quantity || 1), 0)
    const shipping = subtotal >= 14000 ? 0 : 500
    setTotal(subtotal + shipping)
  }, [cart])

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <div className="w-full md:w-1/2 p-4 md:p-8">
        <Order />
      </div>
      <div className="w-full md:w-1/2 p-4 md:p-8">
        <StripePayment amount={total} />
      </div>
    </div>
  )
}

