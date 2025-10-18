"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Emma Collins",
    role: "Homeowner",
    content:
      "These smart plugs have completely transformed how I manage my home. I can control everything from my phone, and my energy bills have dropped significantly!",
    rating: 5,
    image: "/woman-portrait.png",
  },
  {
    name: "Ethan Parker",
    role: "Tech Enthusiast",
    content:
      "The reviews on this site helped me choose the perfect smart plug. Setup was incredibly easy, and the voice control integration works flawlessly.",
    rating: 5,
    image: "/thoughtful-man-portrait.png",
  },
  {
    name: "Sophia Bennett",
    role: "Busy Professional",
    content:
      "I love being able to schedule my coffee maker and lights. It's made my mornings so much easier, and I feel more secure knowing I can check on things remotely.",
    rating: 5,
    image: "/professional-woman.png",
  },
]

export function TestimonialsSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref)

  return (
    <section ref={ref} className="relative py-24 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-4xl font-bold text-gray-900 sm:text-5xl text-balance">What Our Readers Say</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 leading-relaxed">
            Join thousands of satisfied smart home enthusiasts
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className={`${isInView ? "animate-slide-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">{testimonial.content}</p>
                <div className="mt-6 flex items-center gap-3">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
