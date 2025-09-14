import type {ICategory} from "@/src/interfaces/ICategory";
import {Card, CardContent} from "@/components/ui/card";
import Link from "next/link";
import {Button} from "@/components/ui/button";

type CategoryProps = { categories: ICategory[]; IconComponent: any }

export function Category({ categories, IconComponent }: CategoryProps) {

   return ( <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category: ICategory) => {

            const categoryName = category.name.toLowerCase().replace(/\s+/g, "-");

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
                                    {category.subCategories.length > 4 && (
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
                                    Browse {category.name}
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