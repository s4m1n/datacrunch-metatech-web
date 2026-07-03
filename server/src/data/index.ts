import type { Feature, HomeContent, Testimonial } from '../types/index.js'
import homeJson from './home.json' with { type: 'json' }
import featuresJson from './features.json' with { type: 'json' }
import testimonialsJson from './testimonials.json' with { type: 'json' }

export const home = homeJson as HomeContent
export const features = featuresJson as Feature[]
export const testimonials = testimonialsJson as Testimonial[]
