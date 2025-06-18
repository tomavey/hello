<template>
  <div class="container">
    <header class="header">
      <h1 class="logo">everhost</h1>
    </header>
    <main class="content">
      <h2>The smart way to host your next project</h2>
      <p>
        Welcome to everhost, where intelligent hosting meets effortless
        deployment. We provide a modern platform designed for developers who
        demand excellence.
      </p>
      <p>
        Experience lightning-fast performance, robust security, and seamless
        scalability. Deploy with confidence and let us handle the
        infrastructure.
      </p>
      <div class="button-group">
        <a href="https://app.everhost.io/register" class="btn primary"
          >Get Started</a
        >
        <a href="https://app.everhost.io/login" class="btn secondary">Sign In</a
        ><template>
          <div
            class="min-h-screen flex flex-col items-center justify-center bg-gray-50"
          >
            <img
              src="https://hello.everhost.io/logo.svg"
              alt="Everhost Logo1"
              class="w-24 h-24 mb-6"
            />
            <h1 class="text-4xl font-bold mb-2 text-gray-900">
              Welcome to Everhost
            </h1>
            <p class="text-lg text-gray-600 mb-8">
              Your site is deployed and ready to go!!
            </p>
            <div
              class="bg-white rounded-lg shadow p-6 max-w-md w-full text-center"
            >
              <p class="text-gray-700 mb-2">
                To get started, edit
                <code class="bg-gray-100 px-2 py-1 rounded text-sm"
                  >pages/index.vue</code
                >
              </p>
              <p class="text-gray-500 text-sm">
                Powered by
                <a
                  href="https://everhost.io"
                  class="text-blue-600 hover:underline"
                  >Everhost</a
                >
              </p>
            </div>
          </div>
        </template>
      </div>
    </main>
    <footer class="footer">
      <p>&copy; 2024 everhost. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
// Script setup is the recommended way to write Vue 3 components in Nuxt 3
// No specific JavaScript needed for this static page, but you could add
// component logic, reactive data, or lifecycle hooks here if necessary.

// You can use Nuxt's built-in useHead composable for meta tags
useHead({
  title: "Hello from Our Service",
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
    },
  ],
});
</script>

<style scoped>
/* Scoped styles mean these styles only apply to this component */
body {
  /* IMPORTANT: This body styling needs to be in a global CSS file or applied differently */
  margin: 0;
  font-family: "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f7fafc;
  color: #2d3748;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
}

.container {
  max-width: 600px;
  width: 100%;
  text-align: center;
  padding: 40px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}

/* Header and Logo */
.header {
  margin-bottom: 40px;
}

.logo {
  font-size: 3.5em;
  font-weight: 700;
  color: #1a202c;
  margin: 0;
  line-height: 1;
}

/* Main Content */
.content h2 {
  font-size: 2em;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 25px;
  line-height: 1.3;
}

.content p {
  font-size: 1.1em;
  line-height: 1.7;
  color: #4a5568;
  margin-bottom: 20px;
}

/* Call to Action Button */
.btn {
  display: inline-block;
  background-color: #4299e1;
  color: #ffffff;
  padding: 15px 30px;
  text-decoration: none;
  border-radius: 6px;
  font-size: 1.1em;
  font-weight: 600;
  margin-top: 30px;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #3182ce;
}

/* Footer */
.footer {
  margin-top: 50px;
  font-size: 0.9em;
  color: #718096;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .container {
    padding: 30px;
  }

  .logo {
    font-size: 2.8em;
  }

  .content h2 {
    font-size: 1.7em;
  }

  .content p {
    font-size: 1em;
  }

  .btn {
    padding: 12px 25px;
    font-size: 1em;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 20px;
    box-shadow: none;
  }

  .logo {
    font-size: 2.2em;
  }

  .content h2 {
    font-size: 1.4em;
  }

  .content p {
    font-size: 0.95em;
  }
}
</style>
