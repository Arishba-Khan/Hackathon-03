"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// Define the ProductDetailPage type
type ProductDetailPage = {
  id: number;
  productName: string;
  price: number;
  image: string;
  size: string;
  quantity?: number;
};

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

const Order = () => {
  const [showPayment, setShowPayment] = useState(false);
  const { cart } = useCart();

  const subtotal = cart.reduce(
    (total, product) => total + product.price * (product.quantity || 1),
    0
  );
  const shipping = subtotal >= 14000 ? 0 : 500; // Free shipping for orders over ₹14,000
  const total = subtotal + shipping;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full lg:w-[310px] flex-shrink-0">
        <div className="p-4 rounded-lg border border-gray-200 bg-white shadow">
          <h1 className="text-lg font-medium mb-5">Order Summary</h1>
          <div className="border-b pb-4 mb-4">
            <div className="flex justify-between mb-4">
              <span>Subtotal</span>
              <span>₹ {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery</span>
              <span>
                {shipping === 0 ? "Free" : `₹ ${shipping.toFixed(2)}`}
              </span>
            </div>
          </div>
          <div className="border-b pb-4 mb-4">
            <div className="flex justify-between">
              <span className="font-bold text-black">Total</span>
              <span className="font-bold text-black">₹ {total.toFixed(2)}</span>
            </div>
          </div>

          <div>
            <p className="font-medium mb-4">
              Arrives Mon, 27 Mar - Wed, 12 Apr
            </p>
            {cart.map((product) => (
              <div key={product.id} className="flex mb-4">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.productName}
                  width={80}
                  height={80}
                  className="object-cover mr-4"
                />
                <div className="flex-grow">
                  <p className="text-sm font-medium">{product.productName}</p>
                  <p className="text-sm">
                    Qty {product.quantity || 1} | Size {product.size}
                  </p>
                  <p className="text-sm">
                    ₹ {(product.price * (product.quantity || 1)).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
