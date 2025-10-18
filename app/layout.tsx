import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { CookieConsent } from "@/components/cookie-consent"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { Suspense } from "react"

const playfair = Playfair_Display({
	subsets: ["latin"],
	variable: "--font-playfair",
	display: "swap",
})

export const metadata: any = {
	title: "WiFi Plugs - Smart Home Solutions | wifi-plugs.com",
	description:
		"Discover the best smart WiFi plugs and sockets for your home. Expert reviews, comparisons, and buying guides for TP-Link, Amazon, and more.",
	keywords: "smart plugs, wifi sockets, smart home, TP-Link Kasa, home automation",
	referrer: 'unsafe-url'
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${playfair.variable}`}>
				<Suspense fallback={<div>Loading...</div>}>
					<Navbar />
					{children}
					<Footer />
					<CookieConsent />
					<Analytics />
				</Suspense>
			</body>
		</html>
	)
}
