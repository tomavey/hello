<template>
  <section class="home-plans" aria-label="Subscription plans">
    <div class="plans-intro">
      <template v-if="showIntro">
        <h2>Simple pricing for 5-star stays</h2>
        <p class="section-lede">
          Start with three free guidebooks. Keep Standard for everyday hosting,
          or go Pro for branding, custom URLs, and Guest Ask.
        </p>
      </template>
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
    </div>

    <div class="plan-grid">
      <article
        v-for="plan in plans"
        :key="plan.id"
        :class="['plan-card', { featured: plan.featured }]"
      >
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
        <a
          class="cta"
          :class="{ secondary: !plan.featured }"
          :href="plan.ctaHref"
        >
          {{ plan.cta }}
        </a>
      </article>
    </div>

    <p v-if="showPricingLink" class="pricing-link-wrap">
      <NuxtLink to="/prices" class="pricing-link">See full pricing</NuxtLink>
    </p>
  </section>
</template>

<script setup>
import { getPlans } from "~/data/plans.js";

defineProps({
  showPricingLink: {
    type: Boolean,
    default: true,
  },
  showIntro: {
    type: Boolean,
    default: true,
  },
});

const billing = ref("annual");
const plans = computed(() => getPlans(billing.value));
</script>

<style scoped>
.home-plans {
  margin-bottom: 3.5rem;
}

.plans-intro {
  text-align: center;
  margin-bottom: 2rem;
}

.plans-intro h2 {
  font-size: 1.85rem;
  margin: 0 0 0.6rem;
}

.pricing-link-wrap {
  text-align: center;
  margin: 1.5rem 0 0;
}

.pricing-link {
  color: var(--eh-purple);
  font-weight: 700;
  text-decoration: none;
}

.pricing-link:hover {
  color: var(--eh-magenta);
  text-decoration: underline;
}
</style>
