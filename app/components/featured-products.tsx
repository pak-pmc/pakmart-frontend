"use client"

import {Button} from "@/components/ui/button"
import Link from "next/link"
import {useProducts} from "@/src/actions/GetProductsAction";
import {Product} from "@/components/product";
import {IProduct} from "@/src/interfaces/IProduct";

export function FeaturedProducts({products}: { products: IProduct[]}) {

    return (
        <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Featured
                        Products</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                        Discover our most popular construction materials, trusted by professionals nationwide.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <Product key={product.externalId} product={product} />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link href="/products">
                        <Button variant="outline" size="lg">
                            View All Products
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
