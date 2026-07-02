interface PlayButtonProps {
  onClick?: () => void
  className?: string
}

export function PlayButton({ onClick, className = '' }: PlayButtonProps) {
  return (
    <button
      type="button"
      aria-label="Play video"
      onClick={onClick}
      className={`group relative flex size-16 items-center justify-center sm:size-20 ${className}`}
    >
      <span className="absolute inset-0 rounded-full border border-accent/20" />
      <span className="absolute inset-1 rounded-full border border-accent/35" />
      <span className="absolute inset-2 rounded-full border border-accent/50" />
      <span className="relative flex size-10 items-center justify-center rounded-full bg-accent sm:size-12">
        <svg
          viewBox="0 0 24 24"
          className="ml-0.5 size-4 fill-bg sm:size-5"
          aria-hidden="true"
        >
          <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l10.04-6.86a1 1 0 0 0 0-1.72L9.5 4.28A1 1 0 0 0 8 5.14Z" />
        </svg>
      </span>
    </button>
  )
}
