import type { TechStackLogo } from '@/types/api'

interface TechStackCardProps {
  logo: TechStackLogo
}

export function TechStackCard({ logo }: TechStackCardProps) {
  return (
    <div className="flex h-[100px] w-[208px] shrink-0 items-center justify-center rounded-[15px] border-[0.5px] border-[#161616]/10 bg-[#f5f7f6] p-3 lg:h-[150px] lg:w-[250px] lg:p-6">
      <img
        src={logo.logoUrl}
        alt={logo.name}
        className="max-h-full max-w-full object-contain"
        loading="lazy"
        decoding="async"
      />
    </div>
  )
}
