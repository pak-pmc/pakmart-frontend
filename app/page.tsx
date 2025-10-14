'use client'

import {Hero} from "@/components/hero"
import {ProductCategories} from "@/components/product-categories"
import {FeaturedProducts} from "@/components/featured-products"
import {QuotationForm} from "@/components/quotation-form"
import {Footer} from "@/components/footer"
import {Header} from "@/components/header"
import {useFeaturedProducts} from "@/src/actions/GetFeaturedProductsAction";

export default function HomePage() {
    const {products, isLoading, error} = useFeaturedProducts();
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
