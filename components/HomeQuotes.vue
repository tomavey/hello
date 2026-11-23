<template>
  <section class="quotes">
    <h2>From hosts</h2>
    <div class="quote-grid">
      <figure v-for="quote in quotes" :key="quote.name">
        <blockquote>{{ quote.text }}</blockquote>
        <figcaption>{{ quote.name }}</figcaption>
      </figure>
    </div>
  </section>
</template>

<script setup>
const quotes = [
  {
    name: "Felipe, A Casa é sua (São Paulo)",
    text: "The Everhost guide has drastically reduced questions and interruptions during stays at A Casa é sua. With centralized practical guidance, guests can find everything they need independently, ensuring a much more organized and professional experience.",
  },
  {
    name: "Thiago",
    text: "The guests don’t ask me anything. Being in the middle of nature, the power can go out. The guide explains the power bank that keeps the internet on, and how to bring water from the waterfall if the well pump stops. It covers the pool and the wildlife too. Guests feel confident on a family trip. On a large property I always had questions. Now I find the place in order, they leave good reviews, and I don’t have to see them or message them.",
  },
];
</script>

<style scoped>
.quotes {
  margin: 0 0 2.5rem;
}

h2 {
  text-align: center;
  font-size: 1.85rem;
  margin: 0 0 1.25rem;
}

.quote-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}

figure {
  margin: 0;
  background: var(--eh-surface);
  border-radius: var(--eh-card-radius);
  padding: 1.4rem 1.4rem 1.15rem;
}

blockquote {
  margin: 0 0 1rem;
  line-height: 1.6;
}

figcaption {
  color: var(--eh-purple);
  font-weight: 700;
}

@media (max-width: 800px) {
  .quote-grid {
    grid-template-columns: 1fr;
  }
}
</style>
