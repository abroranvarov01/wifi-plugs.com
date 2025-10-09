"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is a smart WiFi plug?",
    answer:
      "A smart WiFi plug is a device that plugs into your standard electrical outlet and allows you to control whatever is plugged into it via a smartphone app or voice commands. It connects to your home WiFi network for remote control and automation.",
  },
  {
    question: "Do smart plugs work with Alexa and Google Home?",
    answer:
      "Yes, most modern smart plugs are compatible with popular voice assistants including Amazon Alexa, Google Assistant, and Apple HomeKit. Always check the product specifications to confirm compatibility with your preferred platform.",
  },
  {
    question: "Can smart plugs help reduce energy bills?",
    answer:
      "Smart plugs with energy monitoring features let you track power consumption and identify energy-hungry devices. By scheduling devices to turn off when not needed and eliminating phantom power draw, you can reduce your energy bills by up to 30%.",
  },
  {
    question: "Are smart plugs difficult to set up?",
    answer:
      "Not at all! Most smart plugs can be set up in just a few minutes. Simply plug it in, download the manufacturer's app, connect to your WiFi network, and you're ready to go. Our detailed reviews include setup guides for each product.",
  },
  {
    question: "Can I use smart plugs outdoors?",
    answer:
      "Some smart plugs are specifically designed for outdoor use with weatherproof enclosures. However, standard indoor smart plugs should not be used outdoors. Always check the product specifications and look for outdoor-rated models if you need exterior control.",
  },
]

export function FAQSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref)

  return (
    <section ref={ref} className="relative py-24 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-4xl font-bold text-gray-900 sm:text-5xl text-balance">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 leading-relaxed">
            Everything you need to know about smart WiFi plugs
          </p>
        </div>

        <div className={`mt-16 ${isInView ? "animate-fade-in" : "opacity-0"}`}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
