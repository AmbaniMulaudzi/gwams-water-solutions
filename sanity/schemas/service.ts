// sanity/schemas/service.ts
import { defineField, defineType } from "sanity";

export default defineType({
  name: "service",
  title: "Services",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "description", title: "Short Description", type: "text" }),
    defineField({ name: "longDescription", title: "Long Description", type: "array", of: [{ type: "block" }] }),
    defineField({
      name: "icon",
      title: "Icon Name",
      type: "string",
      description: "Icon identifier: borehole-pump, pressure-pump, water-tank, pump-repair",
    }),
    defineField({ name: "image", title: "Service Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "features", title: "Features", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "price", title: "Starting Price", type: "string" }),
    defineField({ name: "featured", title: "Featured Service", type: "boolean", initialValue: false }),
    defineField({ name: "order", title: "Order", type: "number" }),
  ],
  orderings: [{ title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
});
