/**
 * API response contracts served by the backend.
 * Mirror of client/src/types/api.ts — keep the two in sync.
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
