import { describe, expect, it } from 'vitest'
import { toVideoEmbedUrl } from '@/lib/video'

describe('toVideoEmbedUrl', () => {
  it('converts a YouTube watch URL to an autoplay embed iframe', () => {
    const result = toVideoEmbedUrl(
      'https://www.youtube.com/watch?v=LXb3EKDiInQ',
    )

    expect(result).toEqual({
      type: 'iframe',
      src: 'https://www.youtube.com/embed/LXb3EKDiInQ?autoplay=1&rel=0',
    })
  })

  it('converts a youtu.be URL to an autoplay embed iframe', () => {
    const result = toVideoEmbedUrl('https://youtu.be/abc123')

    expect(result).toEqual({
      type: 'iframe',
      src: 'https://www.youtube.com/embed/abc123?autoplay=1&rel=0',
    })
  })

  it('returns a direct video source for non-YouTube URLs', () => {
    const result = toVideoEmbedUrl('/videos/overview.mp4')

    expect(result).toEqual({
      type: 'video',
      src: '/videos/overview.mp4',
    })
  })
})
