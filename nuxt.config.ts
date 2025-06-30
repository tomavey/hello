// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@unlok-co/nuxt-stripe"],
  stripe: {
    // Server
    server: {
      key: process.env
        .sk_test_51RfokR01ZhTvvf2vBFNUlA1hSQpwSTz6Qp7I5zDXDRJC9r9nWyhYZXgj7M9H55SXPQNNHkKi7kM8kjI19zLMyqbm00uhqpDfUq,
      options: {
        // your api options override for stripe server side
        // https://github.com/stripe/stripe-node?tab=readme-ov-file#configuration
      },
    },
    // Client
    client: {
      key: process.env
        .pk_test_51RfokR01ZhTvvf2vIKdDJEllwROhZyQGCcC8AugYXihfwn8rklgl9MAfe9LtdPWGENUD8zgMNyNdbIXCS13D6Dy800dSTjY7x6,
      // manualClientLoad: true, // if you want to have control where you are going to load the client
      // your api options override for stripe client side https://stripe.com/docs/js/initializing#init_stripe_js-options
      options: {},
    },
  },
});
