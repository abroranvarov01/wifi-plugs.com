"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Check, X } from "lucide-react"

const features = [
  "WiFi Connectivity",
  "Voice Control",
  "Energy Monitoring",
  "Scheduling",
  "Away Mode",
  "Compact Design",
]

const products = [
  {
    name: "TP-Link Kasa",
    features: [true, true, true, true, true, false],
  },
  {
    name: "Amazon Plug",
    features: [true, true, false, true, true, true],
  },
  {
    name: "Wemo Mini",
    features: [true, true, true, true, false, true],
  },
]

export function ComparisonSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref)

  return (
    <section ref={ref} className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-4xl font-bold text-gray-900 sm:text-5xl text-balance">Compare Top Models</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 leading-relaxed">
            See how the leading smart plugs stack up against each other
          </p>
        </div>

        <div className={`mt-16 overflow-x-auto ${isInView ? "animate-fade-in" : "opacity-0"}`}>
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="p-4 text-left font-semibold text-gray-900">Feature</th>
                {products.map((product) => (
                  <th key={product.name} className="p-4 text-center font-semibold text-gray-900">
                    {product.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, featureIndex) => (
                <tr key={feature} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-4 text-gray-700">{feature}</td>
                  {products.map((product, productIndex) => (
                    <td key={`${product.name}-${feature}`} className="p-4 text-center">
                      {product.features[featureIndex] ? (
                        <Check className="mx-auto h-5 w-5 text-green-600" />
                      ) : (
                        <X className="mx-auto h-5 w-5 text-gray-300" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
