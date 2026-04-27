import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import CTASection from "@/components/CTASection";
import { MedicalBusinessSchema, PhysicianSchema, FAQPageSchema } from "@/components/SchemaMarkup";
import { SITE_TITLE, SITE_DESCRIPTION, WHATSAPP_LINK, SERVICE_CATEGORIES } from "@/lib/constants";
import { doctorInfo, services, testimonials, results } from "@/lib/sampleData";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  keywords: [
    "plastic surgeon haldwani",
    "cosmetic surgeon uttarakhand",
    "best plastic surgeon kumaun",
    "rhinoplasty haldwani",
    "liposuction haldwani",
    "breast lift surgery uttarakhand",
    "hair transplant haldwani",
    "Dr Sarika Gangwar",
  ],
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    type: "website",
    images: [{ url: "/images/hero-home.jpg", width: 1200, height: 630, alt: "Dr. Sarika Gangwar — Best Plastic Surgeon in Haldwani" }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/images/hero-home.jpg"],
  },
};

/* ---------- Featured Services (one per category) ---------- */
const featuredServices = SERVICE_CATEGORIES.map(
  (cat) => services.find((s) => s.category === cat)!
).filter(Boolean);

/* ---------- Homepage FAQs ---------- */
const homeFaqs = [
  { question: "Who is the best plastic surgeon in Haldwani?", answer: "Dr. Sarika Gangwar is widely regarded as the best plastic and cosmetic surgeon in Haldwani, Uttarakhand with over 8 years of experience and 1,200+ successful procedures." },
  { question: "What cosmetic procedures are available in Haldwani?", answer: "Dr. Sarika Gangwar offers a full range of cosmetic procedures in Haldwani including rhinoplasty, liposuction, breast surgery, face lift, hair transplant, and more." },
  { question: "Is cosmetic surgery safe?", answer: "When performed by a qualified, experienced plastic surgeon like Dr. Gangwar in a fully equipped facility, cosmetic surgery is safe with high success rates." },
  { question: "How do I book a consultation?", answer: "You can book a consultation via WhatsApp, phone call, or by visiting the clinic in Haldwani. WhatsApp is the fastest way to connect." },
];

