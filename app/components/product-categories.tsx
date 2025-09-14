"use client"

import {Wrench, Droplets, Hammer, Zap, Package} from "lucide-react"
import {useCategories} from "@/src/actions/GetCategoriesAction";
import {Category} from "@/components/category";

export function ProductCategories() {
    const {categories, isLoading, error} = useCategories();
    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Shop by
                        Category</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                        Find exactly what you need for your construction project with our comprehensive range of
                        professional-grade
                        materials.
                    </p>
                </div>

                {!isLoading && !error && (
                    <Category categories={categories || []} IconComponent={Package}/>
                )}
            </div>
        </section>
    )
}
