"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart, Eye } from "lucide-react"
import Link from "next/link"
import { useCart } from "@/contexts/cart-context"
import { IProduct } from "@/src/interfaces/IProduct"
import {formatAmount} from "@/src/utils/helpers";

interface ProductProps {
  product: IProduct
}

export function Product({ product }: ProductProps) {
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem({
      externalId: product.externalId,
      name: product.name,
      price: product.discountedPrice ?? product.unitPrice,
      image: product.images?.[0]?.fileUrl || "",
    })
  }

  return (
    <Card key={product.externalId} className="group hover:shadow-xl transition-all duration-300">
      <CardContent className="p-0">
        <div className="relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.images?.[0]?.fileUrl || ""}
            alt={product.name}
            className="w-full h-50 object-cover rounded-t-lg"
          />
          {/*<Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">*/}
          {/*  /!* Reserved for future badges if available *!/*/}
          {/*</Badge>*/}
        </div>

        <div className="p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4">
          <div>
            <h3 className="text-foreground group-hover:text-primary transition-colors line-clamp-2">
              {product.name}
            </h3>

            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center">
                {product.rating && (
                  <>
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium ml-1">{product.rating}</span>
                  </>
                )}
              </div>
              {product.reviewCount && (
                <span className="text-sm text-muted-foreground">({product.reviewCount} reviews)</span>
              )}
            </div>
          </div>

          {Array.isArray(product.specifications) && product.specifications.length > 0 && (
            <div className="space-y-2">
              {product.specifications.slice(0, 3).map((feature, index) => (
                <div key={index} className="text-sm text-muted-foreground">
                  • {feature}
                </div>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-1">
                <span className="text-md sm:text-1xl font-bold text-primary">
                    {formatAmount(product.discountedPrice ?? product.unitPrice)}
                </span>
                {product.unitPrice && product.discountedPrice && product.unitPrice !== product.discountedPrice && (
                  <span className="text-sm text-muted-foreground line-through">GHS {product.unitPrice}</span>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 pt-2">
            <Link href={`/products/${product.externalId}`} className="w-full">
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                <Eye className="h-4 w-4 mr-2" />
                View Details
              </Button>
            </Link>
            <Button className="w-full bg-primary hover:bg-primary/90" size="sm" onClick={handleAddToCart}>
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
