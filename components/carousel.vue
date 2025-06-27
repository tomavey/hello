<template>
  <div class="carousel">
    <div class="carousel-track">
      <div
        class="carousel-indicators"
        style="
          display: flex;
          justify-content: center;
          margin-top: 16px;
          margin-bottom: 20px;
        "
      >
        <span
          v-for="(slide, idx) in slides"
          :key="'indicator-' + idx"
          :style="{
            display: 'inline-block',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            background: idx === current ? '#333' : '#ccc',
            margin: '0 4px',
            cursor: 'pointer',
            transition: 'background 0.2s',
          }"
          @click="current = idx"
        ></span>
      </div>
      <transition-group name="slide-fade" tag="div">
        <div
          v-for="(slide, idx) in slides"
          :key="idx"
          class="dsm_card_carousel_child swiper-slide"
          v-show="idx === current"
        >
          <div
            @click="next"
            style="flex: 1; display: flex; align-items: center"
          >
            <img
              decoding="async"
              :src="slide.img"
              width="75px"
              alt=""
              :data-lazy-srcset="slide.imgSrcset"
              :data-lazy-sizes="slide.imgSizes"
              class="dsm_card_carousel_child_img swiper-lazy"
              :data-lazy-src="slide.img"
            />
            <div class="dsm_card_carousel_child_description">
              <p>{{ slide.text }}</p>
              <p style="margin: 4px 0; font-weight: bold">{{ slide.author }}</p>
              <p>★★★★★</p>
            </div>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";

let intervalId: number | undefined;

onMounted(() => {
  intervalId = window.setInterval(() => {
    next();
  }, 5000);
});

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});

interface Slide {
  img: string;
  imgSrcset?: string;
  imgSizes?: string;
  text: string;
  author: string;
  stars: number;
}

const slides = ref<Slide[]>([
  {
    img: "/images/Thiago-Headshot.png",
    imgSrcset: "",
    imgSizes: "",
    text: "This is the digital welcome book I have been waiting for! Quick to setup, easy to use, and my guests love using it!",
    author: "Thiago Gemelli, Sao Paulo Brazil",
    stars: 5,
  },
  {
    img: "/images/KeYarra.png",
    imgSrcset: "",
    imgSizes: "",
    text: "Our guests actually use our welcome book to plan their stay and while they are in town. Love the area guide section!",
    author: "KeYarra Ali, Detroit Michigan",
    stars: 5,
  },
  {
    img: "/images/Dave-Homyak.png",
    imgSrcset: "",
    imgSizes: "",
    text: "As a realtor and investor things can get really busy. Adding Everhost welcome books have saved my team so much time by not having to answer the same questions again and again.",
    author: "Dave Homyak, Realtor",
    stars: 4,
  },
  {
    img: "/images/Evan-and-Orna_2-.png",
    imgSrcset: "",
    imgSizes: "",
    text: "Love the option to add videos in the How-To section. This alone has been a game changer for our guest services and support.",
    author: "Evan Feathers, Destin Florida",
    stars: 3,
  },
]);

const current = ref(0);

function prev() {
  current.value =
    (current.value - 1 + slides.value.length) % slides.value.length;
}

function next() {
  current.value = (current.value + 1) % slides.value.length;
}
</script>

<style>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
  position: absolute;
  width: 100%;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(60px);
}
.slide-fade-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.slide-fade-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-60px);
}
.carousel-track {
  position: relative;
  min-height: 220px; /* adjust as needed */
}
.dsm_card_carousel_child_description {
  margin-left: 16px;
  flex: 1;
}
</style>
