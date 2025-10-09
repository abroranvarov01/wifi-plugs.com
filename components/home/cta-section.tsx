import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-600 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/abstract-waves.png')] opacity-10" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-serif text-4xl font-bold sm:text-5xl text-balance">Ready to Upgrade Your Home?</h2>
        <p className="mx-auto mt-6 max-w-2xl text-xl text-blue-100 leading-relaxed">
          Explore our comprehensive reviews and find the perfect smart plug for your needs today.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" variant="secondary" className="group">
            <Link href="/reviews">
              Browse All Reviews
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 bg-transparent"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
