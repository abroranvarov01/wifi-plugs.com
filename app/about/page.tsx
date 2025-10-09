import { Shield, Heart, Award, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-pink-50">
      <div className="container mx-auto px-4 py-16 pt-24 max-w-4xl">
        <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-center text-balance">
          About WiFi-Plugs.com
        </h1>
        <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto leading-relaxed">
          Your trusted source for honest, in-depth smart plug reviews and recommendations.
        </p>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl mb-12">
          <h2 className="font-serif text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            At WiFi-Plugs.com, we believe that smart home technology should be accessible to everyone. Our mission is to
            help you make informed decisions about smart plugs and WiFi-enabled devices through comprehensive, unbiased
            reviews and practical buying guides.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We test every product we review in real-world conditions, measuring performance, reliability, and value. Our
            team spends countless hours researching, testing, and comparing products so you don't have to.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-serif text-2xl font-bold mb-3">Honest Reviews</h3>
            <p className="text-muted-foreground leading-relaxed">
              We provide unbiased, honest reviews based on extensive testing. We're not afraid to point out flaws, even
              in popular products.
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-serif text-2xl font-bold mb-3">User-Focused</h3>
            <p className="text-muted-foreground leading-relaxed">
              Every review is written with you in mind. We focus on what matters most to real users: reliability, ease
              of use, and value.
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-serif text-2xl font-bold mb-3">Expert Testing</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our team has years of experience in smart home technology. We know what to look for and how to test it
              properly.
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-serif text-2xl font-bold mb-3">Community Driven</h3>
            <p className="text-muted-foreground leading-relaxed">
              We listen to our readers and incorporate their feedback. Your experiences help us provide better
              recommendations.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12 shadow-xl">
          <h2 className="font-serif text-3xl font-bold mb-6">Transparency & Disclosure</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            WiFi-Plugs.com is a participant in the Amazon Associates Program, an affiliate advertising program designed
            to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            When you purchase products through our links, we may earn a small commission at no additional cost to you.
            This helps us continue providing free, high-quality content and maintain our testing lab.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our affiliate relationships never influence our reviews or recommendations. We only recommend products we
            genuinely believe in, and we're always transparent about both the pros and cons of every product we review.
          </p>
        </div>
      </div>
    </div>
  )
}
