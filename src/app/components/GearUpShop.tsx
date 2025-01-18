import { ChevronLeft, ChevronRight } from 'lucide-react'
import { products } from './data/detail'
import { ProductCard } from '../components/ProductCard'

export function GearUpShop() {
  // Filter out the best products (best1, best2, best3) for the Gear Up section
  const gearUpProducts = products.filter(product => [4,5,6,7].includes(Number(product.id))); // Cast to number


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Gear Up.</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Shop Men&apos;s</h2>
            <div className="flex space-x-2">
              <ChevronLeft className="w-6 h-6 cursor-pointer" />
              <ChevronRight className="w-6 h-6 cursor-pointer" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {gearUpProducts.filter(product => product.category === 'men').map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Shop Women&apos;s</h2>
            <div className="flex space-x-2">
              <ChevronLeft className="w-6 h-6 cursor-pointer" />
              <ChevronRight className="w-6 h-6 cursor-pointer" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {gearUpProducts.filter(product => product.category === 'women').map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
