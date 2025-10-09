"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ArrowRight, Zap, Wifi } from "lucide-react"
import Link from "next/link"
import { useRef, useMemo } from "react"
import { useInView } from "@/hooks/use-in-view"

const products = [
  {
    id: "tp-link-kasa-hs103",
    name: "TP-Link Kasa Smart Wi-Fi Plug Mini",
    rating: 4.7,
    reviews: 50000,
    price: "$22.99",
    priceValue: 22.99,
    image: "https://m.media-amazon.com/images/I/51zoLDBO0wL._SX522_.jpg",
    amazonLink: "https://www.amazon.com/TP-Link-Kasa-Smart-Wifi-Plug/dp/B07RCNB2L3/ref=sr_1_1?crid=FQ0J5IO5CMDM&dib=eyJ2IjoiMSJ9.TUc_-T2ZQJ_lJHXWUjanyiC5_NiXAHXoqPULB7BBS5VzNixSojKaDiRsGmgZCfX82yJtC08TFvDaire775GIooheEbF_Vhv5SpO-7OTfbGbBMzi3gWcuQ2-GnRv4f0Er.LEL7k6LXDpOUo_xNa4yP5rrgD4O8qULhM_NpRIqZUm0&dib_tag=se&keywords=TP-Link%2BKasa%2BSmart%2BPlug%2BHS103&qid=1760030342&sprefix=tp-link%2Bkasa%2Bsmart%2Bplug%2Bhs103%2Caps%2C742&sr=8-1&th=1",
    badge: "Best Overall",
    features: ["Voice Control", "Remote Control", "Scheduling"],
  },
  {
    id: "amazon-smart-plug",
    name: "Amazon Smart Plug",
    rating: 4.7,
    reviews: 500000,
    price: "$24.99",
    priceValue: 24.99,
    image: "https://m.media-amazon.com/images/I/711nxnsm6nL._AC_SX679_.jpg",
    amazonLink: "https://www.amazon.com/Amazon-smart-plug-works-with-Alexa/dp/B089DR29T6/ref=sr_1_1?crid=2VEU7YAJXAW83&dib=eyJ2IjoiMSJ9.p6R_SdmgXajMqpT0t0FhGlM47olHM9nLCt3s5Zh2TtsISCbvRdkN82ESxWjsEDSH6E03uVzvoT65oenElEIuVxD7Px3oGnsjdWGoGdufDdHAGhXKB1dQKmoNDM6uThfYCUNXvSHIb_6DT006qTQD50v1uQRU0IoFdjQBDTCKnbuO1f0FGYGVSm3nYnlgee7VBFmhJ4caZPAtyjaN0Kqv1dzjfg3Xsb2ETjVtmT9k0yc.fYnwKVUjhL3WDi9o8xVYoGn3SMj_u_WCluwYiiR5MhQ&dib_tag=se&keywords=Amazon%2BSmart%2BPlug&qid=1760030416&sprefix=amazon%2Bsmart%2Bplug%2Caps%2C793&sr=8-1&th=1",
    badge: "Best for Alexa",
    features: ["Alexa Built-in", "Frustration Free Setup", "Compact Design"],
  },
  {
    id: "wemo-mini-smart-plug",
    name: "Wemo Mini Smart Plug",
    rating: 4.4,
    reviews: 10000,
    price: "$18.99",
    priceValue: 18.99,
    image: "https://m.media-amazon.com/images/I/41gZN0esR4L._SX522_.jpg",
    amazonLink: "https://www.amazon.com/43K-720-0224R-Compatible-Assistant-HomeKit-F7C063-CC/dp/B07Y1BNZGQ/ref=sr_1_3?crid=38MI41BIJZL95&dib=eyJ2IjoiMSJ9.0X4ype4RIC8eg9jWuIZxMp_Jrz3B4FzEQx84ZBj5u_ljcmI3tnVhYY0XHEDFLVYP4YsYdlfHVlm8EDIWG8ZtQVHPLSBT63VN2i7BM2-FAQvCQJG0ConorL1Ucqyze9Dc.IZ-L0kkYVRtD0yMfnBNZLnH3cQxF7LG4-XgCKZXQJJM&dib_tag=se&keywords=Wemo+Mini+Smart+Plug&qid=1760030453&sprefix=wemo+mini+smart+plug%2Caps%2C268&sr=8-3",
    badge: "Best for HomeKit",
    features: ["Apple HomeKit", "Voice Control", "Scheduling"],
  },
  {
    id: "kasa-smart-plug-hs105",
    name: "Kasa Smart Plug Mini",
    rating: 4.7,
    reviews: 25000,
    price: "$14.99",
    priceValue: 14.99,
    image: "https://m.media-amazon.com/images/I/61W-tPmagyL._SX522_.jpg",
    amazonLink: "https://www.amazon.com/Kasa-Smart-Monitoring-Compact-Certified/dp/B0BYGMR4DX/ref=sr_1_2?crid=2TPTPRYCGMN4T&dib=eyJ2IjoiMSJ9.alz40NUu5MYlxtuBJr9uGbpGuAPSwuyQ2Ow19ut4pv5KgXakPQisHdfM0b1jD5TKjeRqq-MLGCkn4N2DTjV_OupGQeG0766XV0ohPsGoFuQ.78l9P19GXrzRh1u15Pz1PpTUKDVlRWNfgZAfHGdsYKU&dib_tag=se&keywords=Kasa+Smart+Plug+HS105&qid=1760030482&sprefix=kasa+smart+plug+hs105%2Caps%2C264&sr=8-2",
    badge: "Budget Pick",
    features: ["Energy Monitoring", "Voice Control", "Compact"],
  },
  {
    id: "gosund-smart-plug",
    name: "Gosund Smart Plug Mini",
    rating: 4.4,
    reviews: 3444,
    price: "$25.99",
    priceValue: 25.99,
    image: "https://m.media-amazon.com/images/I/61b-iG0eIQL._SX522_.jpg",
    amazonLink: "https://www.amazon.com/Smart-Compatible-Function-Supports-Required/dp/B09JZKK3KS/ref=sr_1_2?crid=1D6KPACB4GASP&dib=eyJ2IjoiMSJ9.OE9AHOAlx1lBEmAOgl05KosB-l3jlEyto0fLXqITUGKg42hNiXISk2ZkueI09DV0.gcdOqEQfHgMsjYtuaJQUvrYMCWF_h6vL9FshM5HXx9I&dib_tag=se&keywords=Gosund%2BSmart%2BPlug%2BMini&qid=1760030518&sprefix=gosund%2Bsmart%2Bplug%2Bmini%2Caps%2C269&sr=8-2&th=1",
    badge: "Best Value Pack",
    features: ["Alexa & Google", "Timer Function", "No Hub Required"],
  },
  {
    id: "meross-smart-plug",
    name: "Meross Smart Wi-Fi Plug Mini",
    rating: 4.5,
    reviews: 15000,
    price: "$23.99",
    priceValue: 23.99,
    image: "https://m.media-amazon.com/images/I/61pcsEQ-RVL._AC_SX679_.jpg",
    amazonLink: "https://www.amazon.com/Smart-Outdoor-Outlet-Compatible-HomeKit/dp/B08BFGRY9C/ref=sr_1_2?crid=23Y7J7CO8SNN4&dib=eyJ2IjoiMSJ9.0w1GKuCMiE1TMg1iODSIZZF2cAYMlt5wb-9aEppurNWlVnUNt8WsJyaZgqd1M04Bw0WV3kqEpyh3dOR6loqAxk_Rvh8E59UW7zaxO95PsnVI1xbTYg4I0aNIvVycz7tHK_CKPeHiWWvnJ-l6UzGPMGs06uxJvQQ_TYIEvrKdnQmZZCfA0jvz5T2v9rqoNGr0UW0YdEh6nZh-am0Ekz4JmQbU3GxclZh15QSNhLIhe2k.yw-MePY4aeKi9tV-MpVIK4lBsKSIUCxMOVGyCrQefNw&dib_tag=se&keywords=Meross+Smart+WiFi+Plug&qid=1760030546&sprefix=meross+smart+wifi+plug%2Caps%2C284&sr=8-2",
    badge: "Best for HomeKit",
    features: ["HomeKit Compatible", "Voice Control", "Timer"],
  },
  {
    id: "wyze-plug",
    name: "Wyze Plug Outdoor",
    rating: 4.5,
    reviews: 10000,
    price: "$17.98",
    priceValue: 17.98,
    image: "https://m.media-amazon.com/images/I/61bLOooaYDL._AC_SX679_.jpg",
    amazonLink: "https://www.amazon.com/WYZE-Outdoor-Plug-Monitoring-Compatible/dp/B08NXY7WWX/ref=sr_1_2?crid=8FCKSMXBW1L3&dib=eyJ2IjoiMSJ9.PSxSztq2YTQ5oExHMIGYWuYR9vJmj0md8xhGbnYW-4BZh0_NKr32GAWg1gLGZxMxDLOhnEwmmD5pYAk3F0PF-jpaH2XXiXap4ieGUdoicdbAgY3SUqgbFL3ke1zVqIQn3TlCvrL_kyPdPe8c7BwmZN8ZHUlReQq62JK2dQTs3Jz_10s3v5MNM7PC8y99c2NH.UBUjww1UoqbjiWi5KIyeAYqptr0TeLNTepwKk13mLeI&dib_tag=se&keywords=Wyze+Smart+Plug&qid=1760030577&sprefix=wyze+smart+plug%2Caps%2C262&sr=8-2",
    badge: "Best Outdoor",
    features: ["Energy Monitoring", "IP64 Weatherproof", "Voice Control"],
  },
  {
    id: "tp-link-kasa-ep25",
    name: "Kasa Smart Light Bulb 4-Pack",
    rating: 4.6,
    reviews: 15000,
    price: "$23.74",
    priceValue: 23.74,
    image: "https://m.media-amazon.com/images/I/61cXAPt6PwL._AC_SX679_.jpg",
    amazonLink: "https://www.amazon.com/Kasa-Smart-Dimmable-800Lumens-KL110P4/dp/B08YP6T6GK/ref=sr_1_5?crid=Y41BJPC6PCC7&dib=eyJ2IjoiMSJ9.gXSmSSlbbZzsGNyuw1onqgNrYZ0cPs4jvKkDTPCDHRaZYliwF-YnPrcJMjFpWH4-XEQEv2OtWRjOoJ7zAtGtaeAP6F8yfJGh-XGjBQPyg7g.9bx6r4hx_2zr96qMHW91vIMxhnwjCUK_4tKSoLDL2VQ&dib_tag=se&keywords=TP-Link+Kasa+EP25&qid=1760030608&sprefix=tp-link+kasa+ep25%2Caps%2C256&sr=8-5",
    badge: "Best Light Integration",
    features: ["Dimmable", "Voice Control", "No Hub Required"],
  },
  {
    id: "eve-energy",
    name: "Eve Energy Strip",
    rating: 4.5,
    reviews: 500,
    price: "$79.95",
    priceValue: 79.95,
    image: "https://m.media-amazon.com/images/I/41u18y4sgrL._AC_SX679_.jpg",
    amazonLink: "https://www.amazon.com/Eve-Energy-Strip-overvoltage-overcurrent/dp/B07PX57RH4/ref=sr_1_4?crid=SHWC7GU6EPZW&dib=eyJ2IjoiMSJ9.VLT5hD4HsEsW7WlqVKPxjDU9FZz37jw2sMXBZPLEwqtieClUuDiHn2XN7ZTeSzTUl_rWW7VbfQYT7e_sxDUmHjBgFHxNVnLWVR6-qfs5JUkno_jptnnVzqDb_4zH7wdyWTD2-xhmjuIGc7RAw6Qh5DJ6YNtbh2eq7yx2h8IwGzGrT8HqYXgxpJDV5rm_3eYYbqzDUKYgjSyXb05O6LShw2Hfstvt3gQDwgPPCxI2Tok.u7YcPRl2zXv5Ee1Y6dccyjSVdE92l2N51G9S57PTQsU&dib_tag=se&keywords=Eve%2BEnergy%2BSmart%2BPlug&qid=1760030640&sprefix=eve%2Benergy%2Bsmart%2Bplug%2Caps%2C267&sr=8-4&th=1",
    badge: "Premium Choice",
    features: ["Energy Monitoring", "Surge Protection", "HomeKit"],
  },
]

