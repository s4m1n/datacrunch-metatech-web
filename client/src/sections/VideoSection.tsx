import { useState } from 'react'
import type { HomeContent } from '@/types/api'
import { VideoSectionFrame } from '@/components/video/VideoSectionFrame'
import { Container } from '@/components/ui/Container'
import { VideoModal } from '@/components/ui/VideoModal'

interface VideoSectionProps {
  video: HomeContent['video']
}

export function VideoSection({ video }: VideoSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="pb-16 pt-6 lg:pb-24 lg:pt-10">
        <Container>
          <div className="relative mx-auto max-w-[1400px]">
            <div className="mb-[30px] flex justify-center lg:absolute lg:left-1/2 lg:top-[10.2%] lg:z-10 lg:mb-0 lg:-translate-x-1/2 lg:-translate-y-1/2">
              <button
                type="button"
                aria-label="Play video"
                onClick={() => setIsModalOpen(true)}
                className="cursor-pointer"
              >
                <svg
                  width="130"
                  height="130"
                  viewBox="0 0 130 130"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect
                    width="130"
                    height="130"
                    rx="65"
                    fill="#33F987"
                    fillOpacity="0.25"
                  />
                  <rect
                    x="12.5"
                    y="12.5"
                    width="105"
                    height="105"
                    rx="52.5"
                    fill="#33F987"
                    fillOpacity="0.5"
                  />
                  <rect
                    x="28"
                    y="28"
                    width="74"
                    height="74"
                    rx="37"
                    fill="#33F987"
                  />
                  <path
                    d="M77.5 62.4019C79.5 63.5566 79.5 66.4434 77.5 67.5981L61 77.1244C59 78.2791 56.5 76.8357 56.5 74.5263L56.5 55.4737C56.5 53.1643 59 51.7209 61 52.8756L77.5 62.4019Z"
                    fill="#032019"
                  />
                </svg>
              </button>
            </div>

            <div className="relative">
              <VideoSectionFrame imageUrl={video.imageUrl} />

              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-bg/50 via-transparent to-transparent" />

              <p
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-1 left-15 font-heading text-[48px] leading-none font-extrabold tracking-figma text-[#FFFFFF66] sm:bottom-8 sm:left-8 sm:text-[64px] lg:bottom-10 lg:left-10 lg:text-[96px] lg:text-accent"
              >
                {video.overlayText}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <VideoModal
        isOpen={isModalOpen}
        title={video.title}
        videoUrl={video.videoUrl}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}
