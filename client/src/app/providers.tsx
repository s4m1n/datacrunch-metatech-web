import { type ReactNode, useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { UIProvider } from '@/app/context/UIContext'
import { ErrorBoundary } from '@/components/ui/ErrorBoundary'

export function AppProviders({ children }: { children: ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 1,
            refetchOnWindowFocus: false,
            staleTime: 60_000,
          },
        },
      }),
  )

  return (
    <QueryClientProvider client={queryClient}>
      <UIProvider>
        <ErrorBoundary>{children}</ErrorBoundary>
      </UIProvider>
    </QueryClientProvider>
  )
}
