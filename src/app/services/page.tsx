import type { Metadata } from "next";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import { services } from "@/lib/sampleData";
import { SERVICE_CATEGORIES, aiImage } from "@/lib/constants";

export const metadata: Metadata = {
  title: "All Cosmetic Surgery Services | Dr. Sarika Gangwar — Haldwani",
  description:
    "Explore the full range of plastic and cosmetic surgery services offered by Dr. Sarika Gangwar in Haldwani, Uttarakhand. Face, breast, body, hair & more.",
};

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        title="Our Services"
        subtitle="Comprehensive cosmetic and plastic surgery services tailored to your goals. Each procedure is performed with precision, safety, and an artistic eye."
        backgroundImage={aiImage("modern cosmetic surgery clinic service showcase, elegant medical marketing image")}
        height="medium"
        ctaText="Book Consultation"
        ctaLink="/contact"
      />

      {SERVICE_CATEGORIES.map((category) => {
        const categoryServices = services.filter(
          (s) => s.category === category
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
                {categoryServices.map((s) => (
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
