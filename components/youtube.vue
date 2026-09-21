<template>
  <section id="heroVid" class="video-section">
    <p class="video-heading">
      With Everhost you can create a welcome book in less than 10 MINUTES! Try
      it FREE!
    </p>
    <div class="video-box">
      <iframe
        src="https://www.youtube.com/embed/ZPxOg5WXuHQ"
        title="Everhost Demo"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  </section>
</template>

<style scoped>
.video-section {
  background: var(--eh-navy);
  color: #fff;
  border-radius: 24px;
  padding: 2rem 1.5rem 1.75rem;
  margin: 0 0 3rem;
  text-align: center;
}

.video-heading {
  max-width: 720px;
  margin: 0 auto 1.25rem;
  font-size: 1.15rem;
  font-weight: 600;
  line-height: 1.5;
}

.video-box {
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  aspect-ratio: 16 / 9;
}

.video-box iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: 18px;
  box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 0.25);
}
</style>
