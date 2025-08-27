<template>
  <div class="price-container">
    <p
      class="title"
      style="font-size: 24px; font-weight: bold; margin-bottom: 1rem"
    >
      We have an update regarding our pricing for
      <strong>Everhost Guidebooks</strong>.
    </p>
    <p>
      <strong>On October 1, 2025</strong>, Everhost Guidebooks will transition
      to a paid subscription service. Currently, these guides are free, and
      we're so glad they've been helpful for your hosting journey. This change
      will allow us to continue providing you with the highest quality resources
      and support.
    </p>
    <h3>What’s Changing?</h3>
    <p>
      Starting October 1, you can access our Guidebooks with a subscription of
      either <strong>$5 per month</strong> or <strong>$50 per year</strong>. The
      subscription will include <strong>up to three Guidebooks</strong>. We want
      to give you a chance to experience the guides before you commit. That's
      why your <strong>first 30 days will be completely free</strong>.
    </p>
    <h3>What This Means for You</h3>
    <ul>
      <li>
        <strong>For our existing users</strong>, your access to the guides will
        remain free until October 1, 2025. After that, you'll be able to sign up
        for the free 30-day trial.
      </li>
      <li>
        <strong>For our new users</strong>, you can enjoy the first 30 days of
        access for free.
      </li>
    </ul>
    <p>
      We appreciate your continued support and understanding as we make this
      transition. If you have any questions, please don't hesitate to contact
      us.
    </p>
    <p>
      Thank you,<br />
      The Everhost Team
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: 100,
    };
  },
};
</script>

<style scoped>
h1 {
  color: blue;
}
.price-container {
  max-width: 600px;
  margin: 3rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 16px 0 rgba(140, 76, 219, 0.1);
  text-align: left;
}

.price-container p {
  margin-bottom: 1rem;
  line-height: 1.6;
  color: #333;
}
</style>
