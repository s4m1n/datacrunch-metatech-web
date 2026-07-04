import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { toVideoEmbedUrl } from '@/lib/video'

interface VideoModalProps {
  isOpen: boolean
  title: string
  videoUrl: string
  onClose: () => void
}

export function VideoModal({
  isOpen,
  title,
  videoUrl,
  onClose,
}: VideoModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const embed = toVideoEmbedUrl(videoUrl)

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return createPortal(
    <div
      className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-8"
      role="presentation"
    >
      <button
        type="button"
        aria-label="Close video"
        className="absolute inset-0 bg-[#051612]/90 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="video-modal-title"
        className="relative z-10 w-full max-w-[960px] overflow-hidden rounded-3xl border border-border bg-bg-elevated shadow-[0_24px_80px_rgba(0,0,0,0.55),0_0_0_1px_rgba(51,249,135,0.12)]"
      >
        <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-4 sm:px-6">
          <h2
            id="video-modal-title"
            className="font-heading text-lg font-extrabold tracking-figma text-ink sm:text-xl"
          >
            {title}
          </h2>
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-border text-ink transition-colors hover:border-accent/40 hover:text-accent"
          >
            <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
              <path
                fill="currentColor"
                d="M6.225 4.811 4.811 6.225 10.586 12l-5.775 5.775 1.414 1.414L12 13.414l5.775 5.775 1.414-1.414L13.414 12l5.775-5.775-1.414-1.414L12 10.586z"
              />
            </svg>
          </button>
        </div>

        <div className="aspect-video bg-black">
          {embed.type === 'iframe' ? (
            <iframe
              src={embed.src}
              title={title}
              className="size-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <video
              src={embed.src}
              className="size-full"
              controls
              autoPlay
              playsInline
            />
          )}
        </div>
      </div>
    </div>,
    document.body,
  )
}
