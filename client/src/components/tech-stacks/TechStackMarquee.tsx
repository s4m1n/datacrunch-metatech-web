import type { TechStackLogo } from '@/types/api'
import { TechStackCard } from '@/components/tech-stacks/TechStackCard'

interface TechStackMarqueeProps {
  logos: TechStackLogo[]
  direction: 'left' | 'right'
  offset?: boolean
}

export function TechStackMarquee({
  logos,
  direction,
  offset = false,
}: TechStackMarqueeProps) {
  const cardWidth = 208
  const gap = 16
  const setWidth = logos.length * cardWidth + Math.max(logos.length - 1, 0) * gap + gap
  const repeats = Math.max(4, Math.ceil(1800 / setWidth))
  const trackLogos = Array.from({ length: repeats }, () => logos).flat()

  const renderTrack = (copy: number) => (
    <div
      className="flex shrink-0 items-center gap-4 pr-4"
      aria-hidden={copy === 1 ? true : undefined}
    >
      {trackLogos.map((logo, index) => (
        <TechStackCard key={`${logo.id}-${copy}-${index}`} logo={logo} />
      ))}
    </div>
  )

  return (
    <div className={`overflow-hidden ${offset ? 'lg:pl-[224px]' : ''}`}>
      <div
        className={`flex w-max will-change-transform ${
          direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
        }`}
      >
        {renderTrack(0)}
        {renderTrack(1)}
      </div>
    </div>
  )
}
