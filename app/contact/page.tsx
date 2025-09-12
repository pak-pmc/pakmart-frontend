import {Header} from "@/components/header"
import {Footer} from "@/components/footer"
import {Mail, Phone, MapPin, Clock, Send} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header/>

            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Contact
                        BuildMart</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
                        Get in touch with our construction materials experts. We are here to help you find the right
                        products for
                        your project and answer any questions you may have.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold text-foreground">Send Us a Message</CardTitle>
                                <p className="text-muted-foreground">
                                    Fill out the form below and we will get back to you within 24 hours.
                                </p>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                                            First Name *
                                        </label>
                                        <Input id="firstName" placeholder="John" required/>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                                            Last Name *
                                        </label>
                                        <Input id="lastName" placeholder="Smith" required/>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                                        Email Address *
                                    </label>
                                    <Input id="email" type="email" placeholder="john@example.com" required/>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-foreground">
                                        Phone Number
                                    </label>
                                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567"/>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="company" className="text-sm font-medium text-foreground">
                                        Company/Organization
                                    </label>
                                    <Input id="company" placeholder="ABC Construction"/>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium text-foreground">
                                        Subject *
                                    </label>
                                    <Input id="subject" placeholder="Product inquiry" required/>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                                        Message *
                                    </label>
                                    <Textarea
                                        id="message"
                                        placeholder="Tell us about your project and how we can help..."
                                        rows={5}
                                        required
                                    />
                                </div>

                                <Button className="w-full" size="lg">
                                    <Send className="h-4 w-4 mr-2"/>
                                    Send Message
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        {/* Contact Details */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold text-foreground">Get in Touch</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-primary/10 p-3 rounded-lg">
                                        <Phone className="h-6 w-6 text-primary"/>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                                        <p className="text-muted-foreground">+1 (555) 123-4567</p>
                                        <p className="text-sm text-muted-foreground">Mon-Fri 8AM-6PM, Sat 9AM-4PM</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-primary/10 p-3 rounded-lg">
                                        <Mail className="h-6 w-6 text-primary"/>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">Email</h3>
                                        <p className="text-muted-foreground">info@buildmart.com</p>
                                        <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-primary/10 p-3 rounded-lg">
                                        <MapPin className="h-6 w-6 text-primary"/>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">Address</h3>
                                        <p className="text-muted-foreground">123 Construction Ave</p>
                                        <p className="text-muted-foreground">Builder City, BC 12345</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-primary/10 p-3 rounded-lg">
                                        <Clock className="h-6 w-6 text-primary"/>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                                        <div className="text-muted-foreground space-y-1">
                                            <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                                            <p>Saturday: 9:00 AM - 4:00 PM</p>
                                            <p>Sunday: Closed</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Emergency Contact */}
                        <Card className="bg-secondary/50">
                            <CardHeader>
                                <CardTitle className="text-xl font-bold text-foreground">Emergency Support</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground mb-4">
                                    Need urgent assistance with your construction project? Our emergency support team is
                                    available 24/7
                                    for critical issues.
                                </p>
                                <div className="flex items-center space-x-3">
                                    <Phone className="h-5 w-5 text-primary"/>
                                    <span
                                        className="font-semibold text-foreground">Emergency Line: +1 (555) 999-0000</span>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Map Placeholder */}
                        <Card>
                            <CardContent className="p-0">
                                <div className="bg-muted h-64 rounded-lg flex items-center justify-center">
                                    <div className="text-center">
                                        <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2"/>
                                        <p className="text-muted-foreground">Interactive Map</p>
                                        <p className="text-sm text-muted-foreground">123 Construction Ave, Builder
                                            City</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-center text-foreground mb-12">Frequently Asked Questions</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">What are your delivery options?</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    We offer same-day delivery within 25 miles, next-day delivery regionally, and
                                    nationwide shipping for
                                    all orders. Delivery fees vary by location and order size.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Do you offer bulk pricing?</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Yes! We provide competitive bulk pricing for contractors and large projects. Contact
                                    our sales team
                                    for custom quotes on orders over $5,000.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Can I return unused materials?</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Most unused materials can be returned within 30 days with original receipt. Some
                                    restrictions apply to
                                    custom orders and special-order items.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Do you provide technical support?</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Our experienced team provides free technical consultation to help you choose the
                                    right materials and
                                    ensure proper installation for your projects.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>

            <Footer/>
        </div>
    )
}
