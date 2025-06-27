<template>
  <div>
    <div class="platforms-grid">
      <div
        v-for="(platform, index) in platforms"
        :key="index"
        class="platform-item"
      >
        <img
          decoding="async"
          width="113"
          height="113"
          :src="platform.img"
          :alt="platform.title"
          :title="platform.title"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const platforms = ref([
  {
    img: "/images/Airbnb.png",
    title: "Airbnb",
  },
  {
    img: "/images/vrbo.jpg",
    title: "Vrbo",
  },
  {
    img: "/images/Booking.png",
    title: "Booking.com",
  },
  {
    img: "/images/Expedia.png",
    title: "Expedia",
  },
  {
    img: "/images/FlipKey.png",
    title: "Flipkey",
  },
  {
    img: "/images/Booking.png",
    title: "Booking",
  },
  {
    img: "/images/Host-Away-Logo.jpg",
    title: "Host Away",
  },
  {
    img: "/images/Guesty.png",
    title: "Guesty",
  },
  {
    img: "/images/Vacasa.png",
    title: "Vacasa",
  },
]);
</script>

<style scoped>
.platforms-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}
.platforms-grid img {
  width: 113px;
  height: 113px;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(140, 76, 219, 0.1);
}
</style>
