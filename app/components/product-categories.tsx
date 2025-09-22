"use client"

import {useCategories} from "@/src/actions/GetCategoriesAction";
import {Category} from "@/components/category";

export function ProductCategories() {
    const {categories, isLoading, error} = useCategories();
    return (
        <section className="py-12 sm:py-16 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 text-balance">Shop by
                        Category</h2>
                    <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                        Find exactly what you need for your construction project with our comprehensive range of
                        professional-grade
                        materials.
                    </p>
                </div>

                {!isLoading && !error && (
                    <Category categories={categories || []} descriptionLength={8}/>
                )}
            </div>
        </section>
    )
}
