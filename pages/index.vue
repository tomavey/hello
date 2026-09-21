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
        "Digital welcome books that help hosts offer a 5-star stay. Start free, then choose Standard or Pro.",
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
