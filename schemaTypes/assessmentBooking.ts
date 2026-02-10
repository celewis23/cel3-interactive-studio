export default {
  name: "assessmentBooking",
  title: "Assessment Booking",
  type: "document",
  fields: [
    { name: "customerName", title: "Customer Name", type: "string" },
    { name: "customerEmail", title: "Customer Email", type: "string" },
    { name: "notes", title: "Notes", type: "text" },

    { name: "timezone", title: "Timezone", type: "string" },

    // Store UTC ISO strings (easy & consistent)
    { name: "startsAtUtc", title: "Starts At (UTC)", type: "datetime" },
    { name: "endsAtUtc", title: "Ends At (UTC)", type: "datetime" },

    { name: "stripeSessionId", title: "Stripe Session ID", type: "string" },

    {
      name: "status",
      title: "Status",
      type: "string",
      initialValue: "CONFIRMED",
      options: { list: ["CONFIRMED", "CANCELED"] },
    },
  ],
};
