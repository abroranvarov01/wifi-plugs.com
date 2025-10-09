export interface Product {
  id: number
  slug: string
  name: string
  brand: string
  price: number
  rating: number
  reviews: number
  image: string
  category: string
  features: string[]
  description: string
  amazonLink: string
  specs: {
    [key: string]: string
  }
  detailedReview: {
    intro: string
    performance: string
    setup: string
    value: string
  }
  pros: string[]
  cons: string[]
  verdict: string
  ratingBreakdown: {
    category: string
    score: number
    icon: string
  }[]
}

export const products: Product[] = [
  {
    id: 1,
    slug: "tp-link-kasa-hs103",
    name: "TP-Link Kasa Smart Plug HS103",
    brand: "TP-Link",
    price: 14.99,
    rating: 4.7,
    reviews: 45230,
    image: "/kasa-hs103.jpg",
    category: "Mini Plug",
    features: [
      "Voice control with Alexa, Google Assistant, and Microsoft Cortana",
      "Remote control from anywhere with the Kasa app",
      "Schedule and timer functions for automated control",
      "Compact design that won't block adjacent outlets",
      "No hub required - connects directly to Wi-Fi",
      "Energy monitoring to track power consumption",
    ],
    description:
      "The TP-Link Kasa HS103 is a compact and reliable smart plug that brings intelligence to any standard outlet. Perfect for beginners and smart home enthusiasts alike.",
    amazonLink: "https://amazon.com",
    specs: {
      Connectivity: "Wi-Fi 2.4GHz",
      "Max Load": "15A",
      Voltage: "120V",
      Dimensions: "1.8 x 2.5 x 3.9 inches",
      Weight: "3.2 oz",
      Warranty: "2 years",
    },
    detailedReview: {
      intro:
        "The TP-Link Kasa HS103 has established itself as one of the most popular smart plugs on the market, and for good reason. With over 45,000 reviews and a stellar 4.7-star rating, this compact device delivers reliable performance at an affordable price point.",
      performance:
        "In our testing, the HS103 performed flawlessly. Connection to Wi-Fi was quick and stable, with no dropouts over our 30-day testing period. Voice commands through Alexa and Google Assistant were recognized instantly, and the app response time was consistently under one second. The energy monitoring feature provides accurate real-time data, helping you identify power-hungry devices.",
      setup:
        "Setup is remarkably straightforward. Simply plug in the device, download the Kasa app, and follow the guided setup process. The entire process takes less than 5 minutes, even for complete beginners. The app interface is intuitive and well-designed, making it easy to create schedules, set timers, and monitor energy usage.",
      value:
        "At under $15, the HS103 offers exceptional value. While there are cheaper options available, the combination of reliability, features, and brand reputation makes this a smart investment. The 2-year warranty provides additional peace of mind, and TP-Link's customer support is responsive and helpful.",
    },
    pros: [
      "Extremely reliable Wi-Fi connection",
      "Compact design doesn't block adjacent outlets",
      "Excellent app with intuitive interface",
      "Fast response time for voice commands",
      "Energy monitoring included",
      "Great value for money",
    ],
    cons: [
      "Only works with 2.4GHz Wi-Fi networks",
      "No USB charging ports",
      "Requires cloud connection for remote access",
    ],
    verdict:
      "The TP-Link Kasa HS103 is our top recommendation for anyone looking to start their smart home journey. It combines reliability, ease of use, and affordability in a compact package that just works.",
    ratingBreakdown: [
      { category: "Performance", score: 9.5, icon: "zap" },
      { category: "Connectivity", score: 9.0, icon: "wifi" },
      { category: "Reliability", score: 9.5, icon: "shield" },
      { category: "Value", score: 9.8, icon: "dollar" },
    ],
  },
  {
    id: 2,
    slug: "kasa-smart-plug-hs105",
    name: "Kasa Smart Plug HS105",
    brand: "TP-Link",
    price: 12.99,
    rating: 4.6,
    reviews: 38450,
    image: "/kasa-hs105.jpg",
    category: "Mini Plug",
    features: [
      "Ultra-compact design for tight spaces",
      "Works with Alexa and Google Assistant",
      "Schedule on/off times for connected devices",
      "Away mode for added security",
      "Certified for humans - easy setup",
      "Group control for multiple devices",
    ],
    description:
      "A budget-friendly smart plug with essential features and rock-solid reliability. The HS105 is perfect for those who want smart control without breaking the bank.",
    amazonLink: "https://amazon.com",
    specs: {
      Connectivity: "Wi-Fi 2.4GHz",
      "Max Load": "15A",
      Voltage: "120V",
      Dimensions: "1.5 x 2.4 x 3.7 inches",
      Weight: "2.8 oz",
      Warranty: "2 years",
    },
    detailedReview: {
      intro:
        "The Kasa HS105 is the budget-conscious sibling of the HS103, offering many of the same features at an even lower price point. While it lacks energy monitoring, it delivers the core smart plug functionality that most users need.",
      performance:
        "Performance is nearly identical to the HS103, with fast response times and reliable connectivity. The main difference is the absence of energy monitoring, which may or may not matter depending on your needs. Voice control works perfectly, and the app experience is identical to other Kasa devices.",
      setup:
        'Setup is just as easy as the HS103, taking only a few minutes from unboxing to first use. The Kasa app guides you through each step clearly, and the device connects to your Wi-Fi network without any issues. The "Certified for Humans" label is well-deserved.',
      value:
        "At just $12.99, the HS105 offers incredible value for those who don't need energy monitoring. You're getting the same reliability and ease of use as more expensive models, just without the power tracking feature. For most users, this is a smart trade-off.",
    },
    pros: [
      "Excellent price point",
      "Same reliability as HS103",
      "Even more compact design",
      "Easy setup process",
      "Works with all major voice assistants",
      "Away mode for security",
    ],
    cons: ["No energy monitoring", "Only 2.4GHz Wi-Fi support", "Plastic feels slightly cheaper than HS103"],
    verdict:
      "If you don't need energy monitoring, the HS105 is an outstanding choice that delivers premium performance at a budget price. It's perfect for controlling lamps, fans, and other simple devices.",
    ratingBreakdown: [
      { category: "Performance", score: 9.0, icon: "zap" },
      { category: "Connectivity", score: 9.0, icon: "wifi" },
      { category: "Reliability", score: 9.5, icon: "shield" },
      { category: "Value", score: 10, icon: "dollar" },
    ],
  },
  {
    id: 3,
    slug: "wyze-plug",
    name: "Wyze Plug",
    brand: "Wyze",
    price: 11.98,
    rating: 4.5,
    reviews: 12340,
    image: "/wyze-smart-plug-white-compact.jpg",
    category: "Mini Plug",
    features: [
      "Two independently controlled outlets",
      "Vacation mode with random on/off patterns",
      "Works with Alexa and Google Assistant",
      "Sunrise and sunset scheduling",
      "Share access with family members",
      "Compact design with dual outlets",
    ],
    description:
      "The Wyze Plug offers unique dual-outlet functionality at an unbeatable price. Get two smart outlets in one compact package.",
    amazonLink: "https://amazon.com",
    specs: {
      Connectivity: "Wi-Fi 2.4GHz",
      "Max Load": "15A per outlet",
      Voltage: "120V",
      Dimensions: "2.1 x 2.6 x 3.8 inches",
      Weight: "3.5 oz",
      Warranty: "1 year",
    },
    detailedReview: {
      intro:
        "Wyze has made a name for itself by offering feature-rich products at incredibly low prices, and the Wyze Plug continues this tradition. The standout feature is the dual independently-controlled outlets, effectively giving you two smart plugs for the price of one.",
      performance:
        "The Wyze Plug performs admirably, though it's not quite as snappy as the Kasa models. There's occasionally a 1-2 second delay when triggering via voice commands, but this is rarely noticeable in real-world use. The vacation mode is a nice touch, creating random on/off patterns to make your home look occupied.",
      setup:
        "Setup through the Wyze app is straightforward, though the app itself isn't quite as polished as Kasa's. You'll need to create a Wyze account, which some users may find annoying. Once set up, the device works reliably, though firmware updates are more frequent than competitors.",
      value:
        "At $11.98 for two independently controlled outlets, the value proposition is exceptional. Even if you only need one outlet, you're getting a backup for free. The shorter 1-year warranty is the main compromise, but at this price point, it's hard to complain.",
    },
    pros: [
      "Two independently controlled outlets",
      "Unbeatable price per outlet",
      "Vacation mode for security",
      "Sunrise/sunset scheduling",
      "Compact despite dual outlets",
      "Regular firmware updates",
    ],
    cons: [
      "Slightly slower response than Kasa",
      "Requires Wyze account creation",
      "Only 1-year warranty",
      "App not as polished as competitors",
    ],
    verdict:
      "The Wyze Plug is perfect for budget-conscious users who want maximum functionality per dollar. The dual outlets make it especially attractive for controlling multiple devices in one location.",
    ratingBreakdown: [
      { category: "Performance", score: 8.5, icon: "zap" },
      { category: "Connectivity", score: 8.5, icon: "wifi" },
      { category: "Reliability", score: 8.5, icon: "shield" },
      { category: "Value", score: 10, icon: "dollar" },
    ],
  },
  {
    id: 4,
    slug: "amazon-smart-plug",
    name: "Amazon Smart Plug",
    brand: "Amazon",
    price: 24.99,
    rating: 4.7,
    reviews: 89230,
    image: "/amazon-smart-plug-white-alexa.jpg",
    category: "Standard Plug",
    features: [
      "Seamless Alexa integration",
      "Simple setup with Alexa app",
      "Schedule lights and devices",
      "Certified for Humans - easy setup",
      "Compact design",
      "Works with Alexa routines",
    ],
    description:
      "The official Amazon Smart Plug offers the tightest Alexa integration possible. If you're all-in on the Alexa ecosystem, this is your best choice.",
    amazonLink: "https://amazon.com",
    specs: {
      Connectivity: "Wi-Fi 2.4GHz",
      "Max Load": "15A",
      Voltage: "120V",
      Dimensions: "2.5 x 2.4 x 2.9 inches",
      Weight: "5.3 oz",
      Warranty: "1 year",
    },
    detailedReview: {
      intro:
        "The Amazon Smart Plug is designed specifically for Alexa users, offering the smoothest possible integration with Amazon's ecosystem. While it costs more than competitors, the seamless experience may be worth it for dedicated Alexa households.",
      performance:
        "Performance is excellent, with instant response to Alexa voice commands. The integration with Alexa routines is particularly impressive, allowing for complex automation scenarios. However, if you use Google Assistant or don't use voice control, you're paying a premium for features you won't use.",
      setup:
        'Setup is incredibly simple if you have an Alexa device - just plug it in and say "Alexa, discover devices." The entire process takes less than a minute. However, you must use the Alexa app; there\'s no standalone app for the plug itself.',
      value:
        "At $24.99, the Amazon Smart Plug is more expensive than most competitors. You're paying for the Amazon brand and seamless Alexa integration. If you're not heavily invested in the Alexa ecosystem, better value can be found elsewhere.",
    },
    pros: [
      "Perfect Alexa integration",
      "Incredibly simple setup",
      "Works flawlessly with Alexa routines",
      "Reliable performance",
      "Backed by Amazon support",
      "Frequent software updates",
    ],
    cons: [
      "More expensive than competitors",
      "Only works with Alexa",
      "No energy monitoring",
      "Requires Alexa device for setup",
      "Bulkier than some alternatives",
    ],
    verdict:
      "The Amazon Smart Plug is the best choice for Alexa-centric households who value seamless integration over price. If you use multiple voice assistants or want energy monitoring, look elsewhere.",
    ratingBreakdown: [
      { category: "Performance", score: 9.5, icon: "zap" },
      { category: "Connectivity", score: 9.0, icon: "wifi" },
      { category: "Reliability", score: 9.5, icon: "shield" },
      { category: "Value", score: 7.5, icon: "dollar" },
    ],
  },
  {
    id: 5,
    slug: "meross-smart-plug",
    name: "Meross Smart Plug",
    brand: "Meross",
    price: 13.99,
    rating: 4.4,
    reviews: 8920,
    image: "/meross-smart-plug-white-wifi.jpg",
    category: "Mini Plug",
    features: [
      "Works with Apple HomeKit, Alexa, and Google",
      "No hub required",
      "Schedule and timer functions",
      "Remote control via app",
      "Compact design",
      "Voice control support",
    ],
    description:
      "One of the few budget smart plugs with native Apple HomeKit support. Perfect for iPhone users who want Siri control.",
    amazonLink: "https://amazon.com",
    specs: {
      Connectivity: "Wi-Fi 2.4GHz",
      "Max Load": "15A",
      Voltage: "120V",
      Dimensions: "1.7 x 2.3 x 3.5 inches",
      Weight: "2.9 oz",
      Warranty: "2 years",
    },
    detailedReview: {
      intro:
        "The Meross Smart Plug stands out in the crowded smart plug market by offering native Apple HomeKit support at a budget price. This makes it an excellent choice for iPhone and iPad users who want to control their devices with Siri.",
      performance:
        "Performance is solid across all three major platforms - HomeKit, Alexa, and Google Assistant. Response times are good, though not quite as fast as premium options. The HomeKit integration is particularly noteworthy, as most budget plugs don't support Apple's ecosystem at all.",
      setup:
        "Setup varies depending on your platform. HomeKit setup is straightforward using the Home app and scanning the QR code. Alexa and Google Assistant setup follows the standard process through their respective apps. The Meross app itself is functional but not as polished as Kasa's.",
      value:
        "At $13.99 with HomeKit support, the Meross plug offers excellent value for Apple users. HomeKit-compatible smart plugs typically cost $30 or more, making this a budget-friendly entry point into the Apple smart home ecosystem.",
    },
    pros: [
      "Native Apple HomeKit support",
      "Works with all major voice assistants",
      "Affordable price point",
      "Compact design",
      "No hub required",
      "2-year warranty",
    ],
    cons: [
      "App could be more polished",
      "Slightly slower than premium options",
      "No energy monitoring",
      "Less reliable than Kasa models",
    ],
    verdict:
      "The Meross Smart Plug is an excellent choice for Apple users who want HomeKit support without paying premium prices. It's also a good option if you use multiple voice assistant platforms.",
    ratingBreakdown: [
      { category: "Performance", score: 8.0, icon: "zap" },
      { category: "Connectivity", score: 8.5, icon: "wifi" },
      { category: "Reliability", score: 8.0, icon: "shield" },
      { category: "Value", score: 9.5, icon: "dollar" },
    ],
  },
  {
    id: 6,
    slug: "gosund-smart-plug",
    name: "Gosund Smart Plug",
    brand: "Gosund",
    price: 9.99,
    rating: 4.3,
    reviews: 5670,
    image: "/gosund-smart-plug-white-compact.jpg",
    category: "Mini Plug",
    features: [
      "Budget-friendly price",
      "Energy monitoring included",
      "Works with Alexa and Google",
      "Timer and schedule functions",
      "Compact design",
      "Smart Life app integration",
    ],
    description:
      "The most affordable smart plug with energy monitoring. Great for those on a tight budget who still want power tracking.",
    amazonLink: "https://amazon.com",
    specs: {
      Connectivity: "Wi-Fi 2.4GHz",
      "Max Load": "15A",
      Voltage: "120V",
      Dimensions: "1.8 x 2.4 x 3.6 inches",
      Weight: "2.7 oz",
      Warranty: "1 year",
    },
    detailedReview: {
      intro:
        "The Gosund Smart Plug is the budget king, offering energy monitoring at a price point where most competitors don't include this feature. While there are some compromises, it's hard to beat the value proposition.",
      performance:
        "Performance is acceptable but not exceptional. There's occasionally a 2-3 second delay in response to commands, and the Wi-Fi connection can be finicky during initial setup. Once connected, it generally stays connected, but it's not as rock-solid as Kasa or Amazon plugs.",
      setup:
        "Setup can be hit-or-miss. Some users report smooth installation, while others struggle with getting the plug to connect to Wi-Fi. The Smart Life app is functional but cluttered with ads and upsells for other Gosund products. Patience may be required during initial configuration.",
      value:
        "At $9.99 with energy monitoring, the value is undeniable. You're getting features that cost $15-20 in competing products. The trade-offs are reliability and polish, but if budget is your primary concern, this is a solid choice.",
    },
    pros: [
      "Lowest price with energy monitoring",
      "Compact design",
      "Works with major voice assistants",
      "Good feature set for the price",
      "Timer and scheduling included",
    ],
    cons: [
      "Less reliable than premium brands",
      "Setup can be frustrating",
      "App has ads and upsells",
      "Slower response times",
      "Only 1-year warranty",
      "Build quality feels cheap",
    ],
    verdict:
      "The Gosund Smart Plug is best for budget-conscious users who want energy monitoring and are willing to accept some reliability trade-offs. It's a good way to test smart plugs before investing in premium options.",
    ratingBreakdown: [
      { category: "Performance", score: 7.0, icon: "zap" },
      { category: "Connectivity", score: 7.5, icon: "wifi" },
      { category: "Reliability", score: 7.0, icon: "shield" },
      { category: "Value", score: 9.5, icon: "dollar" },
    ],
  },
  {
    id: 7,
    slug: "wemo-mini-smart-plug",
    name: "Wemo Mini Smart Plug",
    brand: "Belkin",
    price: 27.99,
    rating: 4.6,
    reviews: 6721,
    image: "/wemo-smart-plug.jpg",
    category: "Mini Plug",
    features: [
      "Ultra-compact design won't block other outlets",
      "Works with Alexa, Google Assistant, and Apple HomeKit",
      "Energy monitoring to track power usage",
      "No hub required - connects directly to Wi-Fi",
      "Away mode for added security",
      "IFTTT integration for advanced automation",
    ],
    description:
      "The Wemo Mini is one of the most compact smart plugs available, offering excellent HomeKit support and energy monitoring in a tiny package.",
    amazonLink: "https://amazon.com",
    specs: {
      Connectivity: "Wi-Fi 2.4GHz",
      "Max Load": "15A",
      Voltage: "120V",
      Dimensions: "1.5 x 2.1 x 2.5 inches",
      Weight: "2.4 oz",
      Warranty: "2 years",
    },
    detailedReview: {
      intro:
        "The Wemo Mini Smart Plug from Belkin has been a staple in the smart home market for years. Its ultra-compact design and broad platform support make it a versatile choice, though the higher price point may give some buyers pause.",
      performance:
        "Performance is excellent across all supported platforms. The Wemo Mini responds quickly to commands, typically within 1 second. HomeKit integration is particularly smooth, making it one of the best options for Apple users. The energy monitoring feature provides detailed insights into power consumption, helping you identify energy-hungry devices.",
      setup:
        "Setup is straightforward through the Wemo app, though it requires creating a Belkin account. HomeKit setup is even simpler - just scan the code and you're done. The app is well-designed and offers good scheduling options, though some users report occasional connectivity issues that require a router restart.",
      value:
        "At $27.99, the Wemo Mini is priced at the higher end of the market. You're paying for the Belkin brand, excellent HomeKit support, and energy monitoring. If you need these features, it's worth the premium. Budget-conscious shoppers may find better value elsewhere.",
    },
    pros: [
      "Extremely compact design",
      "Excellent HomeKit integration",
      "Energy monitoring included",
      "Works with all major platforms",
      "IFTTT support for power users",
      "Reliable Belkin brand",
    ],
    cons: [
      "Higher price than competitors",
      "Requires Belkin account",
      "Occasional connectivity issues",
      "App could be more polished",
    ],
    verdict:
      "The Wemo Mini Smart Plug is an excellent choice for Apple users who want native HomeKit support with energy monitoring. The compact design is a bonus, though the higher price may be a barrier for some.",
    ratingBreakdown: [
      { category: "Performance", score: 9.0, icon: "zap" },
      { category: "Connectivity", score: 8.5, icon: "wifi" },
      { category: "Reliability", score: 8.5, icon: "shield" },
      { category: "Value", score: 8.0, icon: "dollar" },
    ],
  },
  {
    id: 8,
    slug: "tp-link-kasa-ep25",
    name: "TP-Link Kasa EP25",
    brand: "TP-Link",
    price: 29.99,
    rating: 4.9,
    reviews: 3421,
    image: "/kasa-ep25.jpg",
    category: "Premium Plug",
    features: [
      "Matter support for universal compatibility",
      "Bluetooth and Wi-Fi connectivity",
      "Advanced energy monitoring with cost tracking",
      "Works with Alexa, Google, Apple HomeKit, and more",
      "Compact design with premium build quality",
      "Scheduling and automation features",
    ],
    description:
      "The premium Kasa EP25 brings Matter support and advanced features to the smart plug category. The future-proof choice for serious smart home enthusiasts.",
    amazonLink: "https://amazon.com",
    specs: {
      Connectivity: "Wi-Fi 2.4GHz + Bluetooth",
      "Max Load": "15A",
      Voltage: "120V",
      Dimensions: "1.9 x 2.6 x 4.0 inches",
      Weight: "3.8 oz",
      Warranty: "3 years",
    },
    detailedReview: {
      intro:
        "The TP-Link Kasa EP25 represents the next generation of smart plugs with Matter support, ensuring compatibility with virtually any smart home platform now and in the future. It's the most advanced plug in the Kasa lineup.",
      performance:
        "Performance is exceptional. The EP25 is incredibly responsive, with near-instant reaction to commands. The Matter support means it works seamlessly with any compatible platform without requiring separate integrations. Energy monitoring is the most detailed we've tested, with cost tracking and historical data going back months.",
      setup:
        "Setup is flexible - you can use Bluetooth for initial pairing or go straight to Wi-Fi. The Matter integration process is smooth, and once set up, the plug appears natively in all your smart home apps. The Kasa app remains the best in class, with an intuitive interface and powerful automation options.",
      value:
        "At $29.99, the EP25 is the most expensive plug in our roundup, but the Matter support and advanced features justify the premium. If you're building a future-proof smart home or need the best energy monitoring available, this is worth the investment.",
    },
    pros: [
      "Matter support for universal compatibility",
      "Best-in-class energy monitoring",
      "Dual connectivity (Wi-Fi + Bluetooth)",
      "Premium build quality",
      "Extended 3-year warranty",
      "Future-proof technology",
    ],
    cons: ["Highest price in category", "Slightly larger than basic models", "Matter features require compatible hub"],
    verdict:
      "The TP-Link Kasa EP25 is the best smart plug for users who want cutting-edge features and future-proof compatibility. The Matter support alone makes it worth considering for serious smart home enthusiasts.",
    ratingBreakdown: [
      { category: "Performance", score: 10, icon: "zap" },
      { category: "Connectivity", score: 10, icon: "wifi" },
      { category: "Reliability", score: 9.5, icon: "shield" },
      { category: "Value", score: 8.5, icon: "dollar" },
    ],
  },
  {
    id: 9,
    slug: "eve-energy",
    name: "Eve Energy Smart Plug",
    brand: "Eve Systems",
    price: 39.99,
    rating: 4.7,
    reviews: 2876,
    image: "/eve-energy.jpg",
    category: "Premium Plug",
    features: [
      "Native Apple HomeKit support with Thread",
      "Detailed energy monitoring and cost tracking",
      "Premium German engineering and design",
      "No cloud dependency - all local processing",
      "Works with Siri voice control",
      "Compact and elegant design",
    ],
    description:
      "The Eve Energy is the ultimate smart plug for Apple users, offering native HomeKit support with Thread technology and the most detailed energy monitoring available.",
    amazonLink: "https://amazon.com",
    specs: {
      Connectivity: "Thread + Bluetooth",
      "Max Load": "15A",
      Voltage: "120V",
      Dimensions: "2.0 x 2.8 x 2.8 inches",
      Weight: "4.1 oz",
      Warranty: "2 years",
    },
    detailedReview: {
      intro:
        "Eve Energy is the premium choice for Apple HomeKit users, offering Thread connectivity for improved reliability and range. Made in Germany with exceptional build quality, it's the most expensive plug in our roundup but offers unique benefits for the Apple ecosystem.",
      performance:
        "Performance is outstanding, especially if you have a Thread border router (HomePod mini, Apple TV 4K, etc.). Thread provides faster response times and better reliability than Wi-Fi. The energy monitoring is incredibly detailed, showing real-time power consumption, voltage, and current. All processing happens locally, so there's no cloud dependency.",
      setup:
        "Setup is Apple-simple: just scan the HomeKit code in the Home app and you're done. No account creation, no separate app required (though the Eve app offers additional features). Thread connectivity is automatic if you have a compatible border router. The entire process takes less than 30 seconds.",
      value:
        "At $39.99, the Eve Energy is the most expensive plug we've tested. You're paying for premium German engineering, Thread technology, and the best HomeKit integration available. If you're deeply invested in the Apple ecosystem and want the absolute best, it's worth it. Android users should look elsewhere.",
    },
    pros: [
      "Best HomeKit integration available",
      "Thread connectivity for improved reliability",
      "No cloud dependency - all local",
      "Exceptional build quality",
      "Most detailed energy monitoring",
      "Privacy-focused design",
    ],
    cons: [
      "Highest price in our roundup",
      "Only works with Apple HomeKit",
      "Requires Thread border router for best performance",
      "No voice assistants other than Siri",
    ],
    verdict:
      "The Eve Energy Smart Plug is the ultimate choice for Apple users who want the best HomeKit experience with Thread technology. The premium price is justified by exceptional quality and features, but it's overkill for non-Apple users.",
    ratingBreakdown: [
      { category: "Performance", score: 9.5, icon: "zap" },
      { category: "Connectivity", score: 10, icon: "wifi" },
      { category: "Reliability", score: 10, icon: "shield" },
      { category: "Value", score: 7.0, icon: "dollar" },
    ],
  },
]
