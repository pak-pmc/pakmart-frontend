"use client"

import {Header} from "@/components/header"
import {Button} from "@/components/ui/button"
import {Card, CardContent} from "@/components/ui/card"
import {ShoppingCart, Share2, Truck, Shield} from "lucide-react"
import Link from "next/link"
import {useProduct} from "@/src/actions/GetProductAction"
import {shareProduct} from "@/src/actions/ProductShareAction";
import {formatAmount} from "@/src/utils/helpers";
import {useState} from "react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import {useAddToCartHandler} from "@/src/actions/AddToCartAction";

export default function ProductDetailPage({params}: { params: { id: string } }) {
    const externalId = params.id
    const {product, isLoading, error} = useProduct(externalId)
    const {handleAddToCart} = useAddToCartHandler()
    const [selectedVariantIndex, setSelectedVariantIndex] = useState(0)

    const handleShare = async () => {
        if (product?.images) {
            await shareProduct({
                product: {name: product.name, url: window.location.href},
                imageUrl: product?.images[0].fileUrl || ''
            })
        }
    }

    const getPrice = () => {
        if (product.hasVariants && product.variants?.[selectedVariantIndex]) {
            const variant = product.variants[selectedVariantIndex]
            return variant.unitPrice
        }
        return product.unitPrice
    }

    if (isLoading) {
        return (
            <div className="min-h-screen bg-background">
                <Header/>
                <div className="container mx-auto px-4 py-16 text-center">
                    <h1 className="text-2xl font-bold mb-4">Loading product...</h1>
                </div>
            </div>
        )
    }

    if (error || !product || !('externalId' in product)) {
        return (
            <div className="min-h-screen bg-background">
                <Header/>
                <div className="container mx-auto px-4 py-16 text-center">
                    <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
                    <Link href="/products">
                        <Button>Back to Products</Button>
                    </Link>
                </div>
            </div>
        )
    }

    const imageUrl = product.images && product.images.length > 0 ? product.images[0].fileUrl : ""


    return (
        <div className="min-h-screen bg-background">
            <Header/>

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
                            <img
                                src={imageUrl}
                                alt={product.name}
                                width={600}
                                height={600}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-6">
                        <div>
                            <p className="text-sm text-muted-foreground mb-2">{product.subCategoryName}</p>
                            <h1 className="text-1xl font-bold text-foreground mb-4">{product.name}</h1>

                            {/* Price */}
                            {product.hasVariants && product.variants && product.variants.length > 0 && (
                                <div className="space-y-2">
                                    <Select
                                        value={String(selectedVariantIndex)}
                                        onValueChange={(value) => setSelectedVariantIndex(Number(value))}>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Choose a variant"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            {product.variants.map((variant, index) => (
                                                <SelectItem key={index} value={String(index)}>
                                                    {variant.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            )}

                            <div className="flex items-center justify-between pt-4">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-1">
                                        <span
                                            className="text-md md:text-2xl font-bold text-primary">{formatAmount(getPrice())}</span>
                                    </div>
                                </div>
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
                            <Button size="lg" className="flex-1"
                                    onClick={() => handleAddToCart({product, selectedVariantIndex})}>
                                <ShoppingCart className="h-5 w-5 mr-2"/>
                                Add to Cart
                            </Button>
                            <Button variant="outline" size="lg" onClick={handleShare}>
                                <Share2 className="h-5 w-5"/>
                            </Button>
                        </div>

                        {/* Shipping Info */}
                        <Card>
                            <CardContent className="p-5 ml-4">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <Truck className="h-5 w-5 text-primary"/>
                                        <span
                                            className="text-sm">Free Delivery on orders over GHS 20, 000 within Accra</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Shield className="h-5 w-5 text-primary"/>
                                        <span className="text-sm">Manufacturer warranty</span>
                                    </div>
                                    {/*<div className="flex items-center gap-3">*/}
                                    {/*  <RotateCcw className="h-5 w-5 text-primary" />*/}
                                    {/*  <span className="text-sm">30-day return policy</span>*/}
                                    {/*</div>*/}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Specifications */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold mb-6">Specifications</h2>
                    <Card>
                        <CardContent className="m-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                {Array.isArray(product.specifications) ? (
                                    product.specifications.map((spec, idx) => (
                                        <div key={idx} className="flex justify-between py-2">
                                            <span className="text-muted-foreground">- {spec}</span>
                                        </div>
                                    ))
                                ) : (
                                    Object.entries(product.specifications as any).map(([key, value]) => (
                                        <div key={key} className="flex justify-between py-2">
                                            <span className="font-medium">{key}:</span>
                                            <span className="text-muted-foreground">{String(value)}</span>
                                        </div>
                                    ))
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
