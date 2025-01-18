'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../../types/product';

interface ProductCardSidebarProps {
  product: Product;
}

export function ProductCardSidebar({ product }: ProductCardSidebarProps) {
  return (
    <Link href={`/detail/${product._id}`}>
      <div
        key={product._id}
        className="flex flex-col text-sm sm:text-base leading-relaxed max-w-[150px] sm:max-w-[250px] lg:max-w-[300px]"
      >
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name || "Product Image"}
          width={300}
          height={300}
          className="w-full h-auto object-cover"
        />
        <div className="flex flex-wrap gap-4 sm:gap-10 items-start justify-between mt-3 bg-white">
          <div className="flex flex-col text-xs sm:text-sm pr-1">
            <div className="font-medium text-neutral-900">{product.productName}</div>
            <div className="text-neutral-500">{product.description}</div>
          </div>
          <div className="self-start font-medium text-right text-neutral-900">
            ₹{product.price.toFixed(2)}
          </div>
        </div>
      </div>
    </Link>
  );
}

