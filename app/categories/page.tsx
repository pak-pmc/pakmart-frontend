"use client"

import {Header} from "@/components/header"
import {Card, CardContent} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import {Wrench, Droplets, Hammer, Zap, Lightbulb, Package} from "lucide-react"
import Link from "next/link"
import type {ICategory} from "@/src/interfaces/ICategory";
import {useCategories} from "@/src/actions/GetCategoriesAction";


export default function CategoriesPage() {

    const {
        categories,
        isLoading,
        error
    } = useCategories();

    const IconComponent = Package
    return (
        <div className="min-h-screen bg-background">
            <Header/>

            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Page Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">Product
                        Categories</h1>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
                        Browse our comprehensive range of construction materials organized by category. Find everything
                        you need for
                        your building projects from trusted brands.
                    </p>
                </div>
                {isLoading && <p>Loading..</p>}
                {/* Categories Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category: ICategory) => {

                        return (
                            <Card key={category.externalId}
                                  className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                                <CardContent className="p-0">
                                    {/* Category Image */}
                                    <div className="relative h-48 overflow-hidden">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={category.imageUrl || ""}
                                            alt={category.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div
                                            className="absolute top-4 left-4 bg-secondary text-secondary-foreground p-3 rounded-lg shadow-lg">
                                            <IconComponent className="h-6 w-6"/>
                                        </div>
                                        <div
                                            className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                                            {(category.productCount ?? 0)} items
                                        </div>
                                    </div>

                                    {/* Category Content */}
                                    <div className="p-6 space-y-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                                                {category.name}
                                            </h3>
                                            <p className="text-muted-foreground text-sm leading-relaxed">{category.description}</p>
                                        </div>

                                        {/*              /!* Subcategories *!/*/}
                                        {/*              <div className="space-y-2">*/}
                                        {/*                  <h4 className="text-sm font-semibold text-foreground">Popular Items:</h4>*/}
                                        {/*                  <div className="flex flex-wrap gap-2">*/}
                                        {/*                      {category.subcategories.slice(0, 3).map((sub, index) => (*/}
                                        {/*                          <span key={index}*/}
                                        {/*                                className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md">*/}
                                        {/*  {sub}*/}
                                        {/*</span>*/}
                                        {/*                      ))}*/}
                                        {/*                      {category.subcategories.length > 3 && (*/}
                                        {/*                          <span className="text-xs text-muted-foreground px-2 py-1">*/}
                                        {/*  +{category.subcategories.length - 3} more*/}
                                        {/*</span>*/}
                                        {/*                      )}*/}
                                        {/*                  </div>*/}
                                        {/*              </div>*/}

                                        {/* Action Button */}
                                        <Link
                                            href={`/products?category=${category.name.toLowerCase().replace(/\s+/g, "-")}`}>
                                            <Button
                                                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                                Browse {category.name}
                                            </Button>
                                        </Link>

                                    </div>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16 p-8 bg-muted rounded-lg">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Cannot Find What You are Looking For?</h2>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                        Our team of construction experts is here to help you find the right materials for your project.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/products">
                            <Button size="lg" className="min-w-[200px]">
                                View All Products
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="outline" size="lg" className="min-w-[200px] bg-transparent">
                                Contact Support
                            </Button>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    )
}
