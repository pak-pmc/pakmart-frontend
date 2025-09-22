import type {ICategory} from "@/src/interfaces/ICategory";
import {Card, CardContent} from "@/components/ui/card";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {truncateWords} from "@/src/utils/helpers";

type CategoryProps = { categories: ICategory[], descriptionLength: number}

export function Category({ categories, descriptionLength = 8}: CategoryProps) {

   return ( <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {categories.map((category: ICategory) => {

            const categoryName = category.name.toLowerCase().replace(/\s+/g, "-");

            return (
                <Card key={category.externalId}
                      className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <CardContent className="p-0">
                        {/* Category Image */}
                        <div className="relative h-36 sm:h-44 md:h-48 overflow-hidden">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={category.imageUrl || ""}
                                alt={category.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div
                                className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                                {(category.productCount ?? 0)} items
                            </div>
                        </div>

                        {/* Category Content */}
                        <div className="p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4">
                            <div>
                                <h3 className="text-md sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                                    {category.name}
                                </h3>
                                <p className="text-muted-foreground text-sm">{truncateWords(category.description, descriptionLength)}</p>
                            </div>

                            {/* Subcategories */}
                            <div className="space-y-2">
                                <h4 className="text-sm font-semibold text-foreground"></h4>
                                <div className="flex flex-wrap gap-2">
                                    {category.subCategories.slice(0, 3).map((sub, index) => (
                                        <span key={index}
                                              className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md">
                                          {sub.name}
                                        </span>
                                    ))}
                                    {category.subCategories.length > 2 && (
                                        <span className="text-xs text-muted-foreground px-2 py-1">
                                          +{category.subCategories.length - 4} more
                                        </span>
                                    )}
                                </div>
                            </div>
                            <Link
                                href={`/products?filters=[{"field":"categoryName", "operator":"=", "value":"${categoryName}"}]`}>
                                <Button
                                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    Browse
                                </Button>
                            </Link>

                        </div>
                    </CardContent>
                </Card>
            )
        })}
    </div>
   )
}