<template>
  <header class="eh-header">
    <NuxtLink to="/" class="eh-header-logo" aria-label="Everhost home">
      <img src="/images/everhost.png" alt="Everhost" />
    </NuxtLink>
    <nav class="eh-header-nav">
      <NuxtLink
        to="/prices"
        class="eh-header-link"
        active-class="eh-header-link--active"
      >
        Prices
      </NuxtLink>
      <a class="eh-header-login" href="https://manage.everhost.io/">Login</a>
    </nav>
  </header>
</template>

<style scoped>
.eh-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.eh-header-logo img {
  height: 48px;
  width: auto;
  display: block;
}

.eh-header-nav {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.eh-header-link {
  color: var(--eh-purple);
  font-weight: 600;
  text-decoration: none;
  padding: 0.55em 0.9em;
  border-radius: var(--eh-radius);
  transition: background 0.2s, color 0.2s;
}

.eh-header-link:hover,
.eh-header-link--active {
  background: rgba(108, 74, 211, 0.08);
  color: var(--eh-magenta);
}

.eh-header-login {
  background: var(--eh-gradient);
  color: #fff !important;
  border: none;
  border-radius: var(--eh-radius);
  padding: 0.75em 2em;
  font-weight: 600;
  font-size: 1.1em;
  box-shadow: 0 2px 16px 0 rgba(140, 76, 219, 0.15);
  transition: background 0.2s, box-shadow 0.2s;
  text-decoration: none;
  display: inline-block;
}

.eh-header-login:hover {
  background: linear-gradient(90deg, #893393 0%, #6c4ad3 100%);
  box-shadow: 0 4px 24px 0 rgba(140, 76, 219, 0.25);
}

@media (max-width: 600px) {
  .eh-header-login {
    padding: 0.6em 1.1em;
    font-size: 1em;
  }
}
</style>
