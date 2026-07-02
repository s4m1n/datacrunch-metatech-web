import type { TextSegment } from '@/types/api'

interface HighlightTextProps {
  segments: TextSegment[]
  className?: string
  as?: 'h1' | 'h2' | 'p' | 'span'
  fontFamily?: 'heading' | 'body'
}

export function HighlightText({
  segments,
  className = '',
  as: Tag = 'span',
  fontFamily = 'heading',
}: HighlightTextProps) {
  const fontClass = fontFamily === 'body' ? 'font-body' : 'font-heading'

  return (
    <Tag className={`${fontClass} ${className}`}>
      {segments.map((segment, index) => (
        <span
          key={`${segment.text}-${index}`}
          className={segment.highlight ? 'text-accent' : undefined}
        >
          {segment.text}
        </span>
      ))}
    </Tag>
  )
}
