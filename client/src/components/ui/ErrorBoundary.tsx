import { Component, type ErrorInfo, type ReactNode } from 'react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  error: Error | null
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { error: null }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('[ErrorBoundary]', error, info.componentStack)
  }

  private handleRetry = () => {
    this.setState({ error: null })
  }

  render() {
    if (this.state.error) {
      return (
        <Container className="py-24">
          <div className="max-w-lg rounded-2xl border border-border bg-bg-elevated p-8">
            <h2 className="text-xl font-semibold text-ink">
              Something went wrong
            </h2>
            <p className="mt-3 text-muted">
              {this.state.error.message ||
                'An unexpected error occurred while rendering the page.'}
            </p>
            <div className="mt-6">
              <Button onClick={this.handleRetry}>Try again</Button>
            </div>
          </div>
        </Container>
      )
    }

    return this.props.children
  }
}
