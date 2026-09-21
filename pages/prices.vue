<template>
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
  </section>

  <HomePlans :show-pricing-link="false" :show-intro="false" />

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
    <FaqAccordion />
  </section>

  <section class="closing">
    <h2>Ready to send a better welcome?</h2>
    <p>
      Create your account, build a guidebook in minutes, and share a link with
      guests.
    </p>
    <a class="cta" :href="SIGNUP_URL">Start free</a>
  </section>
</template>

<script setup>
import { SIGNUP_URL } from "~/data/plans.js";

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

function cellLabel(value) {
  if (value === true) return "Included";
  if (value === false) return "—";
  return value;
}
</script>

<style scoped>
.hero {
  text-align: center;
  padding: 1.5rem 0 1.25rem;
}

h1 {
  font-size: clamp(2rem, 4vw, 3.1rem);
  line-height: 1.15;
  font-weight: 800;
  margin: 0 0 1rem;
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
  background: var(--eh-surface);
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
  background: var(--eh-navy);
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
  background: var(--eh-surface);
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
  color: var(--eh-purple);
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
  color: var(--eh-period);
  font-size: 0.92rem;
  text-align: center;
}

.closing {
  text-align: center;
  background: var(--eh-surface);
  border-radius: 24px;
  padding: 2.25rem 1.25rem;
}

.closing p {
  max-width: 520px;
  margin: 0 auto 1.25rem;
  color: var(--eh-muted);
  line-height: 1.6;
}

@media (max-width: 900px) {
  .included-grid,
  .pro-grid {
    grid-template-columns: 1fr;
  }
}
</style>
