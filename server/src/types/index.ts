/**
 * API response contracts served by the backend.
 * Mirror of client/src/types/api.ts — keep the two in sync.
 */

export interface CtaLink {
  label: string
  href: string
}

export interface NavLink {
  label: string
  href: string
}

export interface SolutionsMegaMenuItem {
  id: string
  title: string
  href: string
  imageUrl: string
}

export interface TextSegment {
  text: string
  highlight?: boolean
}

export interface PartnerLogo {
  id: string
  name: string
  logoUrl: string
}

export interface SolutionPrinciple {
  id: string
  title: string
  description: string
}

export interface SolutionTab {
  id: string
  label: string
  index: string
  title: string
  description: string
  cta: CtaLink
  principles: SolutionPrinciple[]
}

export interface ShowcaseSlide {
  id: string
  brand: string
  logoUrl: string
  title: string
  description: string
  cta: CtaLink
  imageUrl: string
}

export interface TechStackLogo {
  id: string
  name: string
  logoUrl: string
}

export interface TechStackRow {
  id: string
  direction: 'left' | 'right'
  offset?: boolean
  logos: TechStackLogo[]
}

export interface FooterLink {
  id: string
  label: string
  href: string
}

export interface FooterContent {
  copyright: {
    yearStart: number
    yearEnd: number
    companyName: string
    rightsText: string
  }
  legalLinks: FooterLink[]
  socialLinks: FooterLink[]
}

export interface HomeContent {
  navigation: {
    links: NavLink[]
    cta: CtaLink
    solutionsMenu: SolutionsMegaMenuItem[]
  }
  hero: {
    headline: TextSegment[]
    description: string
    primaryCta: CtaLink
  }
  weAre: {
    label: string
    lead: string
    body: string
  }
  solutions: {
    tabs: SolutionTab[]
  }
  showcase: {
    slides: ShowcaseSlide[]
  }
  techStacks: {
    label: string
    title: string
    description: string
    rows: TechStackRow[]
  }
  video: {
    imageUrl: string
    overlayText: string
  }
  trustedBy: {
    headline: TextSegment[]
    logos: PartnerLogo[]
  }
  footer: FooterContent
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
