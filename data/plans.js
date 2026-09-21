export const SIGNUP_URL = "https://manage.everhost.io/signup";
export const DEMO_URL = "https://everhost.io/6142439";

export function getPlans(billing = "annual") {
  const standardPrice =
    billing === "monthly"
      ? {
          price: "$5",
          period: "/month",
          note: "Or $50/year for 5 books, $100/year for 10.",
        }
      : {
          price: "$50",
          period: "/year",
          note: "That’s $5/month billed annually. 10 books are $100/year.",
        };

  return [
    {
      id: "trial",
      name: "Trial",
      audience: "New accounts",
      price: "Free",
      period: "for 30 days",
      books: "3 guidebooks",
      points: [
        "Full guest guidebook",
        "Nearby, weather, and translate",
        "QR code, PDF, and Word download",
      ],
      note: "After 30 days, continue on Standard.",
      cta: "Start free",
      ctaHref: SIGNUP_URL,
    },
    {
      id: "standard",
      name: "Standard",
      audience: "Independent hosts",
      featured: true,
      badge: "MOST POPULAR",
      price: standardPrice.price,
      period: standardPrice.period,
      books: "5 guidebooks",
      points: [
        "Property Info, Area Guide, Nearby",
        "Guest data, analytics, and team members",
        "Publish, copy, and share with a QR code",
      ],
      note: standardPrice.note,
      cta: "Get Standard",
      ctaHref: SIGNUP_URL,
    },
    {
      id: "pro",
      name: "Pro",
      audience: "Managers & brands",
      price: "$279",
      period: "/year",
      books: "100 guidebooks",
      points: [
        "White-label footer with your logo",
        "Custom URLs like everhost.io/cocoa",
        "Your own background photos",
        "Guest Ask AI and listing import",
      ],
      cta: "Go Pro",
      ctaHref: SIGNUP_URL,
    },
  ];
}
