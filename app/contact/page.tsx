import { Mail, MessageSquare, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-pink-50">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-center text-balance">Get in Touch</h1>
        <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto leading-relaxed">
          Have questions, suggestions, or feedback? We'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-lg text-center">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-bold mb-2">Email Us</h3>
            <p className="text-sm text-muted-foreground">contact@wifi-plugs.com</p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-lg text-center">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-bold mb-2">Response Time</h3>
            <p className="text-sm text-muted-foreground">Within 24-48 hours</p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-lg text-center">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
              <MessageSquare className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-bold mb-2">Feedback</h3>
            <p className="text-sm text-muted-foreground">We value your input</p>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">
          <h2 className="font-serif text-3xl font-bold mb-8">Send Us a Message</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Name
                </label>
                <Input id="name" placeholder="Your name" className="h-12" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email
                </label>
                <Input id="email" type="email" placeholder="your@email.com" className="h-12" />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                Subject
              </label>
              <Input id="subject" placeholder="What's this about?" className="h-12" />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                Message
              </label>
              <Textarea id="message" placeholder="Tell us more..." className="min-h-[200px] resize-none" />
            </div>

            <Button type="submit" size="lg" className="w-full h-12 text-lg">
              Send Message
            </Button>
          </form>
        </div>

        <div className="mt-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12 shadow-xl">
          <h2 className="font-serif text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Do you accept product review requests?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Yes! We're always looking for new products to review. Please email us with details about your product.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Can I suggest a product for review?</h3>
              <p className="text-muted-foreground leading-relaxed">
                We love hearing from our readers about products they'd like to see reviewed.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Do you offer technical support?</h3>
              <p className="text-muted-foreground leading-relaxed">
                While we can't provide direct technical support, we're happy to point you in the right direction or
                answer general questions about smart plugs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
