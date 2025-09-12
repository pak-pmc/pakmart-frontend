"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Loader2, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/contexts/cart-context"
import { useState } from "react"

const products = [
  {
    id: 1,
    name: "Grundfos Submersible Water Pump",
    price: 459.99,
    originalPrice: 529.99,
    rating: 4.8,
    reviews: 124,
    category: "Water Pumps",
    image: "/submersible-water-pump.png",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Kohler Kitchen Sink Faucet",
    price: 189.99,
    originalPrice: null,
    rating: 4.6,
    reviews: 89,
    category: "Taps & Faucets",
    image: "/modern-kitchen-faucet.png",
    badge: null,
  },
  {
    id: 3,
    name: "Stainless Steel Undermount Sink",
    price: 299.99,
    originalPrice: 349.99,
    rating: 4.7,
    reviews: 156,
    category: "Sinks & Basins",
    image: "/stainless-steel-sink.png",
    badge: "Sale",
  },
  {
    id: 4,
    name: "PVC Pipe Fitting Set",
    price: 24.99,
    originalPrice: null,
    rating: 4.4,
    reviews: 67,
    category: "Pipes & Fittings",
    image: "/pvc-pipe-fittings.png",
    badge: null,
  },
  {
    id: 5,
    name: "Professional Drill Set",
    price: 149.99,
    originalPrice: 199.99,
    rating: 4.9,
    reviews: 203,
    category: "Tools & Hardware",
    image: "/professional-drill-set.png",
    badge: "New",
  },
  {
    id: 6,
    name: "LED Work Light 50W",
    price: 79.99,
    originalPrice: null,
    rating: 4.5,
    reviews: 91,
    category: "Electrical",
    image: "/led-work-light.png",
    badge: null,
  },
  {
    id: 7,
    name: "Centrifugal Water Pump",
    price: 329.99,
    originalPrice: 379.99,
    rating: 4.6,
    reviews: 78,
    category: "Water Pumps",
    image: "/centrifugal-water-pump.png",
    badge: "Sale",
  },
  {
    id: 8,
    name: "Bathroom Vanity Faucet",
    price: 129.99,
    originalPrice: null,
    rating: 4.3,
    reviews: 45,
    category: "Taps & Faucets",
    image: "/bathroom-vanity-faucet.png",
    badge: null,
  },
  {
    id: 9,
    name: "Copper Pipe Bundle",
    price: 89.99,
    originalPrice: null,
    rating: 4.7,
    reviews: 112,
    category: "Pipes & Fittings",
    image: "/copper-pipes.png",
    badge: null,
  },
]

export function ProductsGrid() {
  const { addItem } = useCart()
  const [isLoadingMore, setIsLoadingMore] = useState(false)

  const handleAddToCart = (product: (typeof products)[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    })
  }

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
          <Card key={product.id} className="group hover:shadow-lg transition-shadow">
            <CardHeader className="p-0">
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.badge && (
                  <Badge
                    className="absolute top-2 left-2"
                    variant={product.badge === "Sale" ? "destructive" : "secondary"}
                  >
                    {product.badge}
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">{product.category}</p>
                <h3 className="font-semibold text-foreground line-clamp-2">{product.name}</h3>

                {/* Rating */}
                <div className="flex items-center space-x-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-foreground">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                  )}
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <div className="flex flex-col gap-2 w-full sm:flex-row">
                <Link href={`/products/${product.id}`} className="flex-1">
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                </Link>
                <Button className="flex-1" size="sm" onClick={() => handleAddToCart(product)}>
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </CardFooter>
          </Card>
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
