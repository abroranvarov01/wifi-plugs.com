"use client"

import { Wifi, Smartphone, Clock, Shield, Zap, Globe } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { useRef } from "react"

const features = [
  {
    icon: Wifi,
    title: "WiFi Connectivity",
    description: "Connect seamlessly to your home network for instant control and monitoring.",
  },
  {
    icon: Smartphone,
    title: "App Control",
    description: "Manage all your devices from anywhere using intuitive mobile apps.",
  },
  {
    icon: Clock,
    title: "Scheduling",
    description: "Set timers and schedules to automate your daily routines effortlessly.",
  },
  {
    icon: Shield,
    title: "Energy Monitoring",
    description: "Track power consumption and reduce your electricity bills intelligently.",
  },
  {
    icon: Zap,
    title: "Voice Control",
    description: "Works with Alexa, Google Assistant, and Siri for hands-free operation.",
  },
  {
    icon: Globe,
    title: "Remote Access",
    description: "Control your devices from anywhere in the world with internet access.",
  },
]

export function FeaturesSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref)

  return (
    <section id="features" ref={ref} className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 to-white" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-4xl font-bold text-gray-900 sm:text-5xl text-balance">
            Why Choose Smart WiFi Plugs?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 leading-relaxed">
            Experience the convenience and efficiency of modern smart home technology
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 ${
                isInView ? "animate-slide-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white group-hover:scale-110 transition-transform">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-semibold text-gray-900 text-lg">{feature.title}</h3>
              <p className="mt-2 text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
