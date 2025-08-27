<template>
  <div class="faq-accordion-wrapper">
    <div v-for="(item, idx) in faqItems" :key="idx" class="faq-card">
      <button @click="toggle(idx)" class="faq-question">
        <span>{{ item.question }}</span>
        <span class="faq-icon" :class="{ open: openIndex === idx }">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <line
              x1="12"
              y1="5"
              x2="12"
              y2="19"
              stroke="#6c4ad3"
              stroke-width="2"
              stroke-linecap="round"
            />
            <line
              x1="5"
              y1="12"
              x2="19"
              y2="12"
              stroke="#6c4ad3"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </span>
      </button>
      <transition name="fade">
        <div
          v-if="openIndex === idx"
          class="faq-answer"
          v-html="item.answer"
        ></div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const openIndex = ref<number | null>(null);
function toggle(idx: number) {
  openIndex.value = openIndex.value === idx ? null : idx;
}

const faqItems = [
  {
    question: "Will my guest need to download an app?",
    answer: "No. Simply send a link to your guests after they book.",
  },
  {
    question: "I am not technical. Will I be able to set this up?",
    answer:
      "Absolutely. We built our digital welcome books to be super easy to use. If you can use Microsoft Word, you’ll be fine.",
  },
  {
    question: "What sections can I customize?",
    answer:
      "Along with images, videos, and links users can manage pages in Property Info, Area Guide, Contact Us, and Book Again sections.",
  },
  {
    question: "Can I use this with Airbnb and VRBO?",
    answer:
      "Yes! And on any other platform such as Booking.com, Hospitable, Guesty, Vacasa, and many more. Simply add a link to your guest messages.",
  },
  {
    question: "How much time does it take to create a welcome book?",
    answer: `Each digital guide comes with 16+ themes and content templates that can be quickly customized. A welcome book can be completed within 10 minutes. But a fully customized, 5-star digital property guide will take at minimum 1-2 hours.<br><br>Busy and want to save some time? <a href="https://meetings.hubspot.com/hello310/everhost-ask-us-anything">Schedule A Meeting</a> to discuss our Done-4-You service.`,
  },
  {
    question: "Is there a cost to use Everhost?",
    answer: `There is no cost for an Everhost account that allows for the creation of up to three Guidebooks for a 30-day free trial.<br><br>After the 30 days you can continue to provide your three guidebooks to guests for a small subsciption of $5/ month or $50 per year. If you would like to know more, <a href="mailto:tom@everhost.com">Email Us</a> to discuss how you can leverage Everhost to create happy guests and grow your business.,`,
  },
  {
    question: "What is a premium account?",
    answer: `We do offer a premium account where you can create unlimited Guidebooks, upload custom themes, remove our branding and replace with your information.If you would like to know more, <a href="mailto:tom@everhost.com">Email Us</a> to discuss how you can leverage Everhost to create happy guests and grow your business.`,
  },
];
</script>

<style scoped>
.faq-accordion-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin: 2rem 0;
}

.faq-card {
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 16px 0 rgba(140, 76, 219, 0.1);
  max-width: 600px;
  width: 100%;
  padding: 0;
  transition: box-shadow 0.2s;
}

.faq-question {
  width: 100%;
  background: none;
  border: none;
  outline: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.15em;
  font-weight: 600;
  color: #22223b;
  padding: 1.25em 1.5em;
  cursor: pointer;
  border-radius: 18px;
  transition: background 0.2s;
}

.faq-question:hover {
  background: #f7f7fa;
}

.faq-icon {
  display: flex;
  align-items: center;
  transition: transform 0.3s;
}
.faq-icon.open {
  transform: rotate(45deg);
}

.faq-answer {
  padding: 0 1.5em 1.25em 1.5em;
  color: #444;
  font-size: 1em;
  line-height: 1.6;
  animation: fadeIn 0.3s;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
a {
  color: #6c4ad3;
  text-decoration: underline;
  transition: color 0.2s;
}

a:hover {
  color: #4b2ca0;
  text-decoration: underline;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
