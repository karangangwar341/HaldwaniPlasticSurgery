import type { Metadata } from "next";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";

export const metadata: Metadata = {
  title: "Media & Press | Dr. Sarika Gangwar – Plastic Surgeon Haldwani",
  description:
    "Dr. Sarika Gangwar's media presence – featured in leading newspapers and publications across Uttarakhand for excellence in plastic and cosmetic surgery.",
  alternates: { canonical: "/media" },
  keywords: [
    "Dr Sarika Gangwar media",
    "plastic surgeon press coverage uttarakhand",
    "cosmetic surgeon news haldwani",
    "Dr Sarika Gangwar newspaper",
    "best plastic surgeon kumaun featured",
  ],
  openGraph: {
    title: "Media & Press | Dr. Sarika Gangwar – Plastic Surgeon Haldwani",
    description: "Dr. Sarika Gangwar featured in leading newspapers and publications across Uttarakhand for excellence in plastic surgery.",
    type: "website",
    images: [{ url: "/images/hero-about.jpg", width: 1200, height: 630, alt: "Dr. Sarika Gangwar Media Coverage" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Media & Press | Dr. Sarika Gangwar – Plastic Surgeon Haldwani",
    description: "Dr. Sarika Gangwar featured in leading publications across Uttarakhand.",
    images: ["/images/hero-about.jpg"],
  },
};

export const revalidate = 60; // ISR: refresh every 60 s

interface MediaFeature {
  _id: string;
  publication: string;
  headline: string;
  date: string | null;
  image: { asset: { _ref: string } };
  order: number;
}

const MEDIA_QUERY = `*[_type == "mediaFeature"] | order(order asc, date desc) {
  _id, publication, headline, date, image, order
}`;

function formatDate(dateStr: string | null): string {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" });
}

export default async function MediaPage() {
  const sanityFeatures: MediaFeature[] = await client.fetch(MEDIA_QUERY);
  const hasSanityData = sanityFeatures && sanityFeatures.length > 0;

  return (
    <>
      <HeroSection
        title="Media & Press"
        subtitle="Dr. Sarika Gangwar's presence in leading publications across Uttarakhand."
        backgroundImage="/images/hero-about.jpg"
        height="medium"
      />

      {/* Intro */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            As Seen In
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-primary md:text-4xl">
            Recognised by the Press
          </h2>
          <p className="mt-5 text-base leading-relaxed text-primary/70 md:text-lg">
            Dr. Sarika Gangwar has been featured in newspapers and media outlets
            across Uttarakhand for her pioneering work in plastic and cosmetic
            surgery, her commitment to patient care, and her mission to bring
            world-class surgical expertise to the Kumaun region.
          </p>
        </div>
      </section>

      {/* Media Gallery */}
      <section className="bg-cream pb-20 pt-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {hasSanityData ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {sanityFeatures.map((item) => (
                <article
                  key={item._id}
                  className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-4/3 overflow-hidden bg-gray-100">
                    <Image
                      src={urlFor(item.image).width(800).height(600).fit("crop").url()}
                      alt={`${item.publication} – ${item.headline}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary shadow-sm backdrop-blur-sm">
                      {item.publication}
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="font-heading text-base font-semibold leading-snug text-primary">
                      {item.headline}
                    </p>
                    {item.date && (
                      <p className="mt-2 text-sm text-primary/50">{formatDate(item.date)}</p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-accent/40 bg-white p-12 text-center">
              <p className="text-lg font-medium text-primary/60">
                No media features found. Updates coming soon!
              </p>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
