"use client";
/**
 * Sanity Studio embedded in Next.js at /studio
 *
 * Open http://localhost:3000/studio to edit content.
 * Authentication is handled by Sanity — you'll be prompted to log in.
 */
import { NextStudio } from "next-sanity/studio";
import config from "@/sanity/sanity.config";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
