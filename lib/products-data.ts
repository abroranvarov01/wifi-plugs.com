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

export const products = [
  {
    id: 1,
    slug: "tp-link-kasa-hs103",
    name: "TP-Link Kasa Smart Wi-Fi Plug Mini",
    brand: "TP-Link",
    price: 22.99,
    rating: 4.7,
    reviews: 50000,
    image: "https://m.media-amazon.com/images/I/51zoLDBO0wL._SX522_.jpg",
    category: "Mini Plug",
    features: [
      "Voice control with Alexa, Google Assistant",
      "Remote control via Kasa app",
      "Scheduling and timer functions",
      "Compact design",
      "No hub required",
      "Away mode for security",
    ],
    description:
      "The TP-Link Kasa Smart Wi-Fi Plug Mini is a reliable and compact smart plug, ideal for controlling devices remotely with voice or app control.",
    amazonLink: "https://www.amazon.com/TP-Link-Kasa-Smart-Wifi-Plug/dp/B07RCNB2L3/ref=sr_1_1?crid=FQ0J5IO5CMDM&dib=eyJ2IjoiMSJ9.TUc_-T2ZQJ_lJHXWUjanyiC5_NiXAHXoqPULB7BBS5VzNixSojKaDiRsGmgZCfX82yJtC08TFvDaire775GIooheEbF_Vhv5SpO-7OTfbGbBMzi3gWcuQ2-GnRv4f0Er.LEL7k6LXDpOUo_xNa4yP5rrgD4O8qULhM_NpRIqZUm0&dib_tag=se&keywords=TP-Link%2BKasa%2BSmart%2BPlug%2BHS103&qid=1760030342&sprefix=tp-link%2Bkasa%2Bsmart%2Bplug%2Bhs103%2Caps%2C742&sr=8-1&th=1",
    specs: {
      Connectivity: "Wi-Fi 2.4GHz",
      "Max Load": "15A",
      Voltage: "120V",
      Dimensions: "2.6 x 1.5 x 2.1 inches",
      Weight: "3.5 oz",
      Warranty: "2 years",
    },
    detailedReview: {
      intro:
        "The TP-Link Kasa HS103 is a top-rated smart plug known for its reliability, ease of use, and compact design, making it a favorite for smart home beginners and experts.",
      performance:
        "The HS103 offers seamless performance with quick Wi-Fi connectivity and fast response times to voice and app commands. Its scheduling and away mode features enhance convenience and security.",
      setup:
        "Setup is straightforward with the Kasa app, taking less than 5 minutes. The app provides an intuitive interface for scheduling, timers, and remote control.",
      value:
        "At $22.99, the HS103 delivers excellent value with robust features and reliable performance, backed by a 2-year warranty and responsive customer support.",
    },
    pros: [
      "Reliable Wi-Fi connection",
      "Compact design",
      "Intuitive Kasa app",
      "Fast voice command response",
      "Affordable price",
    ],
    cons: [
      "No energy monitoring",
      "2.4GHz Wi-Fi only",
      "No HomeKit support",
    ],
    verdict:
      "The TP-Link Kasa HS103 is a top pick for those seeking a dependable, budget-friendly smart plug with excellent performance and easy setup.",
    ratingBreakdown: [
      { category: "Performance", score: 9.3, icon: "zap" },
      { category: "Connectivity", score: 9.0, icon: "wifi" },
      { category: "Reliability", score: 9.5, icon: "shield" },
      { category: "Value", score: 9.2, icon: "dollar" },
    ],
  },
  {
    id: 2,
    slug: "amazon-smart-plug",
    name: "Amazon Smart Plug",
    brand: "Amazon",
    price: 24.99,
    rating: 4.7,
    reviews: 500000,
    image: "https://m.media-amazon.com/images/I/711nxnsm6nL._AC_SX679_.jpg",
    category: "Standard Plug",
    features: [
      "Seamless Alexa integration",
      "Frustration Free Setup",
      "Schedule devices",
      "Compact design",
      "Works with Alexa routines",
      "Certified for Humans",
    ],
    description:
      "The Amazon Smart Plug is designed for seamless integration with Alexa, offering simple setup and reliable control for Alexa ecosystem users.",
    amazonLink: "https://www.amazon.com/Amazon-smart-plug-works-with-Alexa/dp/B089DR29T6/ref=sr_1_1?crid=2VEU7YAJXAW83&dib=eyJ2IjoiMSJ9.p6R_SdmgXajMqpT0t0FhGlM47olHM9nLCt3s5Zh2TtsISCbvRdkN82ESxWjsEDSH6E03uVzvoT65oenElEIuVxD7Px3oGnsjdWGoGdufDdHAGhXKB1dQKmoNDM6uThfYCUNXvSHIb_6DT006qTQD50v1uQRU0IoFdjQBDTCKnbuO1f0FGYGVSm3nYnlgee7VBFmhJ4caZPAtyjaN0Kqv1dzjfg3Xsb2ETjVtmT9k0yc.fYnwKVUjhL3WDi9o8xVYoGn3SMj_u_WCluwYiiR5MhQ&dib_tag=se&keywords=Amazon%2BSmart%2BPlug&qid=1760030416&sprefix=amazon%2Bsmart%2Bplug%2Caps%2C793&sr=8-1&th=1",
    specs: {
      Connectivity: "Wi-Fi 2.4GHz",
      "Max Load": "15A",
      Voltage: "120V",
      Dimensions: "3.2 x 1.5 x 2.2 inches",
      Weight: "4.0 oz",
      Warranty: "1 year",
    },
    detailedReview: {
      intro:
        "The Amazon Smart Plug is a go-to choice for Alexa users, boasting an impressive 4.7-star rating from over 500,000 reviews due to its seamless integration and ease of use.",
      performance:
        "This plug excels in Alexa environments, with instant response to voice commands and reliable integration with Alexa routines. Its performance is consistent, though limited to Alexa ecosystems.",
      setup:
        "Setup is effortless with the Alexa app, taking under a minute with Frustration Free Setup. No standalone app is needed, but it requires an Alexa device for full functionality.",
      value:
        "Priced at $24.99, it’s a premium option for Alexa users, but the lack of Google or HomeKit support and energy monitoring limits its appeal for non-Alexa households.",
    },
    pros: [
      "Seamless Alexa integration",
      "Quick and easy setup",
      "Reliable performance",
      "Compact design",
      "Supports Alexa routines",
    ],
    cons: [
      "Alexa-only compatibility",
      "No energy monitoring",
      "Slightly pricey",
    ],
    verdict:
      "The Amazon Smart Plug is ideal for Alexa-centric homes, offering unmatched ease of use and integration, but it’s less versatile for other ecosystems.",
    ratingBreakdown: [
      { category: "Performance", score: 9.5, icon: "zap" },
      { category: "Connectivity", score: 9.0, icon: "wifi" },
      { category: "Reliability", score: 9.5, icon: "shield" },
      { category: "Value", score: 8.0, icon: "dollar" },
    ],
  },
  {
    id: 3,
    slug: "wemo-mini-smart-plug",
    name: "Wemo Mini Smart Plug",
    brand: "Belkin",
    price: 18.99,
    rating: 4.4,
    reviews: 10000,
    image: "https://m.media-amazon.com/images/I/41gZN0esR4L._SX522_.jpg",
    category: "Mini Plug",
    features: [
      "Apple HomeKit support",
      "Works with Alexa and Google Assistant",
      "Scheduling and away mode",
      "Compact design",
      "No hub required",
      "IFTTT integration",
    ],
    description:
      "The Wemo Mini Smart Plug offers excellent HomeKit support and a compact design, making it a great choice for Apple users and multi-platform households.",
    amazonLink: "https://www.amazon.com/43K-720-0224R-Compatible-Assistant-HomeKit-F7C063-CC/dp/B07Y1BNZGQ/ref=sr_1_3?crid=38MI41BIJZL95&dib=eyJ2IjoiMSJ9.0X4ype4RIC8eg9jWuIZxMp_Jrz3B4FzEQx84ZBj5u_ljcmI3tnVhYY0XHEDFLVYP4YsYdlfHVlm8EDIWG8ZtQVHPLSBT63VN2i7BM2-FAQvCQJG0ConorL1Ucqyze9Dc.IZ-L0kkYVRtD0yMfnBNZLnH3cQxF7LG4-XgCKZXQJJM&dib_tag=se&keywords=Wemo+Mini+Smart+Plug&qid=1760030453&sprefix=wemo+mini+smart+plug%2Caps%2C268&sr=8-3",
    specs: {
      Connectivity: "Wi-Fi 2.4GHz",
      "Max Load": "15A",
      Voltage: "120V",
      Dimensions: "1.4 x 3.8 x 2.4 inches",
      Weight: "2.4 oz",
      Warranty: "2 years",
    },
    detailedReview: {
      intro:
        "The Wemo Mini Smart Plug is a versatile option with strong HomeKit integration, appealing to Apple users and those using multiple voice assistants.",
      performance:
        "It delivers reliable performance with quick response times across HomeKit, Alexa, and Google Assistant. The away mode adds security, and IFTTT support enhances automation possibilities.",
      setup:
        "Setup is simple via the Wemo app or HomeKit QR code scan, taking just a few minutes. The app is functional but less polished than competitors like Kasa.",
      value:
        "At $18.99, the Wemo Mini offers good value for HomeKit users, though it lacks energy monitoring, which may be a drawback for some.",
    },
    pros: [
      "Compact and unobtrusive",
      "Strong HomeKit support",
      "Multi-platform compatibility",
      "Reliable performance",
      "IFTTT integration",
    ],
    cons: [
      "No energy monitoring",
      "Occasional connectivity issues",
      "App could be improved",
    ],
    verdict:
      "The Wemo Mini is a solid choice for Apple HomeKit users and those seeking a compact plug with broad platform support, though it lacks some advanced features.",
    ratingBreakdown: [
      { category: "Performance", score: 8.8, icon: "zap" },
      { category: "Connectivity", score: 8.5, icon: "wifi" },
      { category: "Reliability", score: 8.7, icon: "shield" },
      { category: "Value", score: 8.5, icon: "dollar" },
    ],
  },
  {
    id: 4,
    slug: "kasa-smart-plug-hs105",
    name: "Kasa Smart Plug Mini",
    brand: "TP-Link",
    price: 14.99,
    rating: 4.7,
    reviews: 25000,
    image: "https://m.media-amazon.com/images/I/61W-tPmagyL._SX522_.jpg",
    category: "Mini Plug",
    features: [
      "Energy monitoring",
      "Voice control with Alexa, Google Assistant",
      "Scheduling and timers",
      "Compact design",
      "No hub required",
      "Away mode",
    ],
    description:
      "The Kasa Smart Plug Mini HS105 offers energy monitoring and reliable smart control at a budget-friendly price, perfect for cost-conscious users.",
    amazonLink: "https://www.amazon.com/Kasa-Smart-Monitoring-Compact-Certified/dp/B0BYGMR4DX/ref=sr_1_2?crid=2TPTPRYCGMN4T&dib=eyJ2IjoiMSJ9.alz40NUu5MYlxtuBJr9uGbpGuAPSwuyQ2Ow19ut4pv5KgXakPQisHdfM0b1jD5TKjeRqq-MLGCkn4N2DTjV_OupGQeG0766XV0ohPsGoFuQ.78l9P19GXrzRh1u15Pz1PpTUKDVlRWNfgZAfHGdsYKU&dib_tag=se&keywords=Kasa+Smart+Plug+HS105&qid=1760030482&sprefix=kasa+smart+plug+hs105%2Caps%2C264&sr=8-2",
    specs: {
      Connectivity: "Wi-Fi 2.4GHz",
      "Max Load": "15A",
      Voltage: "120V",
      Dimensions: "2.6 x 1.5 x 2.1 inches",
      Weight: "3.2 oz",
      Warranty: "2 years",
    },
    detailedReview: {
      intro:
        "The Kasa HS105 is a budget-friendly smart plug that includes energy monitoring, making it a standout for users who want to track power usage without spending a premium.",
      performance:
        "Performance matches the HS103, with fast and reliable responses to voice and app commands. The energy monitoring feature provides accurate real-time data, ideal for optimizing energy usage.",
      setup:
        "Setup is quick and easy via the Kasa app, with clear instructions and a user-friendly interface. It connects reliably to Wi-Fi and integrates seamlessly with Alexa and Google Assistant.",
      value:
        "At $14.99, the HS105 offers exceptional value with energy monitoring, a feature typically found in pricier models, making it a top budget pick.",
    },
    pros: [
      "Energy monitoring included",
      "Affordable price",
      "Reliable performance",
      "Compact design",
      "Intuitive app",
    ],
    cons: [
      "No HomeKit support",
      "2.4GHz Wi-Fi only",
      "Basic build quality",
    ],
    verdict:
      "The Kasa HS105 is perfect for budget-conscious users who want energy monitoring and reliable smart control without compromising on performance.",
    ratingBreakdown: [
      { category: "Performance", score: 9.2, icon: "zap" },
      { category: "Connectivity", score: 9.0, icon: "wifi" },
      { category: "Reliability", score: 9.3, icon: "shield" },
      { category: "Value", score: 9.8, icon: "dollar" },
    ],
  },
  {
    id: 5,
    slug: "gosund-smart-plug",
    name: "Gosund Smart Plug Mini",
    brand: "Gosund",
    price: 25.99,
    rating: 4.4,
    reviews: 3444,
    image: "https://m.media-amazon.com/images/I/61b-iG0eIQL._SX522_.jpg",
    category: "Mini Plug",
    features: [
      "Works with Alexa and Google Assistant",
      "Timer and scheduling",
      "No hub required",
      "Compact design",
      "Smart Life app control",
      "Group control",
    ],
    description:
      "The Gosund Smart Plug Mini is a value-packed option for multi-device control, offering compatibility with Alexa and Google at a competitive price.",
    amazonLink: "https://www.amazon.com/Smart-Compatible-Function-Supports-Required/dp/B09JZKK3KS/ref=sr_1_2?crid=1D6KPACB4GASP&dib=eyJ2IjoiMSJ9.OE9AHOAlx1lBEmAOgl05KosB-l3jlEyto0fLXqITUGKg42hNiXISk2ZkueI09DV0.gcdOqEQfHgMsjYtuaJQUvrYMCWF_h6vL9FshM5HXx9I&dib_tag=se&keywords=Gosund%2BSmart%2BPlug%2BMini&qid=1760030518&sprefix=gosund%2Bsmart%2Bplug%2Bmini%2Caps%2C269&sr=8-2&th=1",
    specs: {
      Connectivity: "Wi-Fi 2.4GHz",
      "Max Load": "10A",
      Voltage: "120V",
      Dimensions: "2.1 x 1.9 x 1.1 inches",
      Weight: "2.8 oz",
      Warranty: "1 year",
    },
    detailedReview: {
      intro:
        "The Gosund Smart Plug Mini is a cost-effective option for those looking to control multiple devices, with a 4-pack offering great value for expanding smart home setups.",
      performance:
        "Performance is solid, with reliable responses to Alexa and Google Assistant commands. The Smart Life app supports group control and timers, though response times can be slightly slower than premium brands.",
      setup:
        "Setup via the Smart Life app is straightforward but can be inconsistent, requiring patience for Wi-Fi connection. Once connected, it performs reliably.",
      value:
        "At $25.99 for a 4-pack, the Gosund plug is a budget-friendly choice for multi-device control, though it lacks energy monitoring and HomeKit support.",
    },
    pros: [
      "Affordable 4-pack",
      "Compact design",
      "Alexa and Google support",
      "Timer and scheduling",
      "No hub needed",
    ],
    cons: [
      "No energy monitoring",
      "Inconsistent setup",
      "No HomeKit support",
      "Lower max load (10A)",
    ],
    verdict:
      "The Gosund Smart Plug Mini is a great value for users needing multiple plugs for Alexa or Google ecosystems, but setup and compatibility limitations may frustrate some.",
    ratingBreakdown: [
      { category: "Performance", score: 8.5, icon: "zap" },
      { category: "Connectivity", score: 8.0, icon: "wifi" },
      { category: "Reliability", score: 8.3, icon: "shield" },
      { category: "Value", score: 9.0, icon: "dollar" },
    ],
  },
  {
    id: 6,
    slug: "meross-smart-plug",
    name: "Meross Smart Wi-Fi Plug Mini",
    brand: "Meross",
    price: 23.99,
    rating: 4.5,
    reviews: 15000,
    image: "https://m.media-amazon.com/images/I/61pcsEQ-RVL._AC_SX679_.jpg",
    category: "Mini Plug",
    features: [
      "Apple HomeKit support",
      "Works with Alexa, Google Assistant",
      "Timer and scheduling",
      "Remote control via app",
      "Compact design",
      "No hub required",
    ],
    description:
      "The Meross Smart Wi-Fi Plug Mini offers native HomeKit support, making it a strong choice for Apple users and multi-platform smart homes.",
    amazonLink: "https://www.amazon.com/Smart-Outdoor-Outlet-Compatible-HomeKit/dp/B08BFGRY9C/ref=sr_1_2?crid=23Y7J7CO8SNN4&dib=eyJ2IjoiMSJ9.0w1GKuCMiE1TMg1iODSIZZF2cAYMlt5wb-9aEppurNWlVnUNt8WsJyaZgqd1M04Bw0WV3kqEpyh3dOR6loqAxk_Rvh8E59UW7zaxO95PsnVI1xbTYg4I0aNIvVycz7tHK_CKPeHiWWvnJ-l6UzGPMGs06uxJvQQ_TYIEvrKdnQmZZCfA0jvz5T2v9rqoNGr0UW0YdEh6nZh-am0Ekz4JmQbU3GxclZh15QSNhLIhe2k.yw-MePY4aeKi9tV-MpVIK4lBsKSIUCxMOVGyCrQefNw&dib_tag=se&keywords=Meross+Smart+WiFi+Plug&qid=1760030546&sprefix=meross+smart+wifi+plug%2Caps%2C284&sr=8-2",
    specs: {
      Connectivity: "Wi-Fi 2.4GHz",
      "Max Load": "15A",
      Voltage: "120V",
      Dimensions: "2.7 x 1.5 x 1.5 inches",
      Weight: "3.0 oz",
      Warranty: "2 years",
    },
    detailedReview: {
      intro:
        "The Meross Smart Wi-Fi Plug Mini stands out for its HomeKit compatibility at an affordable price, appealing to Apple users and those with mixed ecosystems.",
      performance:
        "It performs reliably across HomeKit, Alexa, and Google Assistant, with quick response times. HomeKit integration is seamless, making it a great choice for Apple users.",
      setup:
        "Setup is easy via the Home app for HomeKit or the Meross app for other platforms, with a QR code for quick HomeKit pairing. The app is functional but less refined than Kasa’s.",
      value:
        "At $23.99, it offers strong value for HomeKit users, though the lack of energy monitoring and slightly slower responses compared to premium plugs are trade-offs.",
    },
    pros: [
      "Native HomeKit support",
      "Multi-platform compatibility",
      "Affordable for HomeKit",
      "Compact design",
      "Reliable performance",
    ],
    cons: [
      "No energy monitoring",
      "App less polished",
      "2.4GHz Wi-Fi only",
    ],
    verdict:
      "The Meross Smart Plug is an excellent choice for Apple users seeking affordable HomeKit support with reliable multi-platform performance.",
    ratingBreakdown: [
      { category: "Performance", score: 8.8, icon: "zap" },
      { category: "Connectivity", score: 8.7, icon: "wifi" },
      { category: "Reliability", score: 8.8, icon: "shield" },
      { category: "Value", score: 9.0, icon: "dollar" },
    ],
  },
  {
    id: 7,
    slug: "wyze-plug",
    name: "Wyze Plug Outdoor",
    brand: "Wyze",
    price: 17.98,
    rating: 4.5,
    reviews: 10000,
    image: "https://m.media-amazon.com/images/I/61bLOooaYDL._AC_SX679_.jpg",
    category: "Outdoor Plug",
    features: [
      "Energy monitoring",
      "IP64 weatherproof",
      "Works with Alexa, Google Assistant",
      "Dual independently controlled outlets",
      "Vacation mode",
      "Scheduling and timers",
    ],
    description:
      "The Wyze Plug Outdoor is a weatherproof smart plug with dual outlets and energy monitoring, ideal for outdoor use and budget-conscious buyers.",
    amazonLink: "https://www.amazon.com/WYZE-Outdoor-Plug-Monitoring-Compatible/dp/B08NXY7WWX/ref=sr_1_2?crid=8FCKSMXBW1L3&dib=eyJ2IjoiMSJ9.PSxSztq2YTQ5oExHMIGYWuYR9vJmj0md8xhGbnYW-4BZh0_NKr32GAWg1gLGZxMxDLOhnEwmmD5pYAk3F0PF-jpaH2XXiXap4ieGUdoicdbAgY3SUqgbFL3ke1zVqIQn3TlCvrL_kyPdPe8c7BwmZN8ZHUlReQq62JK2dQTs3Jz_10s3v5MNM7PC8y99c2NH.UBUjww1UoqbjiWi5KIyeAYqptr0TeLNTepwKk13mLeI&dib_tag=se&keywords=Wyze+Smart+Plug&qid=1760030577&sprefix=wyze+smart+plug%2Caps%2C262&sr=8-2",
    specs: {
      Connectivity: "Wi-Fi 2.4GHz",
      "Max Load": "15A per outlet",
      Voltage: "120V",
      Dimensions: "3.9 x 2.7 x 1.4 inches",
      Weight: "8.0 oz",
      Warranty: "1 year",
    },
    detailedReview: {
      intro:
        "The Wyze Plug Outdoor offers exceptional value with dual outlets and weatherproofing, making it a top choice for outdoor smart control on a budget.",
      performance:
        "Performance is reliable, with responsive voice and app control. The dual outlets and energy monitoring are standout features, though response times are slightly slower than indoor models.",
      setup:
        "Setup via the Wyze app is simple but requires an account. Connectivity is stable once configured, though the app is less polished than competitors.",
      value:
        "At $17.98 for dual outlets, it’s a steal for outdoor use, offering energy monitoring and weatherproofing at a price that rivals indoor plugs.",
    },
    pros: [
      "Dual outlets",
      "IP64 weatherproof",
      "Energy monitoring",
      "Affordable price",
      "Vacation mode",
    ],
    cons: [
      "App less polished",
      "1-year warranty",
      "Slightly slower response",
    ],
    verdict:
      "The Wyze Plug Outdoor is the best budget-friendly outdoor smart plug, offering dual outlets and energy monitoring for versatile outdoor control.",
    ratingBreakdown: [
      { category: "Performance", score: 8.7, icon: "zap" },
      { category: "Connectivity", score: 8.5, icon: "wifi" },
      { category: "Reliability", score: 8.8, icon: "shield" },
      { category: "Value", score: 9.5, icon: "dollar" },
    ],
  },
  {
    id: 8,
    slug: "tp-link-kasa-ep25",
    name: "Kasa Smart Light Bulb 4-Pack",
    brand: "TP-Link",
    price: 23.74,
    rating: 4.6,
    reviews: 15000,
    image: "https://m.media-amazon.com/images/I/61cXAPt6PwL._AC_SX679_.jpg",
    category: "Smart Bulb",
    features: [
      "Dimmable from 1% to 100%",
      "Works with Alexa, Google Assistant",
      "No hub required",
      "800 lumens, soft white (2700K)",
      "Scheduling and timers",
      "Energy-efficient 9W LED",
    ],
    description:
      "The Kasa Smart Light Bulb 4-Pack offers dimmable, energy-efficient lighting with seamless smart home integration, perfect for versatile lighting control.",
    amazonLink: "https://www.amazon.com/Kasa-Smart-Dimmable-800Lumens-KL110P4/dp/B08YP6T6GK/ref=sr_1_5?crid=Y41BJPC6PCC7&dib=eyJ2IjoiMSJ9.gXSmSSlbbZzsGNyuw1onqgNrYZ0cPs4jvKkDTPCDHRaZYliwF-YnPrcJMjFpWH4-XEQEv2OtWRjOoJ7zAtGtaeAP6F8yfJGh-XGjBQPyg7g.9bx6r4hx_2zr96qMHW91vIMxhnwjCUK_4tKSoLDL2VQ&dib_tag=se&keywords=TP-Link+Kasa+EP25&qid=1760030608&sprefix=tp-link+kasa+ep25%2Caps%2C256&sr=8-5",
    specs: {
      Connectivity: "Wi-Fi 2.4GHz",
      Brightness: "800 lumens",
      "Color Temperature": "2700K",
      Wattage: "9W (60W equivalent)",
      Voltage: "120V",
      Warranty: "2 years",
    },
    detailedReview: {
      intro:
        "The Kasa Smart Light Bulb 4-Pack is a cost-effective way to add smart lighting to your home, with dimmable bulbs and strong smart home integration.",
      performance:
        "The bulbs perform reliably, offering smooth dimming and quick responses to voice and app controls. The 800-lumen output is bright enough for most rooms, with a warm 2700K tone.",
      setup:
        "Setup is easy via the Kasa app, with clear instructions for connecting to Wi-Fi and pairing with Alexa or Google Assistant. No hub is required, simplifying the process.",
      value:
        "At $23.74 for a 4-pack, these bulbs are a great value, offering dimmable smart lighting at a fraction of the cost of premium brands.",
    },
    pros: [
      "Affordable 4-pack",
      "Smooth dimming",
      "No hub required",
      "Bright 800 lumens",
      "Reliable performance",
    ],
    cons: [
      "No HomeKit support",
      "2.4GHz Wi-Fi only",
      "No color options",
    ],
    verdict:
      "The Kasa Smart Light Bulb 4-Pack is an excellent choice for budget-friendly, dimmable smart lighting with reliable performance and easy setup.",
    ratingBreakdown: [
      { category: "Performance", score: 9.0, icon: "zap" },
      { category: "Connectivity", score: 8.8, icon: "wifi" },
      { category: "Reliability", score: 9.0, icon: "shield" },
      { category: "Value", score: 9.3, icon: "dollar" },
    ],
  },
  {
    id: 9,
    slug: "eve-energy",
    name: "Eve Energy Strip",
    brand: "Eve Systems",
    price: 79.95,
    rating: 4.5,
    reviews: 500,
    image: "https://m.media-amazon.com/images/I/41u18y4sgrL._AC_SX679_.jpg",
    category: "Power Strip",
    features: [
      "Native Apple HomeKit support",
      "Three independently controlled outlets",
      "Surge, overcurrent, overvoltage protection",
      "Energy monitoring",
      "No bridge required",
      "Siri voice control",
    ],
    description:
      "The Eve Energy Strip is a premium power strip with HomeKit support, offering advanced safety features and energy monitoring for Apple users.",
    amazonLink: "https://www.amazon.com/Eve-Energy-Strip-overvoltage-overcurrent/dp/B07PX57RH4/ref=sr_1_4?crid=SHWC7GU6EPZW&dib=eyJ2IjoiMSJ9.VLT5hD4HsEsW7WlqVKPxjDU9FZz37jw2sMXBZPLEwqtieClUuDiHn2XN7ZTeSzTUl_rWW7VbfQYT7e_sxDUmHjBgFHxNVnLWVR6-qfs5JUkno_jptnnVzqDb_4zH7wdyWTD2-xhmjuIGc7RAw6Qh5DJ6YNtbh2eq7yx2h8IwGzGrT8HqYXgxpJDV5rm_3eYYbqzDUKYgjSyXb05O6LShw2Hfstvt3gQDwgPPCxI2Tok.u7YcPRl2zXv5Ee1Y6dccyjSVdE92l2N51G9S57PTQsU&dib_tag=se&keywords=Eve%2BEnergy%2BSmart%2BPlug&qid=1760030640&sprefix=eve%2Benergy%2Bsmart%2Bplug%2Caps%2C267&sr=8-4&th=1",
    specs: {
      Connectivity: "Wi-Fi 2.4GHz",
      "Max Load": "15A, 1800W total",
      Voltage: "120V",
      Dimensions: "11.8 x 2.6 x 1.3 inches",
      Weight: "1.5 lbs",
      "Cable Length": "6.3 ft",
      Warranty: "2 years",
    },
    detailedReview: {
      intro:
        "The Eve Energy Strip is a high-end power strip designed for Apple HomeKit users, offering three controllable outlets and robust safety features.",
      performance:
        "Performance is exceptional, with instant response to Siri and Home app commands. The energy monitoring provides detailed insights, and surge protection ensures device safety.",
      setup:
        "Setup is seamless with HomeKit, requiring only a QR code scan in the Home app. No bridge is needed, and the Eve app offers additional customization options.",
      value:
        "At $79.95, it’s a premium product, but the combination of HomeKit support, energy monitoring, and safety features justifies the cost for Apple enthusiasts.",
    },
    pros: [
      "Native HomeKit support",
      "Three controllable outlets",
      "Surge protection",
      "Detailed energy monitoring",
      "High build quality",
    ],
    cons: [
      "High price",
      "HomeKit only",
      "Bulky compared to single plugs",
    ],
    verdict:
      "The Eve Energy Strip is the top choice for Apple HomeKit users needing a premium power strip with advanced safety and energy monitoring features.",
    ratingBreakdown: [
      { category: "Performance", score: 9.5, icon: "zap" },
      { category: "Connectivity", score: 9.0, icon: "wifi" },
      { category: "Reliability", score: 9.5, icon: "shield" },
      { category: "Value", score: 7.8, icon: "dollar" },
    ],
  },
]
