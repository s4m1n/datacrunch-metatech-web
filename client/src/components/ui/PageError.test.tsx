import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { PageError } from '@/components/ui/PageError'

describe('PageError', () => {
  it('renders the error message and triggers retry when clicked', async () => {
    const user = userEvent.setup()
    const onRetry = vi.fn()

    render(
      <PageError message="Network request failed" onRetry={onRetry} />,
    )

    expect(screen.getByText('Unable to load content')).toBeInTheDocument()
    expect(screen.getByText('Network request failed')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Try again' }))

    expect(onRetry).toHaveBeenCalledOnce()
  })
})
