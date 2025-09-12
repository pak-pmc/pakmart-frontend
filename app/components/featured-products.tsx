"use client"

import {Card, CardContent} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import {Badge} from "@/components/ui/badge"
import {Star, ShoppingCart, Eye} from "lucide-react"
import Link from "next/link"
import {useCart} from "@/contexts/cart-context"
import {useProducts} from "@/src/actions/GetProductsAction";
import {IProduct} from "@/src/interfaces/IProduct";

export function FeaturedProducts() {
    const {addItem} = useCart()

    const {products, isLoading, error} = useProducts();

    const handleAddToCart = (product: IProduct) => {
        addItem({
            externalId: product.externalId,
            name: product.name,
            price: product.discountedPrice,
            image: product.images?.[0]?.fileUrl || "",
        })
    }

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
                        <Card key={product.externalId} className="group hover:shadow-xl transition-all duration-300">
                            <CardContent className="p-0">
                                <div className="relative">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={product.images?.[0]?.fileUrl || ""}
                                        alt={product.name}
                                        className="w-full h-64 object-cover rounded-t-lg"
                                    />
                                    <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
                                        {/*{product.badge}*/}
                                    </Badge>
                                </div>

                                <div className="p-6 space-y-4">
                                    <div>
                                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 text-balance">
                                            {product.name}
                                        </h3>

                                        <div className="flex items-center gap-2 mt-2">
                                            <div className="flex items-center">
                                                {product.rating && (
                                                    <><Star className="h-4 w-4 fill-yellow-400 text-yellow-400"/><span
                                                        className="text-sm font-medium ml-1">{product.rating}</span></>
                                                )}

                                            </div>
                                            {product.reviewCount && (
                                                <span
                                                    className="text-sm text-muted-foreground">({product.reviewCount} reviews)</span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        {product.specifications.map((feature, index) => (
                                            <div key={index} className="text-sm text-muted-foreground">
                                                • {feature}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2">
                                                <span
                                                    className="text-2xl font-bold text-primary">GHS{product.discountedPrice}</span>
                                                {product.unitPrice && (
                                                    <span
                                                        className="text-sm text-muted-foreground line-through">GHS{product.unitPrice}</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2 pt-2">
                                        <Link href={`/products/${product.externalId}`} className="w-full">
                                            <Button variant="outline" size="sm" className="w-full bg-transparent">
                                                <Eye className="h-4 w-4 mr-2"/>
                                                View Details
                                            </Button>
                                        </Link>
                                        <Button
                                            className="w-full bg-primary hover:bg-primary/90"
                                            size="sm"
                                            onClick={() => handleAddToCart(product)}>
                                            <ShoppingCart className="h-4 w-4 mr-2"/>
                                            Add to Cart
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
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
