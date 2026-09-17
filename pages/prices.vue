<template>
  <div class="prices-page">
    <div class="prices-shell">
      <SiteHeader />

      <section class="hero">
        <p class="eyebrow">Everhost Guidebooks</p>
        <h1>
          Simple pricing for
          <span class="gradient-text">5-star stays</span>
        </h1>
        <p class="hero-lede">
          Start with three free guidebooks. Keep a Standard plan for everyday
          hosting, or go Pro when you need branding, custom URLs, and Guest Ask.
        </p>

        <div class="billing-toggle" role="group" aria-label="Billing period">
          <button
            type="button"
            :class="{ active: billing === 'monthly' }"
            @click="billing = 'monthly'"
          >
            Monthly
          </button>
          <button
            type="button"
            :class="{ active: billing === 'annual' }"
            @click="billing = 'annual'"
          >
            Annual
            <span class="save-pill">Save 2 months</span>
          </button>
        </div>
      </section>

      <section class="plan-grid" aria-label="Subscription plans">
        <article v-for="plan in visiblePlans" :key="plan.id" :class="['plan-card', { featured: plan.featured }]">
          <div v-if="plan.badge" class="plan-badge">{{ plan.badge }}</div>
          <h2>{{ plan.name }}</h2>
          <p class="plan-audience">{{ plan.audience }}</p>
          <div class="plan-price">
            <span class="amount">{{ plan.price }}</span>
            <span v-if="plan.period" class="period">{{ plan.period }}</span>
          </div>
          <p class="plan-books">{{ plan.books }}</p>
          <ul class="plan-points">
            <li v-for="point in plan.points" :key="point">
              <img src="/icons/check-circle-outline.svg" alt="" />
              <span>{{ point }}</span>
            </li>
          </ul>
          <p v-if="plan.note" class="plan-note">{{ plan.note }}</p>
          <a class="cta" :class="{ secondary: !plan.featured }" :href="plan.ctaHref">
            {{ plan.cta }}
          </a>
        </article>
      </section>

      <section class="included">
        <h2>Every guidebook includes</h2>
        <p class="section-lede">
          Guests open a link or QR code — no app to download. You edit the same
          pages they see.
        </p>
        <div class="included-grid">
          <article v-for="item in included" :key="item.title" class="included-card">
            <h3>{{ item.title }}</h3>
            <p>{{ item.body }}</p>
          </article>
        </div>
      </section>

      <section class="compare">
        <h2>Compare features</h2>
        <p class="section-lede">
          Standard covers the full guest guide. Pro adds brand control, more
          properties, and Guest Ask.
        </p>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Feature</th>
                <th scope="col">Standard</th>
                <th scope="col">Pro</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in comparison" :key="row.feature">
                <th scope="row">
                  {{ row.feature }}
                  <span v-if="row.hint" class="hint">{{ row.hint }}</span>
                </th>
                <td :class="{ muted: row.standard === false, yes: row.standard === true }">
                  <img
                    v-if="row.standard === true"
                    src="/icons/check-circle-outline.svg"
                    alt="Included"
                    class="cell-check"
                  />
                  <span v-else>{{ cellLabel(row.standard) }}</span>
                </td>
                <td :class="{ muted: row.pro === false, yes: row.pro === true }">
                  <img
                    v-if="row.pro === true"
                    src="/icons/check-circle-outline.svg"
                    alt="Included"
                    class="cell-check"
                  />
                  <span v-else>{{ cellLabel(row.pro) }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="table-footnote">
          Guest Ask is included with Pro. It can also be granted on its own for
          hosts who only need AI answers and listing import.
        </p>
      </section>

      <section class="pro-highlight">
        <h2>Why hosts upgrade to Pro</h2>
        <div class="pro-grid">
          <article v-for="item in proHighlights" :key="item.title">
            <h3>{{ item.title }}</h3>
            <p>{{ item.body }}</p>
          </article>
        </div>
      </section>

      <section class="faq">
        <h2>Pricing questions</h2>
        <div class="faq-list">
          <details v-for="(item, index) in faqs" :key="item.q" :open="index === 0">
            <summary>{{ item.q }}</summary>
            <p>{{ item.a }}</p>
          </details>
        </div>
      </section>

      <section class="closing">
        <h2>Ready to send a better welcome?</h2>
        <p>
          Create your account, build a guidebook in minutes, and share a link
          with guests.
        </p>
        <a class="cta" href="https://manage.everhost.io/signup">Start free</a>
      </section>

      <footer class="prices-footer">
        ©{{ year }} Everhost. All Rights Reserved. |
        <a href="mailto:support@everhost.io">support@everhost.io</a>
      </footer>
    </div>
  </div>
</template>

<script setup>
const billing = ref("annual");
const year = computed(() => new Date().getFullYear());
const signup = "https://manage.everhost.io/signup";

useHead({
  title: "Prices | Everhost",
  meta: [
    {
      name: "description",
      content:
        "Everhost guidebook pricing: 30-day free trial, Standard from $5/month, and Pro at $279/year with white label, custom URLs, and Guest Ask.",
    },
  ],
});

const visiblePlans = computed(() => {
  const standardPrice =
    billing.value === "monthly"
      ? { price: "$5", period: "/month", note: "Or $50/year for 5 books, $100/year for 10." }
      : { price: "$50", period: "/year", note: "That’s $5/month billed annually. 10 books are $100/year." };

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
      ctaHref: signup,
    },
    {
      id: "standard",
      name: "Standard",
      audience: "Independent hosts",
      featured: true,
      badge: "MOST POPULAR",
      price: standardPrice.price,
      period: standardPrice.period,
      books: billing.value === "monthly" ? "5 guidebooks" : "5 guidebooks",
      points: [
        "Property Info, Area Guide, Nearby",
        "Guest data, analytics, and team members",
        "Publish, copy, and share with a QR code",
      ],
      note: standardPrice.note,
      cta: "Get Standard",
      ctaHref: signup,
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
      ctaHref: signup,
    },
  ];
});

