<template>
  <article class="brief">
    <p class="eyebrow">For marketers</p>
    <h1>
      Everhost briefing
      <span class="gradient-text">for a marketer</span>
    </h1>
    <p class="lede">
      Use this as the conversation brief. It describes the product as it works
      today, and the claims the app copy now uses.
    </p>

    <section>
      <h2>What it is</h2>
      <p>
        Everhost is a digital guidebook for vacation rentals and other
        short-term stays. A host builds one guide per property. Guests open it
        on their phone from a link or a QR code. There is no app to download.
      </p>
      <p>
        The line already used in Everhost’s own promo is the clearest one:
        guests get Wi-Fi, the door code, house rules, and local tips in one
        place, so the host answers fewer of the same messages.
      </p>
      <p>
        Sites: guests use
        <a href="https://everhost.io">everhost.io</a>. Hosts sign up and edit at
        <a href="https://manage.everhost.io">manage.everhost.io</a>. A sample
        guide is
        <a href="https://everhost.io/9998963">everhost.io/9998963</a>. Support
        is
        <a href="mailto:support@everhost.io">support@everhost.io</a>.
      </p>
      <p>
        The public marketing site is
        <a href="https://hello.everhost.io">hello.everhost.io</a>. Its headline
        and trial copy match this brief. Standard can also be $100 a year for
        10 guidebooks, which is a real checkout option.
      </p>
    </section>

    <section>
      <h2>Who it is for</h2>
      <p>
        Independent hosts and small property managers who list on Airbnb, VRBO,
        Booking.com, or their own site. The guide is not tied to one booking
        platform. The host pastes the link into the guest message, the listing,
        or a printed QR code in the house.
      </p>
      <p>
        Larger operators can run many properties under one organization, with
        their own name and logo on the guide.
      </p>
    </section>

    <section>
      <h2>What the guest sees</h2>
      <p>One mobile web page for that property:</p>
      <ul>
        <li>
          <strong>Property Info</strong> — Wi-Fi, check-in, parking, house
          rules, how-to pages. Hosts can add images, video, and links.
        </li>
        <li>
          <strong>Area Guide</strong> — local recommendations the host writes.
        </li>
        <li><strong>Nearby</strong> — places around the property.</li>
        <li>
          <strong>Book Again</strong> — a link back to rebook, shown only when
          the host sets one.
        </li>
        <li>
          <strong>Ask a question</strong> — the guest types a question and gets
          an answer drawn from that property’s guidebook. If the guide cannot
          answer, the question can be emailed to the host. Hosts can also
          publish a Q&amp;A page of common questions.
        </li>
        <li>
          Optional <strong>guest details</strong> form before the guide opens,
          so the host can collect stay information.
        </li>
      </ul>
      <p>
        A property on Pro can also use a short custom address, such as
        everhost.io/cocoa, instead of a numeric id.
      </p>
    </section>

    <section>
      <h2>What the host does</h2>
      <p>
        Hosts work in a browser at manage.everhost.io. They edit sections like
        a document, start from themes and templates, draft pages with an AI
        assistant, then publish. A paid option can start a draft from an Airbnb
        or VRBO listing and pre-fill property info, amenities, and house rules.
        The host still adds private details such as Wi-Fi and door codes before
        publishing.
      </p>
      <p>
        Each property is shared as a link or QR code. The host can unpublish
        it.
      </p>
    </section>

    <section>
      <h2>Pricing</h2>
      <p>
        This is the offer in the subscription terms, the in-app landing copy,
        and the promo email:
      </p>
      <ul>
        <li>
          <strong>Free trial:</strong> up to 3 guidebooks for 30 days.
        </li>
        <li>
          <strong>Standard:</strong> up to 5 guidebooks for $5 a month or $50 a
          year.
        </li>
        <li>
          <strong>Pro:</strong> up to 100 guidebooks for $279 a year. This adds
          a custom background image, the company’s name and logo on the guide,
          a custom URL, Ask a question, and import-from-listing.
        </li>
      </ul>
      <p>
        Payments run through Stripe. A subscription renews until it is
        cancelled. The terms offer a refund within 14 days of purchase.
      </p>
    </section>

    <section>
      <h2>Background</h2>
      <p>
        Everhost is a founder-built product. Tom Avey wrote most of it and runs
        it as a small company product (alfaVictor LLC). It was originally
        offered free, in the hope of selling ads later. It grew to around 1,000
        free accounts and never sold ads, so it changed to the subscription
        above. As of late October 2026, 41 accounts have an active subscription
        (16 monthly, 16 annual, 8 Pro, and 1 ten-guidebook annual), and 301
        guidebooks are published. Most of the original free accounts are
        inactive.
      </p>
      <p>
        The product is live: guests use everhost.io, hosts use
        manage.everhost.io, and the paid plans are in Stripe.
      </p>
    </section>

    <section>
      <h2>Claims the app uses now</h2>
      <p>Safe to repeat, because they match the product:</p>
      <ul>
        <li>Guests open one link or QR code. No app download.</li>
        <li>
          The guide holds house details, local tips, and a way to ask a
          question.
        </li>
        <li>
          Setup uses themes, templates, and an editor. AI can draft page
          content.
        </li>
        <li>
          Trial, then $5 a month or $50 a year for 5 guidebooks. Pro is $279 a
          year for up to 100.
        </li>
        <li>
          Pro adds branding, a custom URL, Guest Ask, and import from an Airbnb
          or VRBO listing.
        </li>
      </ul>
    </section>

    <section class="say-it">
      <h2>Useful way to say it</h2>
      <p>
        Everhost is the phone guidebook a vacation-rental host sends instead of
        answering the same texts. One link covers the house and the area. It
        takes a few minutes to set up, starts with a 30-day trial of 3
        guidebooks, and costs $5 a month for a typical host or $279 a year for
        a larger brand.
      </p>
    </section>
  </article>
</template>

<script setup>
useHead({
  title: "Everhost briefing for a marketer",
  meta: [
    {
      name: "description",
      content:
        "A briefing on Everhost: what it is, who it is for, current pricing, and the claims the product uses.",
    },
  ],
});
</script>

<style scoped>
.brief {
  max-width: 760px;
  margin: 0 auto 2rem;
}

h1 {
  font-size: clamp(2rem, 4vw, 2.8rem);
  line-height: 1.15;
  font-weight: 800;
  margin: 0 0 1rem;
}

.lede {
  font-size: 1.15rem;
  line-height: 1.6;
  color: var(--eh-muted);
  margin: 0 0 2rem;
}

section {
  margin-bottom: 2rem;
}

h2 {
  font-size: 1.45rem;
  margin: 0 0 0.75rem;
}

p,
li {
  line-height: 1.6;
  color: var(--eh-text);
}

p {
  margin: 0 0 0.9rem;
}

ul {
  margin: 0 0 0.9rem;
  padding-left: 1.2rem;
}

li {
  margin-bottom: 0.45rem;
}

a {
  color: var(--eh-purple);
  font-weight: 600;
}

.say-it {
  background: var(--eh-surface);
  border-radius: var(--eh-card-radius);
  padding: 1.25rem 1.4rem 0.4rem;
}

.say-it p {
  font-size: 1.1rem;
}
</style>
