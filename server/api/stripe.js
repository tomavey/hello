import Stripe from "stripe";

const stripeLiveKey = process.env.STRIPE_SECRET_KEY;
const stripeTestKey = process.env.STRIPE_TEST_KEY;
const testmode = process.env.STRIPE_TEST_MODE === "true";

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

  // Only allow POST for session creation
  if (event.node.req.method !== "POST") {
    return { error: "Method not allowed. Use POST." };
  }

  try {
    const body = await readBody(event);
    const priceId = body?.priceId || "price_1RfovG01ZhTvvf2vPDkzwPXt";

    // Choose Stripe key based on testmode
    const stripeKey = testmode ? stripeTestKey : stripeLiveKey;
    console.log("Using Stripe key:", testmode ? "Test Key" : "Live Key");
    console.log("Creating session with priceId:", priceId);
    console.log("Stripe Key:", stripeKey);
    if (!stripeKey) {
      return { error: "Stripe key not set for selected mode." };
    }
    const stripe = new Stripe(stripeKey, { apiVersion: "2024-04-10" });

    let session;
    try {
      session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        mode: "subscription",
        success_url:
          (origin ? origin : "https://manage.everhost.io") + "/Premium-success",
        cancel_url:
          (origin ? origin : "https://manage.everhost.io") + "/Premium-cancel",
      });
    } catch (stripeErr) {
      return {
        error: "Stripe API error: " + (stripeErr.message || "Unknown error"),
        details: stripeErr,
        timestamp: new Date().toISOString(),
      };
    }

    return {
      message: "Stripe session created!",
      sessionId: session.id,
      url: session.url,
      session,
      testmode,
    };
  } catch (err) {
    return {
      error: err.message || "Unexpected server error",
      timestamp: new Date().toISOString(),
    };
  }
});
