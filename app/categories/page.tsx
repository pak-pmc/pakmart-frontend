"use client"

import {Header} from "@/components/header"
import {Button} from "@/components/ui/button"
import {Package} from "lucide-react"
import Link from "next/link"
import {useCategories} from "@/src/actions/GetCategoriesAction";
import {Category} from "@/components/category"


export default function CategoriesPage() {

    const {
        categories,
        isLoading,
        error
    } = useCategories();

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
                {!isLoading && !error && (
                    <Category categories={categories || []} IconComponent={Package} />
                )}

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
