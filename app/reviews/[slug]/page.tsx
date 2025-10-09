import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Star, Check, X, Zap, Wifi, Shield, DollarSign, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { products } from "@/lib/products-data"

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export default function ProductReviewPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-pink-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Link
          href="/reviews"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Reviews
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="relative">
            <div className="sticky top-8 bg-white rounded-3xl p-8 shadow-xl">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-auto object-contain"
              />
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-semibold text-lg">{product.rating}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{product.reviews} reviews</p>
                </div>
                <div className="text-right">
                  
                  <Badge variant="secondary" className="mt-2">
                    {product.category}
                  </Badge>
                </div>
              </div>
              <Button className="w-full mt-6 h-12 text-lg" size="lg" asChild>
                <a href={product.amazonLink} target="_blank" rel="noopener noreferrer">
                  View on Amazon <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">{product.name}</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">{product.description}</p>

            {/* Key Features */}
            <div className="mb-8">
              <h2 className="font-serif text-2xl font-bold mb-4">Key Features</h2>
              <div className="space-y-3">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 rounded-full bg-primary/10 p-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div className="mb-8">
              <h2 className="font-serif text-2xl font-bold mb-4">Specifications</h2>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="bg-white/60 backdrop-blur-sm rounded-xl p-4">
                    <p className="text-sm text-muted-foreground mb-1">{key}</p>
                    <p className="font-semibold">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Review */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl mb-12">
          <h2 className="font-serif text-3xl font-bold mb-6">Our Detailed Review</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">{product.detailedReview.intro}</p>

            <h3 className="font-serif text-2xl font-bold mt-8 mb-4">Performance</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">{product.detailedReview.performance}</p>

            <h3 className="font-serif text-2xl font-bold mt-8 mb-4">Setup & Ease of Use</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">{product.detailedReview.setup}</p>

            <h3 className="font-serif text-2xl font-bold mt-8 mb-4">Value for Money</h3>
            <p className="text-muted-foreground leading-relaxed">{product.detailedReview.value}</p>
          </div>
        </div>

        {/* Pros and Cons */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-green-50 rounded-3xl p-8 shadow-lg">
            <h3 className="font-serif text-2xl font-bold mb-6 flex items-center gap-2">
              <Check className="h-6 w-6 text-green-600" />
              Pros
            </h3>
            <ul className="space-y-3">
              {product.pros.map((pro, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{pro}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-red-50 rounded-3xl p-8 shadow-lg">
            <h3 className="font-serif text-2xl font-bold mb-6 flex items-center gap-2">
              <X className="h-6 w-6 text-red-600" />
              Cons
            </h3>
            <ul className="space-y-3">
              {product.cons.map((con, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Rating Breakdown */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl mb-12">
          <h2 className="font-serif text-3xl font-bold mb-8">Rating Breakdown</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {product.ratingBreakdown.map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {item.icon === "zap" && <Zap className="h-5 w-5 text-primary" />}
                    {item.icon === "wifi" && <Wifi className="h-5 w-5 text-primary" />}
                    {item.icon === "shield" && <Shield className="h-5 w-5 text-primary" />}
                    {item.icon === "dollar" && <DollarSign className="h-5 w-5 text-primary" />}
                    <span className="font-semibold">{item.category}</span>
                  </div>
                  <span className="font-bold text-primary">{item.score}/10</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
                    style={{ width: `${item.score * 10}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final Verdict */}
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12 shadow-xl text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">Final Verdict</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">{product.verdict}</p>
          <Button size="lg" className="h-14 px-8 text-lg" asChild>
            <a href={product.amazonLink} target="_blank" rel="noopener noreferrer">
              Buy on Amazon <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
