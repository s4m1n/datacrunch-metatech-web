import type { PartnerLogo } from '@/types/api'

interface LogoGridProps {
  logos: PartnerLogo[]
  className?: string
}

export function LogoGrid({ logos, className = '' }: LogoGridProps) {
  return (
    <ul
      className={`grid grid-cols-2 border-l border-t border-border lg:grid-cols-4 ${className}`}
    >
      {logos.map((logo) => (
        <li
          key={logo.id}
          className="flex min-h-[72px] items-center justify-center border-r border-b border-border px-4 py-6 sm:min-h-[88px]"
        >
          <img
            src={logo.logoUrl}
            alt={logo.name}
            className="max-h-6 w-auto max-w-[120px] object-contain opacity-90 sm:max-h-7"
          />
        </li>
      ))}
    </ul>
  )
}
