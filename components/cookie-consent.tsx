"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-slide-in-left">
      <div className="mx-auto max-w-7xl">
        <div className="relative flex flex-col gap-4 rounded-2xl border border-border bg-card/95 p-6 shadow-2xl backdrop-blur-sm md:flex-row md:items-center md:justify-between">
          <button
            onClick={acceptCookies}
            className="absolute right-4 top-4 text-muted-foreground hover:text-foreground md:hidden"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <p className="pr-8 text-sm text-card-foreground md:pr-0 md:text-base">
            This website uses cookies to enhance your experience and analyse site usage. By continuing, you consent to
            our use of cookies.
          </p>
          <div className="flex gap-3">
            <Button onClick={acceptCookies} className="whitespace-nowrap">
              Accept Cookies
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
