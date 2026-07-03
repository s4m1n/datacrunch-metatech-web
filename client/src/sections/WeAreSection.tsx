import type { HomeContent } from '@/types/api'
import { Container } from '@/components/ui/Container'

interface WeAreSectionProps {
  weAre: HomeContent['weAre']
}

export function WeAreSection({ weAre }: WeAreSectionProps) {
  return (
    <section className="-mx-[20px] w-[calc(100%+40px)] bg-white py-16 text-[#161616] lg:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[412px_1fr] lg:items-start lg:gap-16">
          <p className="ml-[20px] font-body text-[18px] leading-[30px] font-semibold tracking-[-0.05em]">
            {weAre.label}
          </p>

          <p className="max-w-[900px] font-heading text-[21px] leading-[27px] tracking-[-0.03em] lg:text-[32px] lg:leading-[39px] ml-[20px] ">
            <span className="font-extrabold">{weAre.lead}</span>
            <span className="font-normal"> {weAre.body}</span>
          </p>
        </div>
      </Container>
    </section>
  )
}
