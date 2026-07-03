import { useState } from 'react'
import type { HomeContent } from '@/types/api'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

interface ShowcaseSectionProps {
  showcase: HomeContent['showcase']
}

export function ShowcaseSection({ showcase }: ShowcaseSectionProps) {
  const [activeDot] = useState(0)
  const slide = showcase.slides[Math.min(activeDot, showcase.slides.length - 1)]

  return (
    <section
      id="showcase"
      className="-mx-5 w-[calc(100%+40px)] bg-showcase py-6 text-white"
    >
      <Container>
        <div className="flex lg:flex-row flex-col">
          <div className="px-5 flex flex-col justify-between">
            <img
              src={slide.logoUrl}
              alt={slide.brand}
              className="h-[40px] w-[279px] object-contain object-left"
              loading="lazy"
              decoding="async"
            />

            <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-2 lg:items-center lg:gap-16">
              <div className="flex flex-col gap-8 lg:gap-10">
                <div className="flex lg:w-[515px] flex-col gap-4">
                  <h2 className="font-heading text-[48px] leading-[54px] font-extrabold tracking-figma">
                    {slide.title}
                  </h2>
                  <p className="font-body text-[16px] leading-[23px] font-light">
                    {slide.description}
                  </p>
                </div>

                <div className="mb-10 lg:mb-0">
                  <Button variant="outline" href={slide.cta.href}>
                    {slide.cta.label}
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto [-ms-overflow-style:none] scrollbar-none lg:overflow-visible [&::-webkit-scrollbar]:hidden lg:mr-5 mx-5 mt-5">
            <div className="w-max max-w-full snap-center lg:w-full lg:snap-align-none">
              <div>
                <img
                  src={slide.imageUrl}
                  alt={`${slide.brand} product preview`}
                  className="h-auto w-full max-w-[700px] rounded-[25px] object-cover lg:h-[650px] lg:w-[700px]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
