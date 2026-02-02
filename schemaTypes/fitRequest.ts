import { defineField, defineType } from "sanity";

export const fitRequest = defineType({
  name: "fitRequest",
  title: "Fit Requests",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "company",
      title: "Company",
      type: "string",
    }),
    defineField({
      name: "website",
      title: "Website",
      type: "url",
    }),
    defineField({
      name: "budget",
      title: "Budget",
      type: "string",
      validation: (r) => r.required(),
      options: {
        list: [
          { title: "$3k–$5k", value: "3-5k" },
          { title: "$5k–$10k", value: "5-10k" },
          { title: "$10k–$25k", value: "10-25k" },
          { title: "$25k+", value: "25k+" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "timeline",
      title: "Timeline",
      type: "string",
      validation: (r) => r.required(),
      options: {
        list: [
          { title: "ASAP (2–4 weeks)", value: "asap" },
          { title: "1–2 months", value: "1-2mo" },
          { title: "3+ months", value: "3mo+" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "services",
      title: "Services",
      type: "array",
      of: [{ type: "string" }],
      validation: (r) => r.min(1),
    }),
    defineField({
      name: "message",
      title: "Project Details",
      type: "text",
      rows: 6,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    }),
  ],
});
