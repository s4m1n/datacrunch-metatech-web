import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { VideoSection } from '@/sections/VideoSection'

const mockVideo = {
  imageUrl: '/images/video-thumbnail.png',
  overlayText: 'METATECH',
  title: 'MetaTech Overview',
  videoUrl: 'https://www.youtube.com/watch?v=LXb3EKDiInQ',
}

describe('VideoSection', () => {
  it('renders overlay text and opens the video modal from the play button', async () => {
    const user = userEvent.setup()

    render(<VideoSection video={mockVideo} />)

    expect(screen.getByText('METATECH')).toBeInTheDocument()
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Play video' }))

    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText('MetaTech Overview')).toBeInTheDocument()
    expect(screen.getByTitle('MetaTech Overview')).toHaveAttribute(
      'src',
      'https://www.youtube.com/embed/LXb3EKDiInQ?autoplay=1&rel=0',
    )
  })
})
