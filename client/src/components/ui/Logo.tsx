const LOGO_SRC = '/images/MetaTech.png'

interface LogoProps {
  className?: string
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <img
      src={LOGO_SRC}
      alt="MetaTech"
      className={`h-5 w-auto sm:h-6 ${className}`}
      width={155}
      height={25}
      decoding="async"
    />
  )
}
