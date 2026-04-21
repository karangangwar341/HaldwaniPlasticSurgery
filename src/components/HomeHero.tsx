import Image from "next/image";
import Link from "next/link";
import { WHATSAPP_LINK } from "@/lib/constants";
import { doctorInfo } from "@/lib/sampleData";

export default function HomeHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-primary-dark">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-150 w-150 rounded-full bg-accent/10 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-125 w-125 rounded-full bg-primary-light/20 blur-[80px]" />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,169,110,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center px-6 lg:grid-cols-2 lg:px-8">
        {/* ─────────── LEFT: Content ─────────── */}
        <div className="animate-fade-in-up py-28 lg:py-32 lg:pr-16">
          {/* Top credential pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            DrNB · Plastic &amp; Cosmetic Surgeon · Haldwani
          </div>

          {/* Main headline */}
          <h1 className="mt-7 font-heading text-4xl font-bold leading-[1.15] text-white md:text-5xl lg:text-[3.5rem] xl:text-6xl">
            Sculpting{" "}
            <span className="relative inline-block">
              <span className="text-accent">Confidence</span>
              <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-linear-to-r from-accent to-transparent" />
            </span>
            ,<br />
            One Procedure
            <br />
            at a Time.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/65 md:text-lg">
            Dr. Sarika Gangwar is Haldwani&apos;s most trusted plastic &amp; cosmetic
            surgeon — bringing world-class expertise to the Kumaun region so
            you never have to travel to metro cities.
          </p>

          {/* Trust chips */}
          <div className="mt-8 flex flex-wrap gap-2.5">
            {[
              "1,200+ Successful Procedures",
              "8+ Years Experience",
              "Chandan Hospital",
              "Natural-Looking Results",
            ].map((badge) => (
              <span
                key={badge}
                className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/8 px-4 py-1.5 text-sm font-medium text-white/80 backdrop-blur-sm"
              >
                <svg
                  className="h-3.5 w-3.5 shrink-0 text-accent"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {badge}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-8 py-4 text-base font-semibold text-white shadow-[0_8px_30px_rgba(37,211,102,0.35)] transition-all hover:scale-105 hover:shadow-[0_12px_40px_rgba(37,211,102,0.5)]"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.3 0-4.438-.743-6.165-2.006l-.434-.324-2.636.884.884-2.636-.324-.434A9.935 9.935 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
              </svg>
              Consultation
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/20 px-8 py-4 text-base font-semibold text-white/90 transition-all hover:border-accent hover:text-accent"
            >
              Explore Services
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          {/* Stats row */}
          <div className="mt-14 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {[
              { number: "8+", label: "Years of Excellence" },
              { number: "1,200+", label: "Happy Patients" },
              { number: "100%", label: "Safety Record" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-heading text-2xl font-bold text-accent md:text-3xl">
                  {stat.number}
                </div>
                <div className="mt-1 text-xs leading-tight text-white/45">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─────────── RIGHT: Doctor Portrait ─────────── */}
        <div className="relative hidden py-16 lg:flex lg:items-center lg:justify-center">
          {/* Decorative rings */}
          <div className="absolute h-145 w-145 rounded-full border border-accent/15" />
          <div className="absolute h-120 w-120 rounded-full border border-accent/10" />

          {/* Doctor image */}
          <div className="relative h-145 w-105 overflow-hidden rounded-[2.5rem] shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
            <Image
              src={doctorInfo.image}
              alt={doctorInfo.name}
              fill
              className="object-cover object-top"
              priority
              sizes="420px"
            />
            {/* Bottom fade */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-primary-dark/70 to-transparent" />
            {/* Name overlay */}
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="font-heading text-lg font-bold text-white">{doctorInfo.name}</p>
              <p className="text-xs font-medium text-accent">{doctorInfo.title}</p>
            </div>
          </div>

          {/* Floating badge — top right */}
          <div className="absolute right-4 top-24 animate-float">
            <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-2xl">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-600">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-primary">DrNB Certified</p>
                <p className="text-[11px] text-primary/50">Plastic Surgery</p>
              </div>
            </div>
          </div>

          {/* Floating badge — bottom left */}
          <div className="absolute bottom-32 left-2 animate-float-delayed">
            <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-2xl">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-primary">1,200+ Patients</p>
                <p className="text-[11px] text-primary/50">Across Uttarakhand</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-white/30">
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="h-8 w-px bg-linear-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
