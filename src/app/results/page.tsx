import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import CTASection from "@/components/CTASection";
import { results } from "@/lib/sampleData";
import { aiImage } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Before & After Results | Dr. Sarika Gangwar — Haldwani",
  description:
    "View real before and after photos of cosmetic surgery results by Dr. Sarika Gangwar in Haldwani, Uttarakhand. Rhinoplasty, liposuction, breast surgery & more.",
};

export default function ResultsPage() {
  const uniqueServices = [...new Set(results.map((r) => r.serviceTitle))];

  return (
    <>
      <HeroSection
        title="Real Results"
        subtitle="See the life-changing transformations achieved by our patients. Every result reflects our commitment to natural beauty and surgical excellence."
        backgroundImage={aiImage("before and after cosmetic surgery transformation concept in a premium clinic, photorealistic")}
        height="medium"
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Filter labels */}
          <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white">
              All Results
            </span>
            {uniqueServices.map((service) => (
              <span
                key={service}
                className="rounded-full border border-cream-dark bg-cream px-5 py-2 text-sm font-medium text-primary/70"
              >
                {service}
              </span>
            ))}
          </div>

          {/* Results Grid */}
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {results.map((r) => (
              <BeforeAfterSlider
                key={r.id}
                beforeImage={r.beforeImage}
                afterImage={r.afterImage}
                caption={r.caption}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want Results Like These?"
        subtitle="Every transformation begins with a consultation. Reach out to Dr. Sarika Gangwar today."
      />
    </>
  );
}
