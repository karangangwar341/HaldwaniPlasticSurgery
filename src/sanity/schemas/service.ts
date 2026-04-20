import { defineType, defineField } from "sanity";

const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Face", value: "Face" },
          { title: "Breast", value: "Breast" },
          { title: "Body", value: "Body" },
          { title: "Genitals", value: "Genitals" },
          { title: "Hair & Skin", value: "Hair & Skin" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 3,
    },
    {
      name: "overview",
      title: "Overview",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "whyNeeded",
      title: "Why This Procedure Is Needed",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "eligibility",
      title: "Eligibility Criteria",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "procedureSteps",
      title: "Procedure Steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "step", title: "Step Number", type: "number" },
            { name: "title", title: "Step Title", type: "string" },
            { name: "description", title: "Description", type: "text" },
          ],
        },
      ],
    },
    {
      name: "recoveryTimeline",
      title: "Recovery Timeline",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "period", title: "Time Period", type: "string" },
            { name: "description", title: "Description", type: "text" },
          ],
        },
      ],
    },
    {
      name: "results",
      title: "Expected Results",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "safetyNotes",
      title: "Safety Notes",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "question", title: "Question", type: "string" },
            { name: "answer", title: "Answer", type: "text" },
          ],
        },
      ],
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "galleryImages",
      title: "Gallery Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },
    {
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
    },
    {
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 3,
    },
    {
      name: "internalLinks",
      title: "Related Services",
      type: "array",
      of: [{ type: "reference", to: [{ type: "service" }] }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "category", media: "mainImage" },
  },
});

export default service;
