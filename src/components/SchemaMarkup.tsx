import { SITE_URL, CLINIC_NAME, CLINIC_CITY, CLINIC_STATE, CLINIC_PINCODE, PHONE_NUMBER, EMAIL, CLINIC_LOCATIONS } from "@/lib/constants";

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
      streetAddress: CLINIC_LOCATIONS[0].address,
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
        name: CLINIC_LOCATIONS[0].name,
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        name: CLINIC_LOCATIONS[1].name,
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "17:00",
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

export function PhysicianSchema({ doctorInfo }: { doctorInfo: any }) {
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
    alumniOf: doctorInfo.qualifications?.map((q: string) => ({
      "@type": "EducationalOrganization",
      name: q,
    })) || [],
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
