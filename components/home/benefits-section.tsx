"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { TrendingDown, Home, Leaf, Lock } from "lucide-react"

const benefits = [
  {
    icon: TrendingDown,
    title: "Save Money",
    description: "Reduce energy bills by up to 30% with smart scheduling and monitoring.",
    stat: "30%",
  },
  {
    icon: Home,
    title: "Convenience",
    description: "Control all your devices from one app, anywhere in the world.",
    stat: "24/7",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Lower your carbon footprint with intelligent power management.",
    stat: "Green",
  },
  {
    icon: Lock,
    title: "Security",
    description: "Simulate presence at home with automated lighting schedules.",
    stat: "Safe",
  },
]

export function BenefitsSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref)

  return (
    <section ref={ref} className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl font-bold text-gray-900 sm:text-5xl text-balance">
              The Benefits of Going Smart
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Smart WiFi plugs offer more than just convenience. They're an investment in your home's efficiency,
              security, and sustainability.
            </p>

            <div className="mt-10 space-y-6">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className={`flex gap-4 ${isInView ? "animate-slide-in-left" : "opacity-0"}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">{benefit.title}</h3>
                    <p className="mt-1 text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`relative ${isInView ? "animate-fade-in" : "opacity-0"}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 blur-3xl" />
            <img
              src="/smart-home-dashboard.png"
              alt="Smart Home Benefits"
              className="relative rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
