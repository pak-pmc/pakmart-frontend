"use client"

import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ProductFilters() {
  // const [priceRange, setPriceRange] = useState([0, 1000])

  return (
    <div className="space-y-6">
      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="text-md">Sub Categories</CardTitle>
        </CardHeader>
                <select className="m-4 border p-2 border-border rounded-md py-2 text-sm bg-background">
                    <option> Sort by: Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Customer Rating</option>
                    <option>Newest First</option>
                </select>
      </Card>

      {/* Price Range */}
      {/*<Card>*/}
      {/*  <CardHeader>*/}
      {/*    <CardTitle className="text-lg">Price Range</CardTitle>*/}
      {/*  </CardHeader>*/}
      {/*  <CardContent>*/}
      {/*    <div className="space-y-4">*/}
      {/*      <Slider value={priceRange} onValueChange={setPriceRange} max={2000} step={50} className="w-full" />*/}
      {/*      <div className="flex justify-between text-sm text-muted-foreground">*/}
      {/*        <span>${priceRange[0]}</span>*/}
      {/*        <span>${priceRange[1] >= 2000 ? "2000+" : priceRange[1]}</span>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </CardContent>*/}
      {/*</Card>*/}

      {/* Brand */}
        <Card>
            <CardHeader>
                <CardTitle className="text-md">Brand</CardTitle>
            </CardHeader>
            <select className="m-4 border p-2 border-border rounded-md text-sm bg-background">
                <option> Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Customer Rating</option>
                <option>Newest First</option>
            </select>
        </Card>

      {/* Clear Filters */}
      <Button variant="outline" className="w-full bg-transparent">
        Clear All Filters
      </Button>
    </div>
  )
}
