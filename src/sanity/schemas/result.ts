/**
 * Sanity CMS Schema — Result (Before / After)
 */

const result = {
  name: "result",
  title: "Result (Before/After)",
  type: "document",
  fields: [
    {
      name: "beforeImage",
      title: "Before Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "afterImage",
      title: "After Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "caption",
      title: "Caption",
      type: "string",
    },
    {
      name: "service",
      title: "Service",
      type: "reference",
      to: [{ type: "service" }],
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "locationTag",
      title: "Location Tag (for SEO)",
      type: "string",
      description: 'e.g. "Haldwani, Uttarakhand"',
    },
  ],
  preview: {
    select: { title: "caption", media: "afterImage" },
  },
};

export default result;
