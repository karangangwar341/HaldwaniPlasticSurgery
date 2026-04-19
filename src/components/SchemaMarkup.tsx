import { SITE_URL, CLINIC_NAME, CLINIC_ADDRESS, CLINIC_CITY, CLINIC_STATE, CLINIC_PINCODE, PHONE_NUMBER, EMAIL } from "@/lib/constants";
import { doctorInfo } from "@/lib/sampleData";

/* ------------------------------------------------------------------ */
/*  MedicalBusiness + Physician Schema                                */
/* ------------------------------------------------------------------ */

export function MedicalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: CLINIC_NAME,
    url: SITE_URL,
    telephone: PHONE_NUMBER,
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Main Road, Haldwani",
      addressLocality: CLINIC_CITY,
      addressRegion: CLINIC_STATE,
      postalCode: CLINIC_PINCODE,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "29.2215",
      longitude: "79.5129",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "19:00",
      },
    ],
    medicalSpecialty: "PlasticSurgery",
    priceRange: "₹₹₹",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function PhysicianSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctorInfo.name,
    jobTitle: doctorInfo.title,
    medicalSpecialty: "PlasticSurgery",
    description: doctorInfo.bio,
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      addressLocality: CLINIC_CITY,
      addressRegion: CLINIC_STATE,
      addressCountry: "IN",
    },
    alumniOf: doctorInfo.qualifications.map((q) => ({
      "@type": "EducationalOrganization",
      name: q,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  FAQPage Schema                                                     */
/* ------------------------------------------------------------------ */

export function FAQPageSchema({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
