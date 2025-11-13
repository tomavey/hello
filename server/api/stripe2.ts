import Stripe from "stripe";
import { defineEventHandler, readBody } from "h3";

export default defineEventHandler(async (event) => {
  // Read the body of the request to get the payment amount
  const { amount } = await readBody(event);

  // Get the runtime configuration
  const config = useRuntimeConfig();

  // Determine the Stripe secret key based on the mode
  const stripeSecretKey =
    config.public.stripeMode === "test"
      ? config.stripeSKTest
      : config.stripeSKLive;

  // Initialize Stripe with the correct secret key
  const stripe = new Stripe(stripeSecretKey as string);

  try {
    // Create a PaymentIntent with the Stripe API
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    // Return the client secret to the frontend
    return {
      clientSecret: paymentIntent.client_secret,
    };
  } catch (error) {
    // Handle errors and return an appropriate response
    console.error("Stripe API Error:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to create payment intent.",
    });
  }
});
