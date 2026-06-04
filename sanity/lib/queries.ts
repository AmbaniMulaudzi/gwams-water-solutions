// sanity/lib/queries.ts

export const siteSettingsQuery = `
  *[_type == "siteSettings"][0] {
    _id,
    title,
    description,
    logo,
    phone,
    whatsapp,
    email,
    address,
    location,
    contactPerson,
    socialLinks
  }
`;

export const heroQuery = `
  *[_type == "heroSection"][0] {
    _id,
    heading,
    subheading,
    cta,
    ctaLink,
    secondaryCta,
    secondaryCtaLink,
    backgroundImage,
    stats
  }
`;

export const servicesQuery = `
  *[_type == "service"] | order(order asc) {
    _id,
    title,
    slug,
    description,
    longDescription,
    icon,
    image,
    features,
    price,
    featured,
    order
  }
`;

export const featuredServicesQuery = `
  *[_type == "service" && featured == true] | order(order asc) [0..3] {
    _id,
    title,
    slug,
    description,
    icon,
    image,
    features
  }
`;

export const serviceBySlugQuery = `
  *[_type == "service" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    longDescription,
    icon,
    image,
    features,
    price
  }
`;

export const testimonialsQuery = `
  *[_type == "testimonial"] | order(_createdAt desc) {
    _id,
    name,
    location,
    rating,
    review,
    image,
    service,
    date
  }
`;

export const galleryQuery = `
  *[_type == "galleryItem"] | order(date desc) {
    _id,
    title,
    description,
    image,
    category,
    featured,
    date
  }
`;

export const featuredGalleryQuery = `
  *[_type == "galleryItem" && featured == true] | order(date desc) [0..5] {
    _id,
    title,
    description,
    image,
    category
  }
`;

export const blogPostsQuery = `
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    "author": author->{ name, image },
    categories,
    publishedAt,
    readTime
  }
`;

export const blogPostBySlugQuery = `
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    body,
    mainImage,
    "author": author->{ name, image },
    categories,
    publishedAt,
    readTime
  }
`;

export const faqsQuery = `
  *[_type == "faq"] | order(order asc) {
    _id,
    question,
    answer,
    category,
    order
  }
`;

export const aboutQuery = `
  *[_type == "about"][0] {
    _id,
    heading,
    subheading,
    body,
    image,
    values,
    yearsExperience,
    projectsCompleted,
    happyClients
  }
`;
