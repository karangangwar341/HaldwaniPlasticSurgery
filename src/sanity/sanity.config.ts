import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export default defineConfig({
  name: "dr-sarika-studio",
  title: "Dr. Sarika Gangwar — CMS",

  projectId,
  dataset,
  basePath: "/studio",

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Doctor Profile")
              .child(
                S.document()
                  .schemaType("doctor")
                  .documentId("doctor-profile")
                  .title("Doctor Profile")
              ),
            S.divider(),
            S.listItem()
              .title("Services")
              .schemaType("service")
              .child(S.documentTypeList("service").title("Services")),
            S.listItem()
              .title("Testimonials")
              .schemaType("testimonial")
              .child(S.documentTypeList("testimonial").title("Testimonials")),
            S.listItem()
              .title("Before / After Results")
              .schemaType("result")
              .child(S.documentTypeList("result").title("Results")),
          ]),
    }),
    visionTool({ defaultApiVersion: "2024-01-01" }),
  ],

  schema: {
    types: schemaTypes,
  },
});