const included = [
  {
    title: "Property Info",
    body: "Check-in, Wi-Fi, house rules, amenities, parking, and how-to videos — plus pages you add yourself.",
  },
  {
    title: "Area Guide",
    body: "Share local favorites so guests skip tourist traps and stay like a local.",
  },
  {
    title: "Nearby",
    body: "Highly rated restaurants and places around the property, with your host picks on top.",
  },
  {
    title: "Contact & Book Again",
    body: "Host photo, call or text, Airbnb/VRBO messaging, and a rebooking link.",
  },
  {
    title: "Weather & Translate",
    body: "Local forecast in °F or °C, and Google Translate for about 20 languages.",
  },
  {
    title: "Welcome splash",
    body: "A first-screen greeting with your theme, city, or custom welcome line.",
  },
  {
    title: "Guest info form",
    body: "Optionally collect name, email, phone, and a house-rules agreement.",
  },
  {
    title: "QR, PDF & Word",
    body: "Share a link or code. Download a print-ready PDF or Word copy of the guide.",
  },
  {
    title: "16+ themes",
    body: "Pick a look that matches the property. Edit content with images, video, and links.",
  },
];

const comparison = [
  { feature: "Guidebooks", standard: "3 trial, then 5 or 10", pro: "100" },
  { feature: "Digital welcome book", hint: "No app required", standard: true, pro: true },
  { feature: "Property Info & Area Guide", standard: true, pro: true },
  { feature: "Nearby places", standard: true, pro: true },
  { feature: "Weather & translate", standard: true, pro: true },
  { feature: "Guest data & analytics", standard: true, pro: true },
  { feature: "QR code, PDF, and Word", standard: true, pro: true },
  { feature: "Team members", standard: true, pro: true },
  { feature: "Custom backgrounds", hint: "Use your own photo", standard: false, pro: true },
  { feature: "White label", hint: "Company name, logo, and link", standard: false, pro: true },
  { feature: "Custom URL", hint: "everhost.io/yourplace", standard: false, pro: true },
  { feature: "Guest Ask", hint: "AI answers from the guide", standard: false, pro: true },
  { feature: "Import from Airbnb or VRBO", standard: false, pro: true },
];

const proHighlights = [
  {
    title: "Look like your brand",
    body: "Put your company name, logo, and website on the guide, and use a photo from the property as the background.",
  },
  {
    title: "Easier links for guests",
    body: "Send everhost.io/amazingcabin instead of a string of numbers. Print the same URL on a QR card.",
  },
  {
    title: "Guest Ask",
    body: "Guests ask about Wi-Fi, check-in, or house rules. The assistant searches that guidebook — including a Guest Q&A page you can build.",
  },
  {
    title: "Start from a listing",
    body: "Paste an Airbnb or VRBO URL to draft property info, amenities, and house rules. You add Wi-Fi and lock codes, then publish.",
  },
];

