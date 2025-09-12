"use client"


import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wrench, Droplets, Hammer, Zap } from "lucide-react"
import Link from "next/link"
import {useCategories} from "@/src/actions/GetCategoriesAction";

export function ProductCategories() {
    const {categories, isLoading, error} = useCategories();
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Shop by Category</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Find exactly what you need for your construction project with our comprehensive range of professional-grade
            materials.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            // const IconComponent = category.icon
            return (
              <Link key={category.externalId} href={`/products?category=${category.name.toLowerCase().replace(/\s+/g, "-")}`}>
                <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="relative mb-4">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={category.imageUrl || "/placeholder.svg"}
                        alt={category.name}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground p-2 rounded-lg">
                        {/*<IconComponent className="h-6 w-6" />*/}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{category.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{category.productCount} products</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                        >
                          Browse
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
