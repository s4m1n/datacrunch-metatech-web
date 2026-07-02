import type { ElementType, ReactNode } from 'react'

export function Container({
  as: Tag = 'div',
  className = '',
  children,
}: {
  as?: ElementType
  className?: string
  children: ReactNode
}) {
  return (
    <Tag
      className={`mx-auto w-full max-w-[1400px] ${className}`}
    >
      {children}
    </Tag>
  )
}