const faqs = [
  {
    q: "What happens after the 30-day trial?",
    a: "You can keep using Everhost with a Standard subscription: $5/month or $50/year for five guidebooks, or $100/year for ten. Pro is $279/year for 100 guidebooks and branding tools.",
  },
  {
    q: "Do guests need to download an app?",
    a: "No. Send a link or QR code. The guidebook opens in a browser and works with Airbnb, VRBO, Booking.com, and other platforms.",
  },
  {
    q: "Is Nearby included on Standard?",
    a: "Yes. Nearby restaurants and places, host favorites, weather, and translate are part of every guidebook.",
  },
  {
    q: "What is Guest Ask?",
    a: "An AI assistant on the guidebook that answers from your content. It is included with Pro, along with a Guest Q&A builder and Airbnb/VRBO listing import.",
  },
  {
    q: "How do I subscribe?",
    a: "Create an account at manage.everhost.io, then subscribe from Subscribe in the host app. Existing customers can upgrade to Pro from Upgrade.",
  },
];

function cellLabel(value) {
  if (value === true) return "Included";
  if (value === false) return "—";
  return value;
}
</script>

<style scoped>
.prices-page {
  background: #fff;
  min-height: 100vh;
  color: #22223b;
}

.prices-shell {
  max-width: 1100px;
  margin: 0 auto;
  padding: 1.25rem 1.25rem 3rem;
}

.hero {
  text-align: center;
  padding: 1.5rem 0 2rem;
}

.eyebrow {
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 700;
  color: #6c4ad3;
  margin-bottom: 0.75rem;
}

h1 {
  font-size: clamp(2rem, 4vw, 3.1rem);
  line-height: 1.15;
  font-weight: 800;
  margin: 0 0 1rem;
}