interface ProductGridProps {
  filter: string
}

export function ProductGrid({ filter }: ProductGridProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref)

  const filteredProducts = useMemo(() => {
    switch (filter) {
      case "best-rated":
        return products.filter((p) => p.rating >= 4.7)
      case "budget":
        return products.filter((p) => p.priceValue < 20)
      case "premium":
        return products.filter((p) => p.priceValue >= 29)
      case "energy":
        return products.filter((p) => p.features.some((f) => f.toLowerCase().includes("energy")))
      default:
        return products
    }
  }, [filter])

  return (
    <div ref={ref} className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {filteredProducts.map((product, index) => (
        <Card
          key={product.id}
          className={`group overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-2 ${
            isInView ? "animate-slide-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <CardHeader className="relative p-0">
            <div className="absolute top-4 left-4 z-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-3 py-1 text-xs font-semibold text-white shadow-lg">
              {product.badge}
            </div>
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="h-64 w-full object-cover transition-transform group-hover:scale-105"
            />
          </CardHeader>
          <CardContent className="p-6">
            <h3 className="font-semibold text-gray-900 text-lg line-clamp-2">{product.name}</h3>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                {product.rating} ({product.reviews.toLocaleString()})
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {product.features.map((feature) => (
                <span key={feature} className="rounded-full bg-blue-50 px-2 py-1 text-xs text-blue-700">
                  {feature}
                </span>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between">
              
              <div className="flex gap-1">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-100 text-green-700">
                  <Wifi className="h-4 w-4" />
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                  <Zap className="h-4 w-4" />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="p-6 pt-0">
            <Button asChild className="w-full group">
              <Link href={`/reviews/${product.id}`}>
                Read Full Review
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
