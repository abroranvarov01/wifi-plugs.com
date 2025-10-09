"use client"

import { Navbar } from "@/components/navbar"
import { ProductGrid } from "@/components/reviews/product-grid"
import { FilterSection } from "@/components/reviews/filter-section"
import { useState } from "react"

export default function ReviewsPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-5xl font-bold text-gray-900 sm:text-6xl text-balance animate-slide-in-up">
              Smart Plug Reviews
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 leading-relaxed animate-slide-in-up animation-delay-200">
              Expert reviews and detailed comparisons to help you choose the perfect smart plug
            </p>
          </div>

          <FilterSection activeFilter={activeFilter} onFilterChange={setActiveFilter} />
          <ProductGrid filter={activeFilter} />
        </div>
      </div>
    </main>
  )
}
