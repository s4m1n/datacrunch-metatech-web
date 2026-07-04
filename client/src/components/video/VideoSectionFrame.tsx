const FRAME_PATH =
  'M1400 601C1400 620.33 1384.33 636 1365 636H35C15.67 636 0 620.33 0 601V100C0 80.67 15.67 65 35 65H571.192C590.448 65 605.451 81.1247 612.781 98.9308C626.328 131.836 658.708 155 696.5 155H704.5C742.292 155 774.672 131.836 788.219 98.9308C795.549 81.1247 810.552 65 829.808 65H1365C1384.33 65 1400 80.67 1400 100V601Z'

interface VideoSectionFrameProps {
  imageUrl: string
  className?: string
}

export function VideoSectionFrame({
  imageUrl,
  className = '',
}: VideoSectionFrameProps) {
  return (
    <svg
      viewBox="0 0 1400 639"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`h-auto w-full ${className}`.trim()}
      role="img"
      aria-hidden="true"
    >
      <defs>
        <mask
          id="video-section-mask"
          maskUnits="userSpaceOnUse"
          x="0"
          y="65"
          width="1400"
          height="571"
          style={{ maskType: 'alpha' }}
        >
          <path d={FRAME_PATH} fill="white" />
        </mask>
        <linearGradient
          id="video-section-gradient"
          x1="31.5"
          y1="87"
          x2="1344"
          y2="627.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.25" stopColor="#161616" />
          <stop offset="0.480769" stopColor="#06FF70" />
          <stop offset="0.754808" stopColor="#161616" />
        </linearGradient>
      </defs>

      <g mask="url(#video-section-mask)">
        <image
          href={imageUrl}
          x="-2"
          y="-30"
          width="1402"
          height="934"
          preserveAspectRatio="xMidYMid slice"
        />
      </g>

      <path
        d={FRAME_PATH}
        fill="url(#video-section-gradient)"
        fillOpacity="0.3"
      />
    </svg>
  )
}
