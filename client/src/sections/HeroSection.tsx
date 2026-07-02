import type { HomeContent } from '@/types/api'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { HighlightText } from '@/components/ui/HighlightText'

interface HeroSectionProps {
  hero: HomeContent['hero']
}

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section className="pt-8 lg:pt-14">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[925px_1fr] lg:items-start lg:gap-16">
          <div className="h-auto w-full max-w-[925px] lg:h-[200px]">
            <HighlightText
              as="h1"
              segments={hero.headline}
              className="text-[48px] leading-[48px] font-extrabold tracking-tighter capitalize sm:text-[56px] sm:leading-[56px] lg:text-[72px] lg:leading-[72px]"
            />
          </div>

          <div className="flex flex-col gap-6 lg:pt-2">
            <p className="max-w-md text-base leading-relaxed text-muted sm:text-lg">
              {hero.description}
            </p>
            <div>
              <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
