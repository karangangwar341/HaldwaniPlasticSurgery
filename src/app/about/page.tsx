import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import { PhysicianSchema } from "@/components/SchemaMarkup";
import { doctorInfo } from "@/lib/sampleData";
import { WHATSAPP_LINK } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Dr. Sarika Gangwar | Best Plastic Surgeon in Haldwani, Uttarakhand",
  description:
    "Learn about Dr. Sarika Gangwar — leading plastic and cosmetic surgeon in Haldwani, Uttarakhand. 8+ years experience, DrNB Plastic Surgery, 1,200+ procedures.",
};

export default function AboutPage() {
  return (
    <>
      <PhysicianSchema />

      <HeroSection
        title="About Dr. Sarika Gangwar"
        subtitle="A surgeon's skill. An artist's eye. Trusted by thousands."
        backgroundImage="/images/hero-about.jpg"
        height="medium"
      />

      {/* Bio Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Image */}
            <div className="relative lg:col-span-2">
              <div className="sticky top-28">
                <div className="relative aspect-3/4 overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src={doctorInfo.image}
                    alt={doctorInfo.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border-2 border-accent" />
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3">
              <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                Meet Your Surgeon
              </span>
              <h2 className="mt-3 font-heading text-3xl font-bold text-primary md:text-4xl">
                {doctorInfo.name}
              </h2>
              <p className="mt-2 text-lg font-medium text-accent">
                {doctorInfo.title}
              </p>

              <p className="mt-8 text-base leading-relaxed text-primary/70 md:text-lg">
                {doctorInfo.bio}
              </p>

              {/* Philosophy */}
              <div className="mt-8 rounded-2xl border-l-4 border-accent bg-cream p-6">
                <h3 className="font-heading text-lg font-semibold text-primary">
                  My Philosophy
                </h3>
                <p className="mt-2 text-base italic leading-relaxed text-primary/70">
                  &ldquo;{doctorInfo.philosophy}&rdquo;
                </p>
              </div>

              {/* Qualifications */}
              <div className="mt-10">
                <h3 className="font-heading text-xl font-bold text-primary">
                  Qualifications & Credentials
                </h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  {doctorInfo.qualifications.map((q) => (
                    <span
                      key={q}
                      className="rounded-full bg-primary/5 border border-primary/10 px-5 py-2 text-sm font-medium text-primary"
                    >
                      {q}
                    </span>
                  ))}
                </div>
              </div>

              {/* Specializations */}
              <div className="mt-10">
                <h3 className="font-heading text-xl font-bold text-primary">
                  Areas of Specialization
                </h3>
                <ul className="mt-4 space-y-3">
                  {doctorInfo.specializations.map((spec) => (
                    <li key={spec} className="flex items-center gap-3">
                      <svg className="h-5 w-5 shrink-0 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      <span className="text-base text-primary/70">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stats */}
              <div className="mt-10 grid grid-cols-3 gap-6 rounded-2xl bg-primary p-8">
                <div className="text-center">
                  <div className="font-heading text-3xl font-bold text-accent">
                    {doctorInfo.experience}+
                  </div>
                  <div className="mt-1 text-sm text-white/70">Years</div>
                </div>
                <div className="text-center">
                  <div className="font-heading text-3xl font-bold text-accent">
                    {doctorInfo.proceduresDone.toLocaleString()}+
                  </div>
                  <div className="mt-1 text-sm text-white/70">Procedures</div>
                </div>
                <div className="text-center">
                  <div className="font-heading text-3xl font-bold text-accent">
                    100%
                  </div>
                  <div className="mt-1 text-sm text-white/70">Dedication</div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-3 font-semibold text-white transition-all hover:bg-[#1da851]"
                >
                  Book Consultation
                </a>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary px-8 py-3 font-semibold text-primary transition-all hover:bg-primary hover:text-white"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
