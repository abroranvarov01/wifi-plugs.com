"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-100">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute h-96 w-96 rounded-full bg-gradient-to-r from-cyan-200/30 to-blue-300/30 blur-3xl animate-float"
          style={{
            top: "10%",
            left: "10%",
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        />
        <div
          className="absolute h-96 w-96 rounded-full bg-gradient-to-r from-indigo-200/30 to-purple-300/30 blur-3xl animate-float-delayed"
          style={{
            bottom: "10%",
            right: "10%",
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`,
          }}
        />
        <div className="absolute inset-0 bg-[url('/abstract-circuit-pattern.png')] opacity-5 bg-repeat" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-32 pb-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 animate-fade-in">
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Smart Home Revolution</span>
          </div>

          <h1 className="font-serif text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl lg:text-8xl animate-slide-in-up text-balance">
            Transform Your Home with{" "}
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent animate-gradient">
              Smart WiFi Plugs
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl animate-slide-in-up animation-delay-200 leading-relaxed">
            Discover expert reviews, detailed comparisons, and buying guides for the best smart plugs and WiFi sockets.
            Control your home from anywhere.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-slide-in-up animation-delay-400">
            <Button asChild size="lg" className="group">
              <Link href="/reviews">
                Explore Reviews
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#features">Learn More</Link>
            </Button>
          </div>

          <div className="mt-16 animate-fade-in animation-delay-600">
            <div className="relative mx-auto max-w-4xl">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 blur-3xl" />
              <img
                src="/modern-smart-plug-device-on-gradient-background.jpg"
                alt="Smart WiFi Plug"
                className="relative rounded-3xl shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
