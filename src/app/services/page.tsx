import type { Metadata } from "next";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import { getServices } from "@/sanity/queries";
import { SERVICE_CATEGORIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "All Cosmetic Surgery Services | Dr. Sarika Gangwar — Haldwani",
  description:
    "Explore the full range of plastic and cosmetic surgery services offered by Dr. Sarika Gangwar in Haldwani, Uttarakhand. Face, breast, body, hair & more.",
  alternates: { canonical: "/services" },
  keywords: [
    "cosmetic surgery services haldwani",
    "plastic surgery uttarakhand",
    "rhinoplasty blepharoplasty breast surgery haldwani",
    "hair transplant liposuction kumaun",
    "Dr Sarika Gangwar services",
    "all plastic surgery procedures haldwani",
  ],
  openGraph: {
    title: "All Cosmetic Surgery Services | Dr. Sarika Gangwar — Haldwani",
    description: "Explore the full range of plastic and cosmetic surgery services offered by Dr. Sarika Gangwar in Haldwani, Uttarakhand.",
    type: "website",
    images: [{ url: "/images/hero-services.jpg", width: 1200, height: 630, alt: "Cosmetic Surgery Services — Dr. Sarika Gangwar Haldwani" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "All Cosmetic Surgery Services | Dr. Sarika Gangwar — Haldwani",
    description: "Explore the full range of plastic and cosmetic surgery services in Haldwani, Uttarakhand.",
    images: ["/images/hero-services.jpg"],
  },
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <>
      <HeroSection
        title="Our Services"
        subtitle="Comprehensive cosmetic and plastic surgery services tailored to your goals. Each procedure is performed with precision, safety, and an artistic eye."
        backgroundImage="/images/hero-services.jpg"
        height="medium"
        ctaText="Book Consultation"
        ctaLink="/contact"
      />

      {SERVICE_CATEGORIES.map((category) => {
        const categoryServices = services.filter(
          (s: any) => s.category === category
        );
        return (
          <section key={category} className="py-16 md:py-20 even:bg-cream">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mb-10">
                <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                  {category} Procedures
                </span>
                <h2 className="mt-2 font-heading text-3xl font-bold text-primary md:text-4xl">
                  {category}
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {categoryServices.map((s: any) => (
                  <ServiceCard
                    key={s.slug}
                    title={s.title}
                    slug={s.slug}
                    shortDescription={s.shortDescription}
                    image={s.heroImage}
                    category={s.category}
                  />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <CTASection />
    </>
  );
}
