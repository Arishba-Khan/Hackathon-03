
import React from "react"
import { client } from "../../../sanity/lib/client"
import { prodetail } from "../../../sanity/lib/queries"
import ProductDetailClient from "../[id]/ProductDetailClient"

export interface ProductDetailPage {
  quantity: number
  id: number
  productName: string
  category: string
  price: number
  inventory: number
  colors: string[]
  stockStatus: string
  size: string
  image: string
  description: string
}
export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // Resolve `params` from the promise

  const product: ProductDetailPage | null = await client.fetch(prodetail(id), { id });

  if (!product) {
    return <div>Loading...</div>;
  }

  return <ProductDetailClient product={product} />;
}
