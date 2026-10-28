<template>
  <HomeHero />
  <Youtube />
  <HomePlans />
  <section class="faq">
    <h2>Questions</h2>
    <FaqAccordion />
  </section>
</template>

<script setup>
useHead({
  title: "Everhost",
  meta: [
    {
      name: "description",
      content:
        "A digital guidebook for vacation rentals. Guests open one link for Wi-Fi, house rules, and local tips. Try 3 guidebooks free for 30 days.",
    },
  ],
});
</script>

<style scoped>
.faq {
  margin-bottom: 2rem;
}

.faq h2 {
  text-align: center;
  font-size: 1.85rem;
  margin-bottom: 1rem;
}
</style>
