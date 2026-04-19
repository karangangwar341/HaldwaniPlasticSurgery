import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import Timeline from "@/components/Timeline";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import { FAQPageSchema } from "@/components/SchemaMarkup";
import { services, getServiceBySlug, getRelatedServices } from "@/lib/sampleData";
import { WHATSAPP_LINK } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.seoTitle,
    description: service.seoDescription,
    keywords: [
      `${service.title.toLowerCase()} haldwani`,
      `${service.title.toLowerCase()} uttarakhand`,
      `best ${service.title.toLowerCase()} kumaun`,
      "Dr Sarika Gangwar",
      "plastic surgeon haldwani",
    ],
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      type: "article",
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = getRelatedServices(service.relatedServices);

  return (
    <>
      <FAQPageSchema faqs={service.faqs} />

      {/* 1. Hero */}
      <HeroSection
        title={service.title}
        subtitle={service.shortDescription}
        backgroundImage={service.heroImage}
        height="large"
      />

      {/* 2. Overview */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-primary md:text-3xl">
            What is {service.title}?
          </h2>
          <p className="mt-6 text-base leading-relaxed text-primary/70 md:text-lg">
            {service.overview}
          </p>
        </div>
      </section>

      {/* 3. Why Needed */}
      <section className="bg-cream py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-primary md:text-3xl">
            Why is {service.title} Needed?
          </h2>
          <p className="mt-6 text-base leading-relaxed text-primary/70 md:text-lg">
            {service.whyNeeded}
          </p>
        </div>
      </section>

      {/* 4. Eligibility */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-primary md:text-3xl">
            Who is Eligible?
          </h2>
          <ul className="mt-6 space-y-3">
            {service.eligibility.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className="mt-1 h-5 w-5 shrink-0 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                <span className="text-base text-primary/70">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Procedure Steps — Timeline UI */}
      <section className="bg-cream py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="mb-10 font-heading text-2xl font-bold text-primary md:text-3xl">
            The Procedure — Step by Step
          </h2>
          <Timeline items={service.procedureSteps} variant="steps" />
        </div>
      </section>

      {/* 6. Recovery Timeline */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="mb-10 font-heading text-2xl font-bold text-primary md:text-3xl">
            Recovery Timeline
          </h2>
          <Timeline
            items={service.recoveryTimeline.map((r) => ({
              title: r.period,
              description: r.description,
            }))}
            variant="recovery"
          />
        </div>
      </section>

      {/* 7. Results */}
      <section className="bg-cream py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-primary md:text-3xl">
            Expected Results
          </h2>
          <p className="mt-6 text-base leading-relaxed text-primary/70 md:text-lg">
            {service.results}
          </p>
          <Link
            href="/results"
            className="mt-6 inline-flex items-center gap-2 text-accent font-semibold hover:underline"
          >
            View Before & After Photos
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* 8. Safety */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-primary md:text-3xl">
            Safety & Quality Assurance
          </h2>
          <div className="mt-6 rounded-2xl border border-accent/20 bg-accent/5 p-6 md:p-8">
            <div className="flex items-start gap-4">
              <svg className="mt-1 h-8 w-8 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <p className="text-base leading-relaxed text-primary/70 md:text-lg">
                {service.safetyNotes}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="bg-cream py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="mb-8 font-heading text-2xl font-bold text-primary md:text-3xl">
            Frequently Asked Questions about {service.title}
          </h2>
          <FAQAccordion faqs={service.faqs} />
        </div>
      </section>

      {/* 10. Related Services (Internal Linking) */}
      {related.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="mb-10 font-heading text-2xl font-bold text-primary md:text-3xl">
              Related Procedures You May Be Interested In
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/services/${r.slug}`}
                  className="group flex items-center gap-4 rounded-2xl bg-cream p-6 transition-all hover:shadow-lg"
                >
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                    <Image
                      src={r.heroImage}
                      alt={r.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-110"
                      sizes="80px"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-primary group-hover:text-accent transition-colors">
                      {r.title}
                    </h3>
                    <p className="mt-1 text-sm text-primary/60 line-clamp-2">
                      {r.shortDescription}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 11. CTA */}
      <CTASection
        title={`Interested in ${service.title}?`}
        subtitle="Book a private, no-obligation consultation with Dr. Sarika Gangwar to discuss your goals and learn what's possible."
      />
    </>
  );
}
