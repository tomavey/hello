<template>
  <section class="hero">
    <h1>
      10-15% More Bookings With
      <span class="gradient-text">Everhost</span>
    </h1>
    <p class="hero-lede">
      Immediately offer guests a 5-star experience by providing everything
      needed before arrival and during their stay. Learn how Everhost can help
      grow your business.
    </p>
    <div class="hero-actions">
      <a
        class="cta secondary"
        :href="DEMO_URL"
        target="_blank"
        rel="noopener"
      >
        View Demo
      </a>
      <a class="cta" :href="SIGNUP_URL">Start free</a>
    </div>
    <p class="hero-platforms">Works with Airbnb, VRBO, and Booking.com</p>
  </section>
</template>

<script setup>
import { DEMO_URL, SIGNUP_URL } from "~/data/plans.js";
</script>

<style scoped>
.hero {
  text-align: center;
  padding: 1.5rem 0 2rem;
}

h1 {
  font-size: clamp(2rem, 4vw, 3.1rem);
  line-height: 1.15;
  font-weight: 800;
  margin: 0 0 1rem;
}

.hero-actions {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.hero-platforms {
  margin: 0;
  color: var(--eh-period);
  font-weight: 600;
  font-size: 0.95rem;
}
</style>
