export default {
  name: "assessmentSession",
  title: "Assessment Session Lock",
  type: "document",
  fields: [
    { name: "stripeSessionId", title: "Stripe Session ID", type: "string" },
    { name: "bookingId", title: "Booking Document ID", type: "string" },
    { name: "createdAtUtc", title: "Created At (UTC)", type: "datetime" },
  ],
};
