import { groq } from "next-sanity";
import { client } from "./client";

// Get all services for the services page
export const servicesQuery = groq`*[_type == "service"] | order(title asc) {
  title,
  "slug": slug.current,
  category,
  shortDescription,
  "heroImage": mainImage.asset->url
}`;

// Get a single service by its slug
export const serviceBySlugQuery = groq`*[_type == "service" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  category,
  shortDescription,
  overview,
  whyNeeded,
  eligibility,
  procedureSteps,
  recoveryTimeline,
  results,
  safetyNotes,
  faqs,
  "heroImage": mainImage.asset->url,
  seoTitle,
  seoDescription,
  "relatedServices": internalLinks[]-> {
    title,
    "slug": slug.current,
    shortDescription,
    "heroImage": mainImage.asset->url
  }
}`;

// Get all testimonials
export const testimonialsQuery = groq`*[_type == "testimonial"] | order(_createdAt desc) {
  name,
  text,
  rating,
  procedure
}`;

// Get all results
export const resultsQuery = groq`*[_type == "result"] | order(_createdAt desc) {
  "id": _id,
  "beforeImage": beforeImage.asset->url,
  "afterImage": afterImage.asset->url,
  caption,
  "serviceSlug": service->slug.current,
  "serviceTitle": service->title,
  "location": locationTag
}`;

export async function getServices() {
  return client.fetch(servicesQuery, {}, { next: { revalidate: 60 } });
}

export async function getServiceBySlug(slug: string) {
  return client.fetch(serviceBySlugQuery, { slug }, { next: { revalidate: 60 } });
}

export async function getTestimonials() {
  return client.fetch(testimonialsQuery, {}, { next: { revalidate: 60 } });
}

export async function getResults() {
  return client.fetch(resultsQuery, {}, { next: { revalidate: 60 } });
}
