/**
 * Shared API response contracts.
 * These mirror the shapes served by the Express backend (server/src/types).
 * Keep them in sync — this is the single source of truth for the client.
 */

export interface CtaLink {
  label: string
  href: string
}

export interface HomeContent {
  hero: {
    eyebrow: string
    title: string
    subtitle: string
    primaryCta: CtaLink
    secondaryCta?: CtaLink
  }
}

export interface Feature {
  id: string
  icon: string
  title: string
  description: string
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
  avatarUrl?: string
}
