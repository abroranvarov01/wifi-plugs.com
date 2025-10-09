"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ArrowRight, Zap, Wifi } from "lucide-react"
import Link from "next/link"
import { useRef, useMemo } from "react"
import { useInView } from "@/hooks/use-in-view"

const products = [
  {
    id: "tp-link-kasa-hs103",
    name: "TP-Link Kasa Smart Plug HS103",
    rating: 4.8,
    reviews: 12453,
    price: "$24.99",
    priceValue: 24.99,
    image: "/tp-link-smart-plug.jpg",
    badge: "Best Overall",
    features: ["Voice Control", "Scheduling", "Away Mode"],
  },
  {
    id: "amazon-smart-plug",
    name: "Amazon Smart Plug",
    rating: 4.7,
    reviews: 8932,
    price: "$24.99",
    priceValue: 24.99,
    image: "/amazon-smart-plug.jpg",
    badge: "Best Value",
    features: ["Alexa Built-in", "Easy Setup", "Compact"],
  },
  {
    id: "wemo-mini-smart-plug",
    name: "Wemo Mini Smart Plug",
    rating: 4.6,
    reviews: 6721,
    price: "$27.99",
    priceValue: 27.99,
    image: "/wemo-smart-plug.jpg",
    badge: "Most Compact",
    features: ["Energy Monitoring", "HomeKit", "No Hub"],
  },
  {
    id: "kasa-smart-plug-hs105",
    name: "Kasa Smart Plug HS105",
    rating: 4.7,
    reviews: 9234,
    price: "$19.99",
    priceValue: 19.99,
    image: "/kasa-hs105.jpg",
    badge: "Budget Pick",
    features: ["WiFi Control", "Voice Control", "Scheduling"],
  },
  {
    id: "gosund-smart-plug",
    name: "Gosund Smart Plug Mini",
    rating: 4.5,
    reviews: 5432,
    price: "$15.99",
    priceValue: 15.99,
    image: "/gosund-plug.jpg",
    badge: "Best Budget",
    features: ["Alexa & Google", "Timer", "Compact"],
  },
  {
    id: "meross-smart-plug",
    name: "Meross Smart WiFi Plug",
    rating: 4.6,
    reviews: 7123,
    price: "$22.99",
    priceValue: 22.99,
    image: "/meross-plug.jpg",
    badge: "Great Value",
    features: ["HomeKit Support", "Voice Control", "App Control"],
  },
  {
    id: "wyze-plug",
    name: "Wyze Smart Plug",
    rating: 4.5,
    reviews: 4567,
    price: "$17.99",
    priceValue: 17.99,
    image: "/wyze-plug.jpg",
    badge: "Affordable",
    features: ["Vacation Mode", "Alexa & Google", "Scheduling"],
  },
  {
    id: "tp-link-kasa-ep25",
    name: "TP-Link Kasa EP25",
    rating: 4.9,
    reviews: 3421,
    price: "$29.99",
    priceValue: 29.99,
    image: "/kasa-ep25.jpg",
    badge: "Premium Choice",
    features: ["Energy Monitoring", "Matter Support", "Bluetooth"],
  },
  {
    id: "eve-energy",
    name: "Eve Energy Smart Plug",
    rating: 4.7,
    reviews: 2876,
    price: "$39.99",
    priceValue: 39.99,
    image: "/eve-energy.jpg",
    badge: "Best for Apple",
    features: ["HomeKit Native", "Energy Tracking", "Thread"],
  },
]

interface ProductGridProps {
  filter: string
}

export function ProductGrid({ filter }: ProductGridProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref)

  const filteredProducts = useMemo(() => {
    switch (filter) {
      case "best-rated":
        return products.filter((p) => p.rating >= 4.7)
      case "budget":
        return products.filter((p) => p.priceValue < 20)
      case "premium":
        return products.filter((p) => p.priceValue >= 29)
      case "energy":
        return products.filter((p) => p.features.some((f) => f.toLowerCase().includes("energy")))
      default:
        return products
    }
  }, [filter])

  return (
    <div ref={ref} className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {filteredProducts.map((product, index) => (
        <Card
          key={product.id}
          className={`group overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-2 ${
            isInView ? "animate-slide-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <CardHeader className="relative p-0">
            <div className="absolute top-4 left-4 z-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-3 py-1 text-xs font-semibold text-white shadow-lg">
              {product.badge}
            </div>
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="h-64 w-full object-cover transition-transform group-hover:scale-105"
            />
          </CardHeader>
          <CardContent className="p-6">
            <h3 className="font-semibold text-gray-900 text-lg line-clamp-2">{product.name}</h3>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                {product.rating} ({product.reviews.toLocaleString()})
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {product.features.map((feature) => (
                <span key={feature} className="rounded-full bg-blue-50 px-2 py-1 text-xs text-blue-700">
                  {feature}
                </span>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between">
              
              <div className="flex gap-1">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-100 text-green-700">
                  <Wifi className="h-4 w-4" />
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                  <Zap className="h-4 w-4" />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="p-6 pt-0">
            <Button asChild className="w-full group">
              <Link href={`/reviews/${product.id}`}>
                Read Full Review
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
