import type { HomeContent } from '@/types/api'
import { TechStackMarquee } from '@/components/tech-stacks/TechStackMarquee'
import { Container } from '@/components/ui/Container'

interface TechStacksSectionProps {
  techStacks: HomeContent['techStacks']
}

export function TechStacksSection({ techStacks }: TechStacksSectionProps) {
  return (
    <section className="-mx-5 w-[calc(100%+40px)] bg-white py-16 text-[#161616] lg:py-24">
      <Container>
        <div className="grid gap-8 px-[20px] lg:grid-cols-[412px_1fr] lg:items-start lg:gap-16">
          <p className="font-body text-[18px] leading-[30px] font-semibold tracking-figma">
            {techStacks.label}
          </p>

          <div className="max-w-[681px]">
            <h2 className="mb-12 h-[36px] w-full font-heading text-[28px] leading-[36px] font-extrabold tracking-figma lg:mb-8 lg:text-[32px]">
              {techStacks.title}
            </h2>
            <p className="mt-4 h-auto w-full font-body text-[14px] leading-[27px] font-normal tracking-figma-subtle text-[#161616]/80 lg:h-[81px] lg:text-[18px]">
              {techStacks.description}
            </p>
          </div>
        </div>
      </Container>

      <div className="mt-12 flex flex-col gap-4 lg:mt-16 lg:gap-5">
        {techStacks.rows.map((row) => (
          <TechStackMarquee
            key={row.id}
            logos={row.logos}
            direction={row.direction}
            offset={row.offset}
          />
        ))}
      </div>
    </section>
  )
}
