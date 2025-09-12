"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/contexts/cart-context"

const getProduct = (id: string) => {
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
      description:
        "Professional-grade submersible water pump designed for heavy-duty applications. Features corrosion-resistant materials and energy-efficient motor technology.",
      specifications: {
        "Motor Power": "1.5 HP",
        "Flow Rate": "3500 GPH",
        "Max Head": "120 ft",
        "Inlet Size": "2 inches",
        Material: "Cast Iron with Stainless Steel",
        Warranty: "3 Years",
      },
      features: [
        "Corrosion-resistant cast iron construction",
        "Energy-efficient motor design",
        "Thermal overload protection",
        "Easy installation and maintenance",
        "Suitable for clean water applications",
      ],
    },
    {
      id: 2,
      name: "Centrifugal Water Pump",
      price: 329.99,
      originalPrice: 379.99,
      rating: 4.6,
      reviews: 78,
      category: "Water Pumps",
      image: "/centrifugal-water-pump.png",
      badge: "Sale",
      description:
        "High-performance centrifugal water pump ideal for irrigation, drainage, and general water transfer applications. Built with durable materials for long-lasting performance.",
      specifications: {
        "Motor Power": "1 HP",
        "Flow Rate": "2800 GPH",
        "Max Head": "95 ft",
        "Inlet Size": "1.5 inches",
        Material: "Stainless Steel Impeller",
        Warranty: "2 Years",
      },
      features: [
        "Stainless steel impeller for durability",
        "Self-priming design",
        "Low maintenance requirements",
        "Compact and lightweight",
        "Suitable for various water transfer needs",
      ],
    },
  ]

  return products.find((p) => p.id === Number.parseInt(id))
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = getProduct(params.id)
  const { addItem } = useCart()

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link href="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-foreground">
            Products
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-96 object-cover rounded-lg"
              />
              {product.badge && (
                <Badge
                  className="absolute top-4 left-4"
                  variant={product.badge === "Sale" ? "destructive" : "secondary"}
                >
                  {product.badge}
                </Badge>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
              <h1 className="text-3xl font-bold text-foreground mb-4">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium">{product.rating}</span>
                <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-3xl font-bold text-primary">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">${product.originalPrice}</span>
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-muted-foreground">{product.description}</p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <Button size="lg" className="flex-1" onClick={handleAddToCart}>
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              <Button variant="outline" size="lg">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            {/* Shipping Info */}
            <Card>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Truck className="h-5 w-5 text-primary" />
                    <span className="text-sm">Free shipping on orders over $100</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-primary" />
                    <span className="text-sm">{product.specifications.Warranty} manufacturer warranty</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <RotateCcw className="h-5 w-5 text-primary" />
                    <span className="text-sm">30-day return policy</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Specifications</h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2">
                    <span className="font-medium">{key}:</span>
                    <span className="text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
