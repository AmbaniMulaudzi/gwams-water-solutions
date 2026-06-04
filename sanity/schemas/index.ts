// sanity/schemas/heroSection.ts
import { defineField, defineType } from "sanity";

export const heroSection = defineType({
  name: "heroSection",
  title: "Hero Section",
  type: "document",
  fields: [
    defineField({ name: "heading", title: "Heading", type: "string" }),
    defineField({ name: "subheading", title: "Subheading", type: "text" }),
    defineField({ name: "cta", title: "CTA Button Text", type: "string" }),
    defineField({ name: "ctaLink", title: "CTA Link", type: "string" }),
    defineField({ name: "secondaryCta", title: "Secondary CTA Text", type: "string" }),
    defineField({ name: "secondaryCtaLink", title: "Secondary CTA Link", type: "string" }),
    defineField({ name: "backgroundImage", title: "Background Image", type: "image" }),
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      of: [{ type: "object", fields: [{ name: "value", type: "string", title: "Value" }, { name: "label", type: "string", title: "Label" }] }],
    }),
  ],
});

// sanity/schemas/testimonial.ts
export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonials",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Customer Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "rating", title: "Rating (1-5)", type: "number", validation: (r) => r.min(1).max(5) }),
    defineField({ name: "review", title: "Review", type: "text" }),
    defineField({ name: "image", title: "Photo", type: "image" }),
    defineField({ name: "service", title: "Service Used", type: "string" }),
    defineField({ name: "date", title: "Date", type: "date" }),
  ],
});

// sanity/schemas/galleryItem.ts
export const galleryItem = defineType({
  name: "galleryItem",
  title: "Gallery",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true }, validation: (r) => r.required() }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Borehole", value: "borehole" },
          { title: "Water Tank", value: "tank" },
          { title: "Pump", value: "pump" },
          { title: "Installation", value: "installation" },
          { title: "Repair", value: "repair" },
        ],
      },
    }),
    defineField({ name: "featured", title: "Featured", type: "boolean", initialValue: false }),
    defineField({ name: "date", title: "Date", type: "date" }),
  ],
});

// sanity/schemas/blogPost.ts
export const blogPost = defineType({
  name: "blogPost",
  title: "Blog Posts",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text" }),
    defineField({ name: "body", title: "Body", type: "array", of: [{ type: "block" }, { type: "image" }] }),
    defineField({ name: "mainImage", title: "Main Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "author", title: "Author", type: "reference", to: [{ type: "author" }] }),
    defineField({ name: "categories", title: "Categories", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "publishedAt", title: "Published At", type: "datetime" }),
    defineField({ name: "readTime", title: "Read Time (minutes)", type: "number" }),
  ],
});

// sanity/schemas/author.ts
export const author = defineType({
  name: "author",
  title: "Authors",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "image", title: "Photo", type: "image" }),
    defineField({ name: "bio", title: "Bio", type: "text" }),
  ],
});

// sanity/schemas/faq.ts
export const faq = defineType({
  name: "faq",
  title: "FAQs",
  type: "document",
  fields: [
    defineField({ name: "question", title: "Question", type: "string", validation: (r) => r.required() }),
    defineField({ name: "answer", title: "Answer", type: "text", validation: (r) => r.required() }),
    defineField({ name: "category", title: "Category", type: "string" }),
    defineField({ name: "order", title: "Order", type: "number" }),
  ],
});

// sanity/schemas/about.ts
export const about = defineType({
  name: "about",
  title: "About Section",
  type: "document",
  fields: [
    defineField({ name: "heading", title: "Heading", type: "string" }),
    defineField({ name: "subheading", title: "Subheading", type: "string" }),
    defineField({ name: "body", title: "Body", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
    defineField({
      name: "values",
      title: "Company Values",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "title", type: "string", title: "Title" },
          { name: "description", type: "text", title: "Description" },
          { name: "icon", type: "string", title: "Icon" },
        ],
      }],
    }),
    defineField({ name: "yearsExperience", title: "Years of Experience", type: "number" }),
    defineField({ name: "projectsCompleted", title: "Projects Completed", type: "number" }),
    defineField({ name: "happyClients", title: "Happy Clients", type: "number" }),
  ],
});

// sanity/schemas/contactSubmission.ts
export const contactSubmission = defineType({
  name: "contactSubmission",
  title: "Contact Submissions",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({ name: "service", title: "Service Requested", type: "string" }),
    defineField({ name: "message", title: "Message", type: "text" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "submittedAt", title: "Submitted At", type: "datetime" }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: { list: ["new", "read", "responded"] },
      initialValue: "new",
    }),
  ],
});
