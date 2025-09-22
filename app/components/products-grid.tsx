"use client"

import { IProduct } from "@/src/interfaces/IProduct"
import { Product } from "@/components/product"
import {IMeta} from "@/src/interfaces/IMeta";

export function ProductsGrid({ products, meta }: { products: IProduct[],  meta: IMeta } ) {

  return (
    <div className="space-y-6">
      {/* Results Header */}
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground">Showing {products.length} of {meta.total} products</p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Product key={product.externalId} product={product} />
        ))}
      </div>

      {/* Load More */}

    </div>
  )
}
