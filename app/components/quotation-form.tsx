"use client"

import type React from "react"

import {useState} from "react"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {FileText, Send} from "lucide-react"
import {ICustomQuotation} from "@/src/interfaces/ICustomQuotation"
import {useSendQuotationAction} from "@/src/actions/SendQuotationAction"

export function QuotationForm() {
    const [formData, setFormData] = useState<ICustomQuotation>({
        fullName: "",
        email: "",
        phone: "",
        material: "",
        additionalNotes: "",
    })

    const {sendQuotation, isPending} = useSendQuotationAction()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            await sendQuotation(formData)
            setFormData({ fullName: "", email: "", phone: "", material: "", additionalNotes: "" })
        } catch (err) {
            console.error('Failed to submit quotation', err)
        }
    }

    const handleInputChange = (field: keyof ICustomQuotation, value: string) => {
        setFormData((prev) => ({...prev, [field]: value}))
    }

    return (
        <section className="py-16 bg-muted/30" id="request-quote">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                        <FileText className="h-8 w-8 text-primary"/>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Request a Custom
                        Quote</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                        Need materials for a specific project? Get a personalized quote tailored to your requirements.
                        Our experts
                        will provide competitive pricing and professional recommendations.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <Card>
                        <CardHeader className="m-5">
                            <CardTitle className="text-2xl font-bold text-foreground">Project Details</CardTitle>
                            <p className="text-muted-foreground">
                                Tell us about your project and we will prepare a detailed quotation for you.
                            </p>
                        </CardHeader>
                        <CardContent className="m-5">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Contact Information */}
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="fullName" className="text-sm font-medium text-foreground">
                                            Full Name *
                                        </label>
                                        <Input
                                            id="fullName"
                                            value={formData.fullName}
                                            onChange={(e) => handleInputChange("fullName", e.target.value)}
                                            placeholder="Ama Ghana"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-foreground">
                                            Email Address *
                                        </label>
                                        <Input
                                            id="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => handleInputChange("email", e.target.value)}
                                            placeholder="mama@example.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-medium text-foreground">
                                            Phone Number *
                                        </label>
                                        <Input
                                            id="phone"
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => handleInputChange("phone", e.target.value)}
                                            placeholder="0245 123 4567"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Project Information */}
                                {/*<div className="grid md:grid-cols-2 gap-4">*/}
                                {/*  <div className="space-y-2">*/}
                                {/*    <label htmlFor="projectType" className="text-sm font-medium text-foreground">*/}
                                {/*      Project Type **/}
                                {/*    </label>*/}
                                {/*    <Select*/}
                                {/*      value={formData.projectType}*/}
                                {/*      onValueChange={(value) => handleInputChange("projectType", value)}*/}
                                {/*    >*/}
                                {/*      <SelectTrigger>*/}
                                {/*        <SelectValue placeholder="Select project type" />*/}
                                {/*      </SelectTrigger>*/}
                                {/*      <SelectContent>*/}
                                {/*        <SelectItem value="residential">Residential Construction</SelectItem>*/}
                                {/*        <SelectItem value="commercial">Commercial Building</SelectItem>*/}
                                {/*        <SelectItem value="industrial">Industrial Facility</SelectItem>*/}
                                {/*        <SelectItem value="renovation">Renovation/Remodel</SelectItem>*/}
                                {/*        <SelectItem value="plumbing">Plumbing Installation</SelectItem>*/}
                                {/*        <SelectItem value="electrical">Electrical Work</SelectItem>*/}
                                {/*        <SelectItem value="other">Other</SelectItem>*/}
                                {/*      </SelectContent>*/}
                                {/*    </Select>*/}
                                {/*  </div>*/}
                                {/*  <div className="space-y-2">*/}
                                {/*    <label htmlFor="projectSize" className="text-sm font-medium text-foreground">*/}
                                {/*      Project Size **/}
                                {/*    </label>*/}
                                {/*    <Select*/}
                                {/*      value={formData.projectSize}*/}
                                {/*      onValueChange={(value) => handleInputChange("projectSize", value)}*/}
                                {/*    >*/}
                                {/*      <SelectTrigger>*/}
                                {/*        <SelectValue placeholder="Select project size" />*/}
                                {/*      </SelectTrigger>*/}
                                {/*      <SelectContent>*/}
                                {/*        <SelectItem value="small">Small (Under $10k)</SelectItem>*/}
                                {/*        <SelectItem value="medium">Medium ($10k - $50k)</SelectItem>*/}
                                {/*        <SelectItem value="large">Large ($50k - $200k)</SelectItem>*/}
                                {/*        <SelectItem value="enterprise">Enterprise ($200k+)</SelectItem>*/}
                                {/*      </SelectContent>*/}
                                {/*    </Select>*/}
                                {/*  </div>*/}
                                {/*</div>*/}

                                <div className="space-y-2">
                                    <label htmlFor="specifications" className="text-sm font-medium text-foreground">
                                        Material Specifications *
                                    </label>
                                    <Textarea
                                        id="material"
                                        value={formData.material}
                                        onChange={(e) => handleInputChange("material", e.target.value)}
                                        placeholder="Please list the materials you need (e.g., water pumps, pipes, fixtures, quantities, specifications, etc.)"
                                        rows={4}
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="additionalNotes" className="text-sm font-medium text-foreground">
                                        Additional Notes
                                    </label>
                                    <Textarea
                                        id="additionalNotes"
                                        value={formData.additionalNotes}
                                        onChange={(e) => handleInputChange("additionalNotes", e.target.value)}
                                        placeholder="Any additional requirements, preferences, or questions..."
                                        rows={3}
                                    />
                                </div>

                                <div className="bg-muted/50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-foreground mb-2">What happens next?</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Our team will review your requirements within 24 hours</li>
                                        <li>• We will prepare a detailed quote with competitive pricing</li>
                                        <li>• A project specialist will contact you to discuss details</li>
                                        <li>• We will provide delivery options and timeline estimates</li>
                                    </ul>
                                </div>

                                <Button type="submit" size="lg" className="w-full" disabled={isPending}>
                                    <Send className="h-4 w-4 mr-2"/>
                                    {isPending ? 'Submitting...' : 'Request Quote'}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
