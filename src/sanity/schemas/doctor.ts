import { defineType, defineField } from "sanity";

export default defineType({
  name: "doctor",
  title: "Doctor Profile",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "qualifications",
      title: "Qualifications",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "specializations",
      title: "Specializations",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "experience",
      title: "Years of Experience",
      type: "number",
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: "proceduresDone",
      title: "Procedures Done",
      type: "number",
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "philosophy",
      title: "Philosophy",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "image",
      title: "Doctor Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "title", media: "image" },
  },
});
