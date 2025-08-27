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

  //   Only allow POST for session creation
  if (event.node.req.method !== "POST") {
    return { error: "Method not allowed. Use POST." };
  }

  try {
    // You can get priceId from the request body if needed
    const body = await readBody(event);
    const priceId = body?.priceId || "price_1RfovG01ZhTvvf2vPDkzwPXt"; // fallback to your price

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "subscription", // or "payment" for one-time
      success_url: origin + "/Premium-success",
      cancel_url: origin + "/Premium-cancel",
    });

    return {
      message: "Stripe session created!",
      sessionId: session.id,
      url: session.url, // you can redirect user to this URL
      session: session,
    };
  } catch (err) {
    return {
      error: err.message || "Stripe API error",
      timestamp: new Date().toISOString(),
    };
  }
});
