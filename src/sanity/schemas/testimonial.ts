import { defineType, defineField } from "sanity";

const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Patient Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "text",
      title: "Testimonial Text",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rating",
      title: "Rating (1–5)",
      type: "number",
      validation: (Rule) => Rule.min(1).max(5),
    },
    {
      name: "procedure",
      title: "Procedure",
      type: "string",
    },
  ],
  preview: {
    select: { title: "name", subtitle: "procedure" },
  },
});

export default testimonial;
