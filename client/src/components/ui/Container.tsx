import type { ElementType, ReactNode } from 'react'

/**
 * Layout container that centers content and applies the max page width.
 * Polymorphic via `as` so sections can render as <section>, <header>, etc.
 */
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
    <Tag className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </Tag>
  )
}
