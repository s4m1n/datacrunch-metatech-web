import { Container } from '@/components/ui/Container'

export function PageLoader() {
  return (
    <Container className="py-24">
      <div className="animate-pulse space-y-6">
        <div className="h-4 w-32 rounded bg-white/10" />
        <div className="h-12 max-w-2xl rounded bg-white/10" />
        <div className="h-12 max-w-xl rounded bg-white/10" />
        <div className="h-24 max-w-md rounded bg-white/10" />
      </div>
    </Container>
  )
}
