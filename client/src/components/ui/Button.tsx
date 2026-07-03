import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'dark'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  href?: string
  children: ReactNode
}

const baseClasses =
  'inline-flex items-center justify-center gap-[10px] font-body transition-colors focus-visible:outline-none focus-visible:ring-2'

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'h-[50px] min-w-[160px] w-fit shrink-0 whitespace-nowrap rounded-[15px] px-[35px] py-[10px] bg-accent text-[#161616] text-sm font-semibold hover:bg-accent/90 focus-visible:ring-accent/50',
  secondary:
    'rounded-full px-6 py-3 text-sm font-semibold bg-btn-secondary text-ink backdrop-blur-sm hover:bg-white/20 focus-visible:ring-white/30',
  dark:
    'h-[40px] w-fit shrink-0 whitespace-nowrap rounded-full bg-[#161616] px-6 text-sm font-semibold text-white hover:bg-[#161616]/90 focus-visible:ring-[#161616]/40',
}

export function Button({
  variant = 'primary',
  href,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const classes = [baseClasses, variantClasses[variant], className].join(' ')

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
