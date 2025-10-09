"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"

const stats = [
  { value: "50K+", label: "Happy Customers" },
  { value: "200+", label: "Products Reviewed" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "24/7", label: "Expert Support" },
]

export function StatsSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref)

  return (
    <section
      ref={ref}
      className="relative py-24 bg-gradient-to-br from-cyan-600 to-blue-700 text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/abstract-circuit-pattern.png')] opacity-10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center ${isInView ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="font-serif text-5xl font-bold">{stat.value}</p>
              <p className="mt-2 text-cyan-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
