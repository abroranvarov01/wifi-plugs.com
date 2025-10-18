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
		amazonLink: "https://www.amazon.com/TP-Link-Kasa-Smart-Wifi-Plug/dp/B07RCNB2L3",
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
		amazonLink: "https://www.amazon.com/Amazon-smart-plug-works-with-Alexa/dp/B089DR29T6",
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
		amazonLink: "https://www.amazon.com/43K-720-0224R-Compatible-Assistant-HomeKit-F7C063-CC/dp/B07Y1BNZGQ",
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
		amazonLink: "https://www.amazon.com/Kasa-Smart-Monitoring-Compact-Certified/dp/B0BYGMR4DX",
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
		amazonLink: "https://www.amazon.com/Smart-Compatible-Function-Supports-Required/dp/B09JZKK3KS",
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
		amazonLink: "https://www.amazon.com/Smart-Outdoor-Outlet-Compatible-HomeKit/dp/B08BFGRY9C",
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
		amazonLink: "https://www.amazon.com/WYZE-Outdoor-Plug-Monitoring-Compatible/dp/B08NXY7WWX",
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
		amazonLink: "https://www.amazon.com/Kasa-Smart-Dimmable-800Lumens-KL110P4/dp/B08YP6T6GK",
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
		amazonLink: "https://www.amazon.com/Eve-Energy-Strip-overvoltage-overcurrent/dp/B07PX57RH4",
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
					className={`group overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-2 ${isInView ? "animate-slide-in-up" : "opacity-0"
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
										className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
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
