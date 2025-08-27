import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
if (!stripeSecretKey) {
  throw new Error("STRIPE_SECRET_KEY environment variable is not set.");
}
const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2024-04-10",
});

export default defineEventHandler(async (event) => {
  // CORS headers (optional, keep if needed)
  const allowedOrigins = [
    "http://localhost:5001",
    "https://manage.everhost.io",
  ];
  const origin = event.node.req.headers.origin;
  if (origin && allowedOrigins.includes(origin)) {
    event.node.res.setHeader("Access-Control-Allow-Origin", origin);
  }
  event.node.res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS"
  );
  event.node.res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Example: List Stripe products
  try {
    const products = await stripe.products.list({ limit: 5 });
    return {
      message: "Stripe API is working!",
      products: products.data,
      timestamp: new Date().toISOString(),
    };
  } catch (err: any) {
    return {
      key: stripeSecretKey,
      error: err.message || "Stripe API error",
      timestamp: new Date().toISOString(),
      stripe: stripe,
    };
  }
});
