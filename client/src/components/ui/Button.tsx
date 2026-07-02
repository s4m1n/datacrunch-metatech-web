import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  href?: string
  children: ReactNode
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-bg hover:bg-accent/90 focus-visible:ring-accent/50',
  secondary:
    'bg-btn-secondary text-ink backdrop-blur-sm hover:bg-white/20 focus-visible:ring-white/30',
}

export function Button({
  variant = 'primary',
  href,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const classes = [
    'inline-flex items-center justify-center rounded-full px-6 py-3 font-body text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2',
    variantClasses[variant],
    className,
  ].join(' ')

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
