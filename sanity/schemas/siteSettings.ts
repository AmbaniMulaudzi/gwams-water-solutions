// sanity/schemas/siteSettings.ts
import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Site Title", type: "string" }),
    defineField({ name: "description", title: "Site Description", type: "text" }),
    defineField({ name: "logo", title: "Logo", type: "image" }),
    defineField({ name: "phone", title: "Phone Number", type: "string" }),
    defineField({ name: "whatsapp", title: "WhatsApp Number", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "address", title: "Address", type: "string" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "contactPerson", title: "Contact Person", type: "string" }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      fields: [
        { name: "facebook", type: "url", title: "Facebook" },
        { name: "instagram", type: "url", title: "Instagram" },
        { name: "twitter", type: "url", title: "Twitter" },
        { name: "linkedin", type: "url", title: "LinkedIn" },
      ],
    }),
  ],
});