export default function Home() {
  return (
    <>
      <MedicalBusinessSchema />
      <PhysicianSchema />
      <FAQPageSchema faqs={homeFaqs} />

      {/* ========== HERO ========== */}
      <HeroSection
        title="Best Plastic Surgeon in Haldwani, Uttarakhand"
        subtitle="Advanced cosmetic & plastic surgery with natural results. 8+ years of experience, 1,200+ successful procedures. Trusted by patients across the Kumaun region."
        backgroundImage="/images/hero-home.jpg"
        ctaText="View Services"
        ctaLink="/services"
      />

      {/* ========== TRUST SECTION ========== */}
      <section className="relative -mt-20 z-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 rounded-2xl bg-white p-8 shadow-2xl md:grid-cols-4 md:gap-8">
            {[
              { number: "8+", label: "Years Experience" },
              { number: "1,200+", label: "Procedures Done" },
              { number: "DrNB", label: "Plastic Surgery" },
              { number: "100%", label: "Patient Safety" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading text-3xl font-bold text-accent md:text-4xl">
                  {stat.number}
                </div>
                <div className="mt-1 text-sm font-medium text-primary/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHY DR. SARIKA ========== */}
      <section className="relative bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Why Patients Choose Us
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
              The Dr. Sarika Difference
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-primary/55 md:text-lg">
              World-class plastic surgery — right here in Haldwani.
              No compromises on safety, skill, or results.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 01.587 12c0 2.154.573 4.168 1.574 5.9L3 18.9l1.839 1.1A11.955 11.955 0 0112 21.413 11.955 11.955 0 0120.161 20L22 18.9l-.839-1A11.955 11.955 0 0123 12c0-2.153-.573-4.168-1.574-5.9" />
                  </svg>
                ),
                title: "Board-Certified Expert",
                desc: "DrNB in Plastic Surgery — the highest specialization credential, ensuring you're in the most qualified hands.",
                color: "bg-blue-50 text-blue-600",
              },
              {
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                ),
                title: "Artistry & Precision",
                desc: "Surgery is science, but the best results require an artistic eye. Dr. Sarika tailors every procedure to your unique anatomy.",
                color: "bg-purple-50 text-purple-600",
              },
              {
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                ),
                title: "Local, Accessible Care",
                desc: "Skip the metro-city travel. Get the same quality of care you'd expect in Delhi or Mumbai — right here in Haldwani.",
                color: "bg-green-50 text-green-600",
              },
              {
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                ),
                title: "Patient-Centred Care",
                desc: "From your first call to final follow-up, Dr. Sarika and her team are with you at every step of your transformation journey.",
                color: "bg-rose-50 text-rose-600",
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="group rounded-2xl bg-white p-8 shadow-sm ring-1 ring-cream-dark transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-accent/30"
              >
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${pillar.color}`}>
                  {pillar.icon}
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold text-primary">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-primary/60">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SERVICES PREVIEW ========== */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Our Expertise
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
              Cosmetic & Plastic Surgery Services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary/60">
              From facial rejuvenation to body contouring — advanced surgical solutions
              tailored to your goals.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((s) => (
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

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-8 py-3 font-semibold text-primary transition-all hover:bg-primary hover:text-white"
            >
              View All Services
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ========== PLACEHOLDER_JOURNEY ========== */}
      <section className="bg-primary py-20 md:py-28 overflow-hidden relative">
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0 opacity-5">
          <div className="absolute -left-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full border-2 border-accent" />
          <div className="absolute -right-20 top-1/2 h-60 w-60 -translate-y-1/2 rounded-full border border-accent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Simple &amp; Guided
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Your Journey to Transformation
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/55">
              From your very first message to your final follow-up, we make every step clear and comfortable.
            </p>
          </div>

          <div className="relative mt-16 grid gap-8 md:grid-cols-4">
            {/* Connecting line */}
            <div className="absolute top-10 left-[12.5%] right-[12.5%] hidden h-px bg-linear-to-r from-transparent via-accent/40 to-transparent md:block" />
            {[
              {
                step: "01",
                title: "Consultation",
                desc: "Reach out via WhatsApp or phone. Discuss your goals with Dr. Sarika — no obligation.",
                icon: "💬",
              },
              {
                step: "02",
                title: "Custom Treatment Plan",
                desc: "Receive a personalised surgical plan designed around your anatomy, goals, and budget.",
                icon: "📋",
              },
              {
                step: "03",
                title: "Expert Procedure",
                desc: "Surgery performed in a fully equipped theatre with board-certified anaesthesiologists.",
                icon: "⚕️",
              },
              {
                step: "04",
                title: "Beautiful Results",
                desc: "Dedicated aftercare and follow-up until you're fully healed and confident.",
                icon: "✨",
              },
            ].map((item) => (
              <div key={item.step} className="relative flex flex-col items-center text-center">
                {/* Circle */}
                <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-accent/15 text-3xl ring-1 ring-accent/30">
                  {item.icon}
                  <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-primary-dark">
                    {item.step}
                  </span>
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-8 py-4 font-semibold text-white shadow-lg transition-all hover:scale-105"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.3 0-4.438-.743-6.165-2.006l-.434-.324-2.636.884.884-2.636-.324-.434A9.935 9.935 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
              </svg>
              Start Your Journey — It&apos;s Free
            </a>
          </div>
        </div>
      </section>

      {/* ========== ABOUT DOCTOR ========== */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Image */}
            <div className="relative">
              <div className="relative aspect-3/4 overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={doctorInfo.image}
                  alt={doctorInfo.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Accent frame */}
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border-2 border-accent" />
            </div>

            {/* Content */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                Meet Your Surgeon
              </span>
              <h2 className="mt-3 font-heading text-3xl font-bold text-primary md:text-4xl">
                {doctorInfo.name}
              </h2>
              <p className="mt-1 text-lg font-medium text-accent">
                {doctorInfo.title}
              </p>

              <p className="mt-6 text-base leading-relaxed text-primary/70">
                {doctorInfo.bio}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {doctorInfo.qualifications.map((q) => (
                  <span
                    key={q}
                    className="rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent-dark"
                  >
                    {q}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white transition-all hover:bg-primary-light"
                >
                  Read Full Bio
                </Link>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white transition-all hover:bg-[#1da851]"
                >
                  Book Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== RESULTS PREVIEW ========== */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Proven Results
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
              Before & After Transformations
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary/60">
              Real patients, real results. See the life-changing transformations
              achieved by Dr. Sarika Gangwar.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {results.slice(0, 3).map((r) => (
              <BeforeAfterSlider
                key={r.id}
                beforeImage={r.beforeImage}
                afterImage={r.afterImage}
                caption={r.caption}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/results"
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-8 py-3 font-semibold text-primary transition-all hover:bg-primary hover:text-white"
            >
              View All Results
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section id="testimonials" className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Patient Stories
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
              What Our Patients Say
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <article
                key={i}
                className="rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl"
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }, (_, j) => (
                    <svg key={j} className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="mt-4 text-base leading-relaxed text-primary/70">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="mt-6 border-t border-cream-dark pt-4">
                  <p className="font-semibold text-primary">{t.name}</p>
                  <p className="text-sm text-accent">{t.procedure}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========== STRONG CTA ========== */}
      <CTASection />

      {/* ========== HOMEPAGE FAQ (for AI search) ========== */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Common Questions
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-primary md:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="mt-10 space-y-4">
            {homeFaqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-cream-dark bg-white p-6 shadow-sm"
                open={i === 0}
              >
                <summary className="flex cursor-pointer items-center justify-between font-heading text-base font-semibold text-primary md:text-lg">
                  {faq.question}
                  <svg className="h-5 w-5 shrink-0 text-accent transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-primary/70 md:text-base">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
