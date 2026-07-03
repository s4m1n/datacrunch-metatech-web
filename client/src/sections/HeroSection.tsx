import type { HomeContent } from '@/types/api'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { HighlightText } from '@/components/ui/HighlightText'

interface HeroSectionProps {
  hero: HomeContent['hero']
}

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section className="pt-8 lg:pt-24 lg:px-8">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[664px_1fr] lg:items-start lg:gap-[160px]">
          <div className="h-auto w-full max-w-[664px] lg:h-[216px]">
            <HighlightText
              as="h1"
              segments={hero.headline}
              className="text-[48px] leading-[48px] font-extrabold tracking-figma capitalize sm:text-[56px] sm:leading-[56px] lg:text-[72px] lg:leading-[72px]"
            />
          </div>

          <div className="flex flex-col gap-10 lg:pt-8">
            <p className="h-auto w-full max-w-[388px] font-body text-[16px] leading-[23px] font-light tracking-normal lg:h-[92px]">
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
