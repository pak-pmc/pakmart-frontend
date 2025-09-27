'use client'

import {Hero} from "@/components/hero"
import {ProductCategories} from "@/components/product-categories"
import {FeaturedProducts} from "@/components/featured-products"
import {QuotationForm} from "@/components/quotation-form"
import {Footer} from "@/components/footer"
import {Header} from "@/components/header"
import {useProducts} from "@/src/actions/GetProductsAction";

export default function HomePage() {
    const {products, isLoading, error} = useProducts(4);
    return (
        <div className="min-h-screen bg-background">
            <Header/>
            <main>
                <Hero/>
                <ProductCategories/>
                <FeaturedProducts products={products}/>
                <QuotationForm/>
            </main>
            <Footer/>
        </div>
    )
}