.gradient-text {
  background: linear-gradient(180deg, #6c4ad3 0%, #893393 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-lede,
.section-lede {
  max-width: 640px;
  margin: 0 auto 1.5rem;
  font-size: 1.15rem;
  line-height: 1.6;
  color: #4b4b63;
}

.billing-toggle {
  display: inline-flex;
  background: #f7f7fa;
  border-radius: 999px;
  padding: 0.25rem;
  gap: 0.25rem;
}

.billing-toggle button {
  border: 0;
  background: transparent;
  color: #4b4b63;
  font-weight: 600;
  padding: 0.55rem 1rem;
  border-radius: 999px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
}

.billing-toggle button.active {
  background: #fff;
  color: #6c4ad3;
  box-shadow: 0 2px 12px rgba(140, 76, 219, 0.12);
}

.save-pill {
  background: rgba(108, 74, 211, 0.12);
  color: #6c4ad3;
  font-size: 0.7rem;
  padding: 0.15rem 0.45rem;
  border-radius: 999px;
}

.plan-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;
  align-items: stretch;
  margin-bottom: 3.5rem;
}

.plan-card {
  position: relative;
  background: #fff;
  border: 1px solid #ece6f8;
  border-radius: 18px;
  padding: 1.75rem 1.4rem 1.5rem;
  box-shadow: 0 2px 16px rgba(140, 76, 219, 0.08);
  display: flex;
  flex-direction: column;
}

.plan-card.featured {
  border: 2px solid #6c4ad3;
  background: linear-gradient(180deg, rgba(108, 74, 211, 0.06) 0%, #fff 38%);
  box-shadow: 0 12px 32px rgba(108, 74, 211, 0.16);
  transform: translateY(-6px);
}

.plan-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(90deg, #6c4ad3 0%, #893393 100%);
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
}

.plan-card h2 {
  margin: 0.4rem 0 0.2rem;
  font-size: 1.5rem;
}

.plan-audience {
  color: #6c4ad3;
  font-weight: 600;
  margin: 0 0 1rem;
  font-size: 0.95rem;
}

.plan-price {
  display: flex;
  align-items: baseline;
  gap: 0.35rem;
  margin-bottom: 0.35rem;
}

.amount {
  font-size: 2.4rem;
  font-weight: 800;
  letter-spacing: -0.03em;
}

.period {
  color: #6b6b80;
  font-weight: 600;
}

.plan-books {
  font-weight: 700;
  margin: 0 0 1rem;
}

.plan-points {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem;
  flex: 1;
}

.plan-points li {
  display: flex;
  gap: 0.55rem;
  align-items: flex-start;
  margin-bottom: 0.65rem;
  line-height: 1.4;
}

.plan-points img {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-top: 2px;
  filter: invert(32%) sepia(62%) saturate(1200%) hue-rotate(229deg);
}

.plan-note {
  font-size: 0.85rem;
  color: #6b6b80;
  margin: 0 0 1rem;
  line-height: 1.4;
}

.cta {
  display: inline-block;
  text-align: center;
  background: linear-gradient(90deg, #6c4ad3 0%, #893393 100%);
  color: #fff !important;
  text-decoration: none;
  font-weight: 700;
  border-radius: 8px;
  padding: 0.85rem 1.2rem;
  box-shadow: 0 2px 16px rgba(140, 76, 219, 0.18);
}

.cta:hover {
  background: linear-gradient(90deg, #893393 0%, #6c4ad3 100%);
}

.cta.secondary {
  background: #fff;
  color: #6c4ad3 !important;
  border: 2px solid #6c4ad3;
  box-shadow: none;
}

.cta.secondary:hover {
  background: rgba(108, 74, 211, 0.06);
}

.included,
.compare,
.pro-highlight,
.faq,
.closing {
  margin-bottom: 3.25rem;
}

.included h2,
.compare h2,
.pro-highlight h2,
.faq h2,
.closing h2 {
  text-align: center;
  font-size: 1.85rem;
  margin-bottom: 0.6rem;
}

.included-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.pro-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.included-card,
.pro-grid article {
  background: #f7f7fa;
  border-radius: 18px;
  padding: 1.2rem 1.15rem;
  box-shadow: 0 2px 12px rgba(140, 76, 219, 0.06);
}

.included-card h3,
.pro-grid h3 {
  margin: 0 0 0.45rem;
  font-size: 1.05rem;
}

.included-card p,
.pro-grid p {
  margin: 0;
  color: #55556a;
  line-height: 1.5;
  font-size: 0.95rem;
}

.pro-highlight {
  background: #1d3557;
  color: #fff;
  border-radius: 24px;
  padding: 2rem 1.5rem 1.75rem;
}

.pro-highlight h2 {
  color: #fff;
}

.pro-highlight .pro-grid article {
  background: rgba(255, 255, 255, 0.08);
  box-shadow: none;
}

.pro-highlight p {
  color: rgba(255, 255, 255, 0.86);
}

.table-wrap {
  overflow-x: auto;
  border-radius: 18px;
  box-shadow: 0 2px 16px rgba(140, 76, 219, 0.08);
}

table {
  width: 100%;
  border-collapse: collapse;
  min-width: 560px;
  background: #fff;
}

th,
td {
  text-align: left;
  padding: 0.95rem 1rem;
  border-bottom: 1px solid #f0eaf8;
}

thead th {
  background: #f7f7fa;
  font-size: 0.95rem;
}

tbody th {
  font-weight: 600;
  width: 46%;
}

.hint {
  display: block;
  font-weight: 400;
  color: #7a7a90;
  font-size: 0.82rem;
  margin-top: 0.15rem;
}

td.muted {
  color: #9a9aab;
}

td.yes {
  color: #6c4ad3;
  font-weight: 700;
}

.cell-check {
  width: 22px;
  height: 22px;
  display: block;
  filter: invert(32%) sepia(62%) saturate(1200%) hue-rotate(229deg);
}

.table-footnote {
  margin: 1rem 0 0;
  color: #6b6b80;
  font-size: 0.92rem;
  text-align: center;
}

.faq-list {
  max-width: 720px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

details {
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 16px rgba(140, 76, 219, 0.1);
  padding: 0.2rem 0.4rem;
}

summary {
  cursor: pointer;
  font-weight: 700;
  padding: 1rem 1.1rem;
  list-style: none;
}

summary::-webkit-details-marker {
  display: none;
}

details p {
  padding: 0 1.1rem 1.1rem;
  margin: 0;
  color: #444;
  line-height: 1.6;
}

.closing {
  text-align: center;
  background: #f7f7fa;
  border-radius: 24px;
  padding: 2.25rem 1.25rem;
}

.closing p {
  max-width: 520px;
  margin: 0 auto 1.25rem;
  color: #4b4b63;
  line-height: 1.6;
}

.prices-footer {
  text-align: center;
  color: #6c4ad3;
  padding-top: 0.5rem;
}

.prices-footer a {
  color: inherit;
}

@media (max-width: 900px) {
  .plan-grid,
  .included-grid,
  .pro-grid {
    grid-template-columns: 1fr;
  }

  .plan-card.featured {
    transform: none;
  }
}

@media (max-width: 600px) {
  .prices-shell {
    padding: 1rem 0.85rem 2rem;
  }

  .hero-lede,
  .section-lede {
    font-size: 1.05rem;
  }

  .billing-toggle {
    width: 100%;
  }

  .billing-toggle button {
    flex: 1;
    justify-content: center;
  }
}
</style>
