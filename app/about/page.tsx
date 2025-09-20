import {Header} from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle, Users, Award, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">About PakMart</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            Your trusted partner for quality construction materials. We have been serving contractors, builders, and DIY
            enthusiasts with professional-grade supplies since 2010.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2010 by experienced contractors who understood the challenges of sourcing reliable
                construction materials, PakMart began as a small local supplier with a simple mission: provide quality
                materials at fair prices with exceptional service.
              </p>
              <p>
                Over the years, we have grown from a single warehouse to a comprehensive construction materials supplier,
                but our commitment to quality and customer service remains unchanged. We understand that every project
                matters, whether it is a small home repair or a large commercial construction.
              </p>
              <p>
                Today, PakMart serves thousands of contractors, builders, and homeowners across the region, offering
                everything from basic plumbing fixtures to specialized industrial equipment.
              </p>
            </div>
          </div>
          <div className="bg-muted rounded-lg p-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/modern-construction-warehouse-with-organized-mater.png"
              alt="PakMart warehouse facility"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Quality First</h3>
              <p className="text-muted-foreground text-pretty">
                We source only the highest quality materials from trusted manufacturers and suppliers.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Customer Focus</h3>
              <p className="text-muted-foreground text-pretty">
                Your success is our success. We provide expert advice and support for every project.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Expertise</h3>
              <p className="text-muted-foreground text-pretty">
                Our team brings decades of construction industry experience to help you succeed.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Reliable Delivery</h3>
              <p className="text-muted-foreground text-pretty">
                Fast, reliable delivery to keep your projects on schedule and within budget.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-primary text-primary-foreground rounded-lg p-8 mb-16">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">14+</div>
              <div className="text-primary-foreground/80">Years in Business</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <div className="text-primary-foreground/80">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-primary-foreground/80">Products Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-primary-foreground/80">On-Time Delivery</div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-muted w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/construction-manager-headshot.png"
                  alt="John Smith"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">John Smith</h3>
              <p className="text-primary font-medium mb-2">Founder & CEO</p>
              <p className="text-muted-foreground text-sm text-pretty">
                25+ years in construction, passionate about helping builders succeed with quality materials.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-muted w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/operations-manager-headshot.png"
                  alt="Sarah Johnson"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Sarah Johnson</h3>
              <p className="text-primary font-medium mb-2">Operations Manager</p>
              <p className="text-muted-foreground text-sm text-pretty">
                Expert in supply chain management, ensuring we always have what you need in stock.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-muted w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/professional-customer-service-manager-headshot.png"
                  alt="Mike Rodriguez"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Mike Rodriguez</h3>
              <p className="text-primary font-medium mb-2">Customer Service Lead</p>
              <p className="text-muted-foreground text-sm text-pretty">
                Dedicated to providing exceptional service and technical support for all your projects.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-muted rounded-lg p-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Start Your Project?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-pretty">
            Browse our extensive catalog of construction materials or contact our team for expert advice on your next
            project. We are here to help you build better.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button size="lg" className="w-full sm:w-auto">
                Browse Products
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
