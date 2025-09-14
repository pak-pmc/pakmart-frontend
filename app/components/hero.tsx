import {Button} from "@/components/ui/button"
import {ArrowDown, ArrowRight} from "lucide-react"
import Link from "next/link"

export function Hero() {
    return (
        <section className="relative bg-gradient-to-r from-muted to-background py-20 lg:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
                                Build with Quality & Style
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                                From water pumps to premium fixtures, we supply contractors and builders with reliable,
                                professional-grade materials at competitive prices.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/products">
                                <Button size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
                                    Shop Now
                                    <ArrowRight className="ml-2 h-5 w-5"/>
                                </Button>
                            </Link>
                            <Link href="/#request-quote">
                                <Button variant="outline" size="lg">
                                    Request Quotation
                                    <ArrowDown className="ml-2 h-5 w-5"/>
                                </Button>
                            </Link>
                        </div>

                        <div className="grid grid-cols-3 gap-8 pt-8">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary">500+</div>
                                <div className="text-sm text-muted-foreground">Products</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary">24/7 Support</div>
                                <div className="text-sm text-muted-foreground">+233 501376828</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary">Fast</div>
                                <div className="text-sm text-muted-foreground">Delivery</div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="https://www.pakpmc.com/img/water-treatment.jpg"
                            alt="Construction materials and equipment"
                            className="rounded-lg shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
