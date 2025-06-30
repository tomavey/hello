<template>
  <div class="premium-container">
    <h1>Unlock Premium Content</h1>
    <p>
      Get unlimited welcome books, custom themes, and more for just $279/year.
    </p>
    <form @submit.prevent="redirectToCheckout">
      <button type="submit" class="stripe-btn" :disabled="!stripeLoaded">
        {{ stripeLoaded ? "Pay with Card" : "Loading..." }}
      </button>
    </form>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const STRIPE_PK =
  "pk_test_51RfokR01ZhTvvf2vIKdDJEllwROhZyQGCcC8AugYXihfwn8rklgl9MAfe9LtdPWGENUD8zgMNyNdbIXCS13D6Dy800dSTjY7x6";
const PRICE_ID = "price_1RfovG01ZhTvvf2vPDkzwPXt";

const error = ref("");
const stripeLoaded = ref(false);
let stripe = null;

function loadStripeJs() {
  return new Promise((resolve, reject) => {
    if (window.Stripe) {
      resolve();
      return;
    }
    // Prevent duplicate script tags
    if (document.querySelector('script[src="https://js.stripe.com/v3/"]')) {
      const check = setInterval(() => {
        if (window.Stripe) {
          clearInterval(check);
          resolve();
        }
      }, 50);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/";
    script.async = true;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

onMounted(async () => {
  try {
    await loadStripeJs();
    stripeLoaded.value = true;
    stripe = window.Stripe(STRIPE_PK);
  } catch {
    error.value = "Failed to load Stripe.js";
  }
});

const redirectToCheckout = async () => {
  error.value = "";
  if (!stripe) {
    error.value = "Stripe.js failed to load.";
    return;
  }
  // Debug: check if function is called and stripe is available
  console.log("Redirecting to Stripe Checkout...", stripe);
  const { error: stripeError } = await stripe.redirectToCheckout({
    lineItems: [{ price: PRICE_ID, quantity: 1 }],
    mode: "subscription",
    successUrl: window.location.origin + "/premium?success=true",
    cancelUrl: window.location.origin + "/premium?canceled=true",
  });
  if (stripeError) {
    error.value = stripeError.message;
  }
};
</script>

<style scoped>
.premium-container {
  max-width: 400px;
  margin: 3rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 16px 0 rgba(140, 76, 219, 0.1);
  text-align: center;
}
.stripe-btn {
  background: linear-gradient(90deg, #6c4ad3 0%, #893393 100%);
  color: #fff;
  border: none;
  border-radius: 32px;
  padding: 0.75em 2em;
  font-weight: 600;
  font-size: 1.1em;
  box-shadow: 0 2px 16px 0 rgba(140, 76, 219, 0.15);
  cursor: pointer;
  margin-top: 1.5em;
  transition: background 0.2s, box-shadow 0.2s;
}
.stripe-btn:hover {
  background: linear-gradient(90deg, #893393 0%, #6c4ad3 100%);
}
.error {
  color: #d32f2f;
  margin-top: 1em;
}
</style>
