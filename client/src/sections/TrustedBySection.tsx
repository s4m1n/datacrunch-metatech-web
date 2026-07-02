import type { HomeContent } from '@/types/api'
import { Container } from '@/components/ui/Container'
import { HighlightText } from '@/components/ui/HighlightText'
import { LogoGrid } from '@/components/ui/LogoGrid'

interface TrustedBySectionProps {
  trustedBy: HomeContent['trustedBy']
}

export function TrustedBySection({ trustedBy }: TrustedBySectionProps) {
  return (
    <section className="pb-20 lg:pb-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[192px_1fr] lg:items-start lg:gap-16">
          <HighlightText
            as="h2"
            fontFamily="body"
            segments={trustedBy.headline}
            className="h-auto w-full max-w-[192px] text-[18px] leading-[20px] font-semibold tracking-tighter lg:h-[60px]"
          />

          <LogoGrid logos={trustedBy.logos} />
        </div>
      </Container>
    </section>
  )
}
