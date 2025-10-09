"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"

const steps = [
  {
    number: "01",
    title: "Choose Your Plug",
    description: "Browse our expert reviews and find the perfect smart plug for your needs and budget.",
  },
  {
    number: "02",
    title: "Easy Setup",
    description: "Plug it in, download the app, and connect to your WiFi network in minutes.",
  },
  {
    number: "03",
    title: "Start Controlling",
    description: "Control your devices remotely, set schedules, and monitor energy usage instantly.",
  },
]

export function HowItWorksSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref)

  return (
    <section ref={ref} className="relative py-24 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/tech-grid-pattern.png')] opacity-5" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-4xl font-bold text-gray-900 sm:text-5xl text-balance">How It Works</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 leading-relaxed">
            Get started with smart plugs in three simple steps
          </p>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative ${isInView ? "animate-slide-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 font-serif text-2xl font-bold text-white shadow-lg">
                  {step.number}
                </div>
                <h3 className="mt-6 font-semibold text-gray-900 text-xl">{step.title}</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute top-10 left-1/2 hidden h-0.5 w-full bg-gradient-to-r from-cyan-300 to-blue-300 md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
