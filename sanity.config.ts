// sanity.config.ts
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import siteSettings from "./sanity/schemas/siteSettings";
import service from "./sanity/schemas/service";
import {
  heroSection,
  testimonial,
  galleryItem,
  blogPost,
  author,
  faq,
  about,
  contactSubmission,
} from "./sanity/schemas/index";

export default defineConfig({
  name: "gwams-water-solutions",
  title: "GWAMS Vhalaudzi Water Solutions",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [
      siteSettings,
      heroSection,
      service,
      testimonial,
      galleryItem,
      blogPost,
      author,
      faq,
      about,
      contactSubmission,
    ],
  },
});
