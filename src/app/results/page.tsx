import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import ResultsGallery from "@/components/ResultsGallery";
import { results } from "@/lib/sampleData";

export const metadata: Metadata = {
  title: "Before & After Results | Dr. Sarika Gangwar — Haldwani",
  description:
    "View real before and after photos of cosmetic surgery results by Dr. Sarika Gangwar in Haldwani, Uttarakhand. Rhinoplasty, liposuction, breast surgery & more.",
  alternates: { canonical: "/results" },
  keywords: [
    "before after plastic surgery haldwani",
    "cosmetic surgery results uttarakhand",
    "rhinoplasty results haldwani",
    "liposuction before after uttarakhand",
    "Dr Sarika Gangwar results",
    "real patient results kumaun",
  ],
  openGraph: {
    title: "Before & After Results | Dr. Sarika Gangwar — Haldwani",
    description: "View real before and after photos of cosmetic surgery results by Dr. Sarika Gangwar in Haldwani, Uttarakhand.",
    type: "website",
    images: [{ url: "/images/hero-results.jpg", width: 1200, height: 630, alt: "Before & After Results — Dr. Sarika Gangwar Haldwani" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Before & After Results | Dr. Sarika Gangwar — Haldwani",
    description: "Real before and after cosmetic surgery results in Haldwani, Uttarakhand.",
    images: ["/images/hero-results.jpg"],
  },
};

export default function ResultsPage() {
  return (
    <>
      <HeroSection
        title="Real Results"
        subtitle="See the life-changing transformations achieved by our patients. Every result reflects our commitment to natural beauty and surgical excellence."
        backgroundImage="/images/hero-results.jpg"
        height="medium"
      />

      <section className="py-16 md:py-20">
        <ResultsGallery results={results} />
      </section>

      <CTASection
        title="Want Results Like These?"
        subtitle="Every transformation begins with a consultation. Reach out to Dr. Sarika Gangwar today."
      />
    </>
  );
}
