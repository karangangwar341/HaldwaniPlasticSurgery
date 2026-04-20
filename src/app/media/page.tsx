import type { Metadata } from "next";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Media & Press | Dr. Sarika Gangwar – Plastic Surgeon Haldwani",
  description:
    "Dr. Sarika Gangwar's media presence – featured in leading newspapers and publications across Uttarakhand for excellence in plastic and cosmetic surgery.",
};

const mediaFeatures = [
  {
    id: 1,
    publication: "Add Newspaper Name",
    headline: "Add headline or caption here",
    date: "Add Date",
    image: "/images/media-1.jpg",
  },
  {
    id: 2,
    publication: "Add Newspaper Name",
    headline: "Add headline or caption here",
    date: "Add Date",
    image: "/images/media-2.jpg",
  },
  {
    id: 3,
    publication: "Add Newspaper Name",
    headline: "Add headline or caption here",
    date: "Add Date",
    image: "/images/media-3.jpg",
  },
  {
    id: 4,
    publication: "Add Newspaper Name",
    headline: "Add headline or caption here",
    date: "Add Date",
    image: "/images/media-4.jpg",
  },
  {
    id: 5,
    publication: "Add Newspaper Name",
    headline: "Add headline or caption here",
    date: "Add Date",
    image: "/images/media-5.jpg",
  },
  {
    id: 6,
    publication: "Add Newspaper Name",
    headline: "Add headline or caption here",
    date: "Add Date",
    image: "/images/media-6.jpg",
  },
];

export default function MediaPage() {
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
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {mediaFeatures.map((item) => (
              <article
                key={item.id}
                className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Newspaper image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <Image
                    src={item.image}
                    alt={`${item.publication} – ${item.headline}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Publication badge */}
                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary shadow-sm backdrop-blur-sm">
                    {item.publication}
                  </div>
                </div>

                {/* Caption */}
                <div className="p-5">
                  <p className="font-heading text-base font-semibold leading-snug text-primary">
                    {item.headline}
                  </p>
                  <p className="mt-2 text-sm text-primary/50">{item.date}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Placeholder notice – remove once real images are added */}
          <div className="mt-14 rounded-2xl border border-dashed border-accent/40 bg-white p-8 text-center">
            <svg
              className="mx-auto mb-3 h-10 w-10 text-accent/50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3 10.5h.008v.008H3V10.5zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zM12 3v2.25m0 13.5V21M4.5 12H3m18 0h-1.5"
              />
            </svg>
            <p className="text-sm font-medium text-primary/60">
              To add your actual newspaper images, place the files as{" "}
              <code className="rounded bg-cream px-1 py-0.5 text-xs">
                public/images/media-1.jpg
              </code>{" "}
              through{" "}
              <code className="rounded bg-cream px-1 py-0.5 text-xs">
                media-6.jpg
              </code>{" "}
              and update the captions in{" "}
              <code className="rounded bg-cream px-1 py-0.5 text-xs">
                src/app/media/page.tsx
              </code>
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
