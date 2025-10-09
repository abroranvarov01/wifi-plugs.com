"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ArrowRight } from "lucide-react"
import Link from "next/link"

const topPicks = [
  {
    id: "tp-link-kasa-hs103",
    name: "TP-Link Kasa HS103",
    rating: 4.8,
    reviews: 12453,
    price: "$24.99",
    image: "/tp-link-smart-plug.jpg",
    badge: "Best Overall",
  },
  {
    id: "amazon-smart-plug",
    name: "Amazon Smart Plug",
    rating: 4.7,
    reviews: 8932,
    price: "$24.99",
    image: "/amazon-smart-plug.jpg",
    badge: "Best Value",
  },
  {
    id: "wemo-mini-smart-plug",
    name: "Wemo Mini Smart Plug",
    rating: 4.6,
    reviews: 6721,
    price: "$27.99",
    image: "/wemo-smart-plug.jpg",
    badge: "Most Compact",
  },
]

export function TopPicksSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref)

  return (
    <section ref={ref} className="relative py-24 bg-gradient-to-br from-indigo-50 to-blue-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-4xl font-bold text-gray-900 sm:text-5xl text-balance">Our Top Picks</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 leading-relaxed">
            Expert-tested and customer-approved smart plugs for every need
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {topPicks.map((product, index) => (
            <Card
              key={product.id}
              className={`group overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-2 ${
                isInView ? "animate-slide-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="relative p-0">
                <div className="absolute top-4 left-4 z-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-3 py-1 text-xs font-semibold text-white">
                  {product.badge}
                </div>
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="h-64 w-full object-cover transition-transform group-hover:scale-105"
                />
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 text-xl">{product.name}</h3>
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
                
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button asChild className="w-full group">
                  <Link href={`/reviews/${product.id}`}>
                    Read Review
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/reviews">View All Reviews</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
