<template>
  <div class="site-page">
    <div class="site-shell">
      <SiteHeader />
      <slot />
      <footer class="site-footer">
        ©{{ year }} Everhost. All Rights Reserved. |
        <a href="mailto:support@everhost.io">support@everhost.io</a>
      </footer>
    </div>
  </div>
</template>

<script setup>
const year = computed(() => new Date().getFullYear());
</script>
