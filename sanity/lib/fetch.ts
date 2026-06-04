// sanity/lib/fetch.ts
import { client } from "./client";
import type {
  SiteSettings,
  HeroSection,
  Service,
  Testimonial,
  GalleryItem,
  BlogPost,
  FAQ,
  AboutSection,
} from "@/types";
import {
  siteSettingsQuery,
  heroQuery,
  servicesQuery,
  featuredServicesQuery,
  serviceBySlugQuery,
  testimonialsQuery,
  galleryQuery,
  featuredGalleryQuery,
  blogPostsQuery,
  blogPostBySlugQuery,
  faqsQuery,
  aboutQuery,
} from "./queries";

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return client.fetch(siteSettingsQuery, {}, { next: { revalidate: 3600 } });
}

export async function getHero(): Promise<HeroSection | null> {
  return client.fetch(heroQuery, {}, { next: { revalidate: 3600 } });
}

export async function getServices(): Promise<Service[]> {
  return client.fetch(servicesQuery, {}, { next: { revalidate: 3600 } });
}

export async function getFeaturedServices(): Promise<Service[]> {
  return client.fetch(featuredServicesQuery, {}, { next: { revalidate: 3600 } });
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  return client.fetch(serviceBySlugQuery, { slug }, { next: { revalidate: 3600 } });
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return client.fetch(testimonialsQuery, {}, { next: { revalidate: 3600 } });
}

export async function getGallery(): Promise<GalleryItem[]> {
  return client.fetch(galleryQuery, {}, { next: { revalidate: 3600 } });
}

export async function getFeaturedGallery(): Promise<GalleryItem[]> {
  return client.fetch(featuredGalleryQuery, {}, { next: { revalidate: 3600 } });
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  return client.fetch(blogPostsQuery, {}, { next: { revalidate: 3600 } });
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  return client.fetch(blogPostBySlugQuery, { slug }, { next: { revalidate: 3600 } });
}

export async function getFAQs(): Promise<FAQ[]> {
  return client.fetch(faqsQuery, {}, { next: { revalidate: 3600 } });
}

export async function getAbout(): Promise<AboutSection | null> {
  return client.fetch(aboutQuery, {}, { next: { revalidate: 3600 } });
}
