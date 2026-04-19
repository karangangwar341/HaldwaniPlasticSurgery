/**
 * Sanity Environment Variables
 *
 * Create a .env.local with:
 *   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
 *   NEXT_PUBLIC_SANITY_DATASET=production
 */

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your_project_id";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = "2024-01-01";
