"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Star, Package, Calendar, DollarSign, MessageSquare, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Mock purchase history data
const purchaseHistory = [
  {
    id: "ORD-001",
    date: "2024-01-15",
    status: "Delivered",
    total: 1250.99,
    items: [
      {
        id: 1,
        name: "Premium Concrete Mix",
        category: "Concrete & Cement",
        price: 45.99,
        quantity: 20,
        image: "/placeholder.svg?height=80&width=80",
      },
      {
        id: 2,
        name: "Steel Rebar 12mm",
        category: "Steel & Metal",
        price: 125.0,
        quantity: 4,
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
  },
  {
    id: "ORD-002",
    date: "2024-01-08",
    status: "Delivered",
    total: 875.5,
    items: [
      {
        id: 3,
        name: "Ceramic Floor Tiles",
        category: "Tiles & Flooring",
        price: 25.99,
        quantity: 30,
        image: "/placeholder.svg?height=80&width=80",
      },
      {
        id: 4,
        name: "Tile Adhesive",
        category: "Adhesives",
        price: 35.99,
        quantity: 5,
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
  },
]

export default function PurchaseHistoryPage() {
  const [selectedOrder, setSelectedOrder] = useState<(typeof purchaseHistory)[0] | null>(null)
  const [reviewData, setReviewData] = useState({ rating: 0, comment: "" })

  const handleReviewSubmit = (itemId: number) => {
    console.log("Review submitted for item:", itemId, reviewData)
    // Handle review submission logic here
    setReviewData({ rating: 0, comment: "" })
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Button asChild variant="outline" size="sm">
              <Link href="/my-account">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to My Account
              </Link>
            </Button>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Purchase History</h1>
          <p className="text-muted-foreground">View your past orders and leave reviews for purchased items</p>
        </div>

        <div className="space-y-6">
          {purchaseHistory.map((order) => (
            <Card key={order.id}>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Package className="h-5 w-5" />
                      Order #{order.id}
                    </CardTitle>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(order.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4" />${order.total.toFixed(2)}
                      </div>
                    </div>
                  </div>
                  <Badge variant={order.status === "Delivered" ? "default" : "secondary"}>{order.status}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {order.items.map((item) => (
                    <div key={item.id}>
                      <div className="flex gap-4">
                        <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-muted">
                          <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                            <div>
                              <h4 className="font-semibold text-foreground">{item.name}</h4>
                              <Badge variant="outline" className="mt-1">
                                {item.category}
                              </Badge>
                              <p className="text-sm text-muted-foreground mt-1">
                                Quantity: {item.quantity} × ${item.price.toFixed(2)}
                              </p>
                            </div>
                            <div className="flex flex-col sm:items-end gap-2">
                              <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                              {order.status === "Delivered" && (
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <Button variant="outline" size="sm">
                                      <MessageSquare className="h-4 w-4 mr-2" />
                                      Write Review
                                    </Button>
                                  </DialogTrigger>
                                  <DialogContent className="sm:max-w-md">
                                    <DialogHeader>
                                      <DialogTitle>Review {item.name}</DialogTitle>
                                    </DialogHeader>
                                    <div className="space-y-4">
                                      <div className="space-y-2">
                                        <Label>Rating</Label>
                                        <div className="flex gap-1">
                                          {[1, 2, 3, 4, 5].map((star) => (
                                            <button
                                              key={star}
                                              onClick={() => setReviewData({ ...reviewData, rating: star })}
                                              className="p-1"
                                            >
                                              <Star
                                                className={`h-6 w-6 ${
                                                  star <= reviewData.rating
                                                    ? "fill-yellow-400 text-yellow-400"
                                                    : "text-gray-300"
                                                }`}
                                              />
                                            </button>
                                          ))}
                                        </div>
                                      </div>
                                      <div className="space-y-2">
                                        <Label htmlFor="review-comment">Your Review</Label>
                                        <Textarea
                                          id="review-comment"
                                          placeholder="Share your experience with this product..."
                                          value={reviewData.comment}
                                          onChange={(e) => setReviewData({ ...reviewData, comment: e.target.value })}
                                          rows={4}
                                        />
                                      </div>
                                    </div>
                                    <DialogFooter>
                                      <Button
                                        onClick={() => handleReviewSubmit(item.id)}
                                        disabled={reviewData.rating === 0}
                                      >
                                        Submit Review
                                      </Button>
                                    </DialogFooter>
                                  </DialogContent>
                                </Dialog>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      {order.items.indexOf(item) < order.items.length - 1 && <Separator className="mt-4" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {purchaseHistory.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-4">No Purchase History</h2>
              <p className="text-muted-foreground mb-6">You have not made any purchases yet</p>
              <Button asChild>
                <Link href="/products">Start Shopping</Link>
              </Button>
            </CardContent>
          </Card>
        )}
      </main>

      <Footer />
    </div>
  )
}
