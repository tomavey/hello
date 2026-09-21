<template>
  <div class="faq-list">
    <details v-for="(item, index) in faqs" :key="item.q" :open="index === 0">
      <summary>{{ item.q }}</summary>
      <p>{{ item.a }}</p>
    </details>
  </div>
</template>

<script setup>
import { faqs } from "~/data/faq.js";
</script>

<style scoped>
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
</style>
