"use client"

import { Button } from "@/components/ui/button"
import { SlidersHorizontal } from "lucide-react"

interface FilterSectionProps {
  activeFilter: string
  onFilterChange: (filter: string) => void
}

export function FilterSection({ activeFilter, onFilterChange }: FilterSectionProps) {
  const filters = [
    { id: "all", label: "All Products" },
    { id: "best-rated", label: "Best Rated" },
    { id: "budget", label: "Budget Friendly" },
    { id: "premium", label: "Premium" },
    { id: "energy", label: "Energy Monitoring" },
  ]

  return (
    <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-white p-6 shadow-sm">
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <Button
            key={filter.id}
            variant={activeFilter === filter.id ? "default" : "outline"}
            size="sm"
            onClick={() => onFilterChange(filter.id)}
            className="transition-all"
          >
            {filter.label}
          </Button>
        ))}
      </div>
      
    </div>
  )
}
