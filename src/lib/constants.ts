export const SITE_NAME = "Dr. Sarika Gangwar";
export const SITE_TITLE =
  "Dr. Sarika Gangwar | Best Plastic & Cosmetic Surgeon in Haldwani, Uttarakhand";
export const SITE_DESCRIPTION =
  "Dr. Sarika Gangwar is the leading plastic and cosmetic surgeon in Haldwani, Uttarakhand (Kumaun region). Expert in rhinoplasty, liposuction, breast surgery, hair transplant & more. Book your consultation today.";
export const SITE_URL = "https://www.haldwaniplasticsurgery.com";

export const WHATSAPP_NUMBER = "918279962736";
export const WHATSAPP_MESSAGE = "Hi Doctor, I want consultation";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const PHONE_NUMBER = "+91-8279962736";
export const EMAIL = "haldwaniplasticsurgery@gmail.com";
export const INSTAGRAM_LINK = "https://www.instagram.com/drsarikaplasticsurgeryarts";
export const FACEBOOK_LINK = "https://www.facebook.com/drsarikagangwar";

export const CLINIC_NAME = "Dr. Sarika Gangwar — Cosmetic & Plastic Surgery Clinic";
export const CLINIC_ADDRESS = "Haldwani, Nainital, Uttarakhand 263139";
export const CLINIC_CITY = "Haldwani";
export const CLINIC_STATE = "Uttarakhand";
export const CLINIC_PINCODE = "263139";

export const CLINIC_LOCATIONS = [
  {
    name: "Chandan Hospital",
    role: "Chairperson, Plastic Surgery Department",
    address: "Chandan Hospital, Haldwani, Uttarakhand",
    hours: "9:00 AM – 5:00 PM",
    days: "Monday – Saturday",
  },
  {
    name: "Healthscapes Clinic",
    role: "Cosmetic & Aesthetic Surgery",
    address: "Healthscapes, Main Market, Piilikothi Chaurha, Near Nainital Bank,Haldwani, Uttarakhand",
    hours: "5:00 PM – 7:00 PM",
    days: "Monday – Saturday",
  },
];

export const GOOGLE_MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13926.764937855569!2d79.52002874103519!3d29.232635282540606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a09b005b79c201%3A0x7961a16189c46cdb!2sChandan%20Hospital!5e0!3m2!1sen!2sin!4v1776766769256!5m2!1sen!2sin";

export const SERVICE_CATEGORIES = [
  "Face",
  "Breast",
  "Body",
  "Genitals",
  "Hair & Skin",
] as const;

export type ServiceCategory = (typeof SERVICE_CATEGORIES)[number];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Results", href: "/results" },
  { label: "Contact", href: "/contact" },
];
