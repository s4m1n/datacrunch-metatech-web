import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

interface PageErrorProps {
  message?: string
  onRetry?: () => void
}

export function PageError({
  message = 'Something went wrong while loading the page.',
  onRetry,
}: PageErrorProps) {
  return (
    <Container className="py-24">
      <div className="max-w-lg rounded-2xl border border-border bg-bg-elevated p-8">
        <h2 className="text-xl font-semibold text-ink">Unable to load content</h2>
        <p className="mt-3 text-muted">{message}</p>
        {onRetry && (
          <div className="mt-6">
            <Button onClick={onRetry}>Try again</Button>
          </div>
        )}
      </div>
    </Container>
  )
}
