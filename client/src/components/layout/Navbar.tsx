import { useRef, useState } from 'react'
import type { NavLink as NavLinkType } from '@/types/api'
import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/ui/Logo'
import { SOLUTIONS, SolutionsMegaMenu } from '@/components/layout/SolutionsMegaMenu'

interface NavbarProps {
  links: NavLinkType[]
  cta: { label: string; href: string }
}

const navLinkClassName =
  'font-body text-[14px] leading-[24px] font-bold tracking-figma text-ink/90 transition-colors duration-300 hover:text-accent'

const navCtaClassName =
  'font-body !text-[14px] !leading-[24px] !font-extrabold tracking-figma'

export function Navbar({ links, cta }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false)
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const openSolutions = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
    setSolutionsOpen(true)
  }

  const scheduleCloseSolutions = () => {
    closeTimerRef.current = setTimeout(() => setSolutionsOpen(false), 180)
  }

  return (
    <header className="sticky top-0 z-50 overflow-visible">
      <div className="relative mx-auto w-full max-w-[1400px]">
        <div className="flex h-[80px] items-center gap-[10px] rounded-[25px] bg-nav/90 px-[20px] py-[15px] backdrop-blur-md">
          <a href="/" aria-label="MetaTech home" className="shrink-0">
            <Logo />
          </a>

          <nav
            aria-label="Primary"
            className="hidden flex-1 items-center justify-center gap-[25px] lg:flex"
          >
            {links.map((link) =>
              link.label === 'Solutions' ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={openSolutions}
                  onMouseLeave={scheduleCloseSolutions}
                >
                  <a
                    href={link.href}
                    aria-expanded={solutionsOpen}
                    className={`${navLinkClassName} ${
                      solutionsOpen ? 'text-accent' : ''
                    }`}
                  >
                    {link.label}
                  </a>
                </div>
              ) : (
                <a key={link.href} href={link.href} className={navLinkClassName}>
                  {link.label}
                </a>
              ),
            )}
          </nav>

          <div className="ml-auto hidden shrink-0 lg:block">
            <Button variant="secondary" href={cta.href} className={navCtaClassName}>
              {cta.label}
            </Button>
          </div>

          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="ml-auto inline-flex size-10 shrink-0 items-center justify-center rounded-lg text-ink lg:hidden"
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className="sr-only">Menu</span>
            <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
              {open ? (
                <path
                  fill="currentColor"
                  d="M6.225 4.811 4.811 6.225 10.586 12l-5.775 5.775 1.414 1.414L12 13.414l5.775 5.775 1.414-1.414L13.414 12l5.775-5.775-1.414-1.414L12 10.586z"
                />
              ) : (
                <path
                  fill="currentColor"
                  d="M4 7h16v2H4V7Zm0 5h16v2H4v-2Zm0 5h16v2H4v-2Z"
                />
              )}
            </svg>
          </button>
        </div>

        <div
          aria-hidden={!solutionsOpen}
          className={`absolute inset-x-0 top-[80px] z-50 hidden pt-[6px] transition-[opacity,transform,visibility] duration-300 ease-out lg:block ${
            solutionsOpen
              ? 'visible translate-y-0 opacity-100'
              : 'invisible translate-y-3 opacity-0'
          }`}
          style={{ pointerEvents: solutionsOpen ? 'auto' : 'none' }}
          onMouseEnter={openSolutions}
          onMouseLeave={scheduleCloseSolutions}
        >
          <SolutionsMegaMenu />
        </div>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="mx-auto mt-2 max-w-[1400px] rounded-[25px] border border-border bg-nav px-[20px] py-[15px] lg:hidden"
        >
          <ul className="flex flex-col gap-[10px]">
            {links.map((link) =>
              link.label === 'Solutions' ? (
                <li key={link.href}>
                  <button
                    type="button"
                    aria-expanded={mobileSolutionsOpen}
                    className={`block w-full text-left ${navLinkClassName} ${
                      mobileSolutionsOpen ? 'text-accent' : ''
                    }`}
                    onClick={() => setMobileSolutionsOpen((prev) => !prev)}
                  >
                    {link.label}
                  </button>
                  {mobileSolutionsOpen && (
                    <ul className="mt-3 flex flex-col gap-2 pl-2">
                      {SOLUTIONS.map((item) => (
                        <li key={item.id}>
                          <a
                            href={item.href}
                            className="block font-body text-sm font-semibold text-accent"
                            onClick={() => setOpen(false)}
                          >
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`block ${navLinkClassName}`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ),
            )}
            <li className="pt-1">
              <Button
                variant="secondary"
                href={cta.href}
                className={`w-full ${navCtaClassName}`}
              >
                {cta.label}
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
