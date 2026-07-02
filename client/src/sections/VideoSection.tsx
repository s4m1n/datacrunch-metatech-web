import type { HomeContent } from '@/types/api'
import { Container } from '@/components/ui/Container'

interface VideoSectionProps {
  video: HomeContent['video']
}

export function VideoSection({ video }: VideoSectionProps) {
  return (
    <section className="pb-16 pt-6 lg:pb-24 lg:pt-10">
      <Container>
        <div className="mx-auto max-w-[1400px]">
          <img
            src={video.imageUrl}
            alt="MetaTech team collaborating with data visualization overlay"
            className="h-auto w-full"
            loading="eager"
            decoding="async"
          />
        </div>
      </Container>
    </section>
  )
}
