import type { HomeContent } from '../types/index.js'

export const home: HomeContent = {
  navigation: {
    links: [
      { label: 'Solutions', href: '#solutions' },
      { label: 'Showcase', href: '#showcase' },
      { label: 'Contact', href: '#contact' },
    ],
    cta: { label: 'Book a meeting', href: '#meeting' },
  },
  hero: {
    headline: [
      { text: 'Building ' },
      { text: 'Intelligence', highlight: true },
      { text: ' To Power ', highlight: true },
      { text: 'Scalable Innovation' },
    ],
    description:
      'MetaTech integrates custom software engineering, advanced data and AI systems, and strategic staff augmentation to power scalable, high impact digital transformation.',
    primaryCta: { label: 'Book for Demo', href: '#demo' },
  },
  video: {
    imageUrl: '/images/Hero-Banner.png',
    overlayText: 'METATECH',
  },
  trustedBy: {
    headline: [
      { text: 'Trusted by ', highlight: true },
      { text: 'product teams and enterprise ' },
      { text: 'innovators.', highlight: true },
    ],
    logos: [
      { id: 'databricks', name: 'Databricks', logoUrl: '/logos/databricks.svg' },
      {
        id: 'google-cloud',
        name: 'Google Cloud',
        logoUrl: '/logos/google-cloud.svg',
      },
      { id: 'uipath', name: 'UiPath', logoUrl: '/logos/uipath.svg' },
      { id: 'alteryx', name: 'Alteryx', logoUrl: '/logos/alteryx.svg' },
      { id: 'alteryx-2', name: 'Alteryx', logoUrl: '/logos/alteryx.svg' },
      { id: 'figma', name: 'Figma', logoUrl: '/logos/figma.svg' },
      { id: 'aws', name: 'AWS', logoUrl: '/logos/aws.svg' },
      {
        id: 'google-cloud-2',
        name: 'Google Cloud',
        logoUrl: '/logos/google-cloud.svg',
      },
    ],
  },
}
