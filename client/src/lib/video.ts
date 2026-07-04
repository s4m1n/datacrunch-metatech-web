export function toVideoEmbedUrl(url: string): {
  type: 'iframe' | 'video'
  src: string
} {
  const youtubeIdMatch = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]+)/,
  )

  if (youtubeIdMatch) {
    return {
      type: 'iframe',
      src: `https://www.youtube.com/embed/JnX7Oc8LqD8?autoplay=1&rel=0`,
    }
  }

  if (url.includes('youtube.com/embed')) {
    const separator = url.includes('?') ? '&' : '?'
    const autoplaySrc = url.includes('autoplay=1')
      ? url
      : `${url}${separator}autoplay=1`

    return { type: 'iframe', src: autoplaySrc }
  }

  return { type: 'video', src: url }
}
