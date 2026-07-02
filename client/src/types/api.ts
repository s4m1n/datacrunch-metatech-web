export interface CtaLink {
  label: string
  href: string
}

export interface NavLink {
  label: string
  href: string
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

export interface HomeContent {
  navigation: {
    links: NavLink[]
    cta: CtaLink
  }
  hero: {
    headline: TextSegment[]
    description: string
    primaryCta: CtaLink
  }
  video: {
    imageUrl: string
    overlayText: string
  }
  trustedBy: {
    headline: TextSegment[]
    logos: PartnerLogo[]
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
