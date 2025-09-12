"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

export function ProductFilters() {
  const [priceRange, setPriceRange] = useState([0, 1000])

  return (
    <div className="space-y-6">
      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="pumps" />
            <Label htmlFor="pumps">Water Pumps</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="taps" />
            <Label htmlFor="taps">Taps &amp; Faucets</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="sinks" />
            <Label htmlFor="sinks">Sinks & Basins</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="pipes" />
            <Label htmlFor="pipes">Pipes & Fittings</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="tools" />
            <Label htmlFor="tools">Tools & Hardware</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="electrical" />
            <Label htmlFor="electrical">Electrical</Label>
          </div>
        </CardContent>
      </Card>

      {/* Price Range */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Price Range</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Slider value={priceRange} onValueChange={setPriceRange} max={2000} step={50} className="w-full" />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1] >= 2000 ? "2000+" : priceRange[1]}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Brand */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Brand</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="grundfos" />
            <Label htmlFor="grundfos">Grundfos</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="kohler" />
            <Label htmlFor="kohler">Kohler</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="moen" />
            <Label htmlFor="moen">Moen</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="delta" />
            <Label htmlFor="delta">Delta</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="american-standard" />
            <Label htmlFor="american-standard">American Standard</Label>
          </div>
        </CardContent>
      </Card>

      {/* Clear Filters */}
      <Button variant="outline" className="w-full bg-transparent">
        Clear All Filters
      </Button>
    </div>
  )
}
