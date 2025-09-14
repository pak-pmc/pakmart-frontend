"use client"

import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { useState } from "react"
import { IProduct } from "@/src/interfaces/IProduct"
import { Product } from "@/components/product"

export function ProductsGrid({ products }: { products: IProduct[] }) {
  const [isLoadingMore, setIsLoadingMore] = useState(false)

  const handleLoadMore = async () => {
    setIsLoadingMore(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      console.log("[v0] Load more products API call completed")
    } catch (error) {
      console.error("[v0] Error loading more products:", error)
    } finally {
      setIsLoadingMore(false)
    }
  }

  return (
    <div className="space-y-6">
      {/* Results Header */}
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground">Showing {products.length} of 247 products</p>
        <select className="border border-border rounded-md px-3 py-2 text-sm bg-background">
          <option>Sort by: Featured</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Customer Rating</option>
          <option>Newest First</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Product key={product.externalId} product={product} />
        ))}
      </div>

      {/* Load More */}
      <div className="text-center pt-8">
        <Button variant="outline" size="lg" onClick={handleLoadMore} disabled={isLoadingMore}>
          {isLoadingMore ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Loading More Products...
            </>
          ) : (
            "Load More Products"
          )}
        </Button>
      </div>
    </div>
  )
}
