import { defineType } from "sanity";

const mediaFeature = defineType({
  name: "mediaFeature",
  title: "Media & Press Feature",
  type: "document",
  fields: [
    {
      name: "publication",
      title: "Publication / Newspaper Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "headline",
      title: "Headline / Caption",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "date",
      title: "Publication Date",
      type: "date",
      options: { dateFormat: "MMMM D, YYYY" },
    },
    {
      name: "image",
      title: "Newspaper / Article Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first",
      initialValue: 1,
    },
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
    {
      title: "Date, Newest First",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "headline", subtitle: "publication", media: "image" },
  },
});

export default mediaFeature;
