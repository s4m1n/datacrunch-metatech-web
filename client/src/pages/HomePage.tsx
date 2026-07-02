import { Container } from '@/components/ui/Container'

/**
 * Home page. Sections (Hero, Features, Testimonials, CTA) are composed here
 * during UI development and fed by React Query hooks.
 */
export function HomePage() {
  return (
    <Container as="section" className="py-24">
      <p className="text-sm font-medium uppercase tracking-widest text-brand-600">
        Phase 1 · Setup complete
      </p>
      <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
        Data + AI Intelligence platform
      </h1>
      <p className="mt-4 max-w-xl text-lg text-muted">
        The app shell, routing, styling, and data layer are wired up. Sections
        from the Figma design get built here next.
      </p>
    </Container>
  )
}
