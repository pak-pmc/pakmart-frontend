import { Hero } from "@/components/hero"
import { ProductCategories } from "@/components/product-categories"
import { FeaturedProducts } from "@/components/featured-products"
import { QuotationForm } from "@/components/quotation-form"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function HomePage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                <Hero />
                <ProductCategories/>
                <FeaturedProducts />
                <QuotationForm />
            </main>
            <Footer />
        </div>
    )
}
