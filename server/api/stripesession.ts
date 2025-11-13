import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
if (!stripeSecretKey) {
  throw new Error("STRIPE_SECRET_KEY environment variable is not set.");
}
const stripe = new Stripe(stripeSecretKey, { apiVersion: "2024-04-10" });

export default defineEventHandler(async (event) => {
  console.log("stripe session called");

  // CORS headers (optional, keep if needed)
  const allowedOrigins = [
    "http://localhost:5001",
    "https://manage.everhost.io",
  ];
  const origin = event.node.req.headers.origin;
  if (origin && allowedOrigins.includes(origin)) {
    event.node.res.setHeader("Access-Control-Allow-Origin", origin);
    console.log(`CORS: Allowed origin set to ${origin}`);
  }
  event.node.res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS"
  );
  event.node.res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Accept session_id from query or POST body
  let session_id = "";
  if (event.node.req.method === "GET") {
    const url = new URL(event.node.req.url || "", "http://localhost");
    session_id = url.searchParams.get("session_id") || "";
    console.log(`GET request: session_id = ${session_id}`);
  } else if (event.node.req.method === "POST") {
    const body = await readBody(event);
    session_id = body?.session_id || "";
    console.log(`POST request: session_id = ${session_id}`);
  } else {
    console.log(`Unhandled method: ${event.node.req.method}`);
  }

  if (!session_id) {
    console.log("No session_id provided");
    return { error: "Missing session_id" };
  }

  try {
    console.log(`Retrieving Stripe session for id: ${session_id}`);
    const session = await stripe.checkout.sessions.retrieve(session_id);
    console.log("Stripe session retrieved successfully");
    return { session };
  } catch (err: any) {
    console.error("Stripe API error:", err);

    // Handle "No such checkout.session" error specifically
    if (
      err.type === "StripeInvalidRequestError" &&
      err.code === "resource_missing"
    ) {
      return {
        error: "No such checkout.session found for the provided session_id.",
        timestamp: new Date().toISOString(),
      };
    }

    return {
      error: err.message || "Stripe API error",
      timestamp: new Date().toISOString(),
    };
  }
});
