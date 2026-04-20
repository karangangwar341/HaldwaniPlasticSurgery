import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import {
  WHATSAPP_LINK,
  PHONE_NUMBER,
  EMAIL,
  CLINIC_NAME,
  GOOGLE_MAPS_EMBED,
  CLINIC_LOCATIONS,
  INSTAGRAM_LINK,
  FACEBOOK_LINK,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Dr. Sarika Gangwar | Best Plastic Surgeon in Haldwani",
  description:
    "Book your consultation with Dr. Sarika Gangwar — leading plastic surgeon in Haldwani, Uttarakhand. WhatsApp, call, or visit our clinic.",
};

export default function ContactPage() {
  return (
    <>
      <HeroSection
        title="Get in Touch"
        subtitle="Take the first step toward your transformation. We are here to answer your questions and schedule your consultation."
        backgroundImage="/images/hero-contact.jpg"
        height="medium"
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Cards */}
            <div className="space-y-6">
              {/* WhatsApp — Primary */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-6 rounded-2xl bg-[#25D366] p-8 text-white shadow-xl transition-all hover:scale-[1.02] hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white/20">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.3 0-4.438-.743-6.165-2.006l-.434-.324-2.636.884.884-2.636-.324-.434A9.935 9.935 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">WhatsApp Us (Fastest)</h3>
                  <p className="mt-1 text-white/80">
                    Click to start a conversation. We typically respond within minutes.
                  </p>
                </div>
              </a>

              {/* Call */}
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="group flex items-center gap-6 rounded-2xl border border-cream-dark bg-white p-8 shadow-lg transition-all hover:shadow-xl"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary">Call Us</h3>
                  <p className="mt-1 text-primary/60">{PHONE_NUMBER}</p>
                  <p className="text-sm text-primary/50">Mon–Sat, 9AM–7PM (two locations)</p>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${EMAIL}`}
                className="group flex items-center gap-6 rounded-2xl border border-cream-dark bg-white p-8 shadow-lg transition-all hover:shadow-xl"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary">Email</h3>
                  <p className="mt-1 text-primary/60">{EMAIL}</p>
                </div>
              </a>

              {/* Clinic Locations */}
              {CLINIC_LOCATIONS.map((loc) => (
                <div key={loc.name} className="rounded-2xl border border-cream-dark bg-cream p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary">{loc.name}</h3>
                      <p className="text-sm font-medium text-accent">{loc.role}</p>
                      <p className="mt-1 text-sm text-primary/60">{loc.address}</p>
                      <p className="mt-2 text-sm text-primary/70">
                        <strong className="text-primary">{loc.days}:</strong> {loc.hours}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Social Links */}
              <div className="rounded-2xl border border-cream-dark bg-white p-6">
                <h3 className="text-lg font-bold text-primary">Follow Dr. Sarika Gangwar</h3>
                <p className="mt-1 text-sm text-primary/60">Stay updated with results, tips & clinic news</p>
                <div className="mt-4 flex gap-4">
                  <a
                    href={INSTAGRAM_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 rounded-xl bg-linear-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    Instagram
                  </a>
                  <a
                    href={FACEBOOK_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 rounded-xl bg-[#1877F2] px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Facebook
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <iframe
                src={GOOGLE_MAPS_EMBED}
                width="100%"
                height="100%"
                style={{ minHeight: "500px", border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic Location — Haldwani, Uttarakhand"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
