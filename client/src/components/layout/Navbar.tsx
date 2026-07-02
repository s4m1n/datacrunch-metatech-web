import { useState } from 'react'
import type { NavLink as NavLinkType } from '@/types/api'
import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/ui/Logo'

interface NavbarProps {
  links: NavLinkType[]
  cta: { label: string; href: string }
}

const navLinkClassName =
  'font-body text-[14px] leading-[24px] font-bold tracking-[-0.05em] text-ink/90 transition-colors hover:text-accent'

const navCtaClassName =
  'font-body !text-[14px] !leading-[24px] !font-extrabold tracking-[-0.05em]'

export function Navbar({ links, cta }: NavbarProps) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto flex h-[80px] w-full max-w-[1400px] items-center gap-[10px] rounded-[25px] bg-nav/90 px-[20px] py-[15px] backdrop-blur-md">
        <a href="/" aria-label="MetaTech home" className="shrink-0">
          <Logo />
        </a>

        <nav
          aria-label="Primary"
          className="hidden flex-1 items-center justify-center gap-[25px] lg:flex"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={navLinkClassName}
            >
              {link.label}
            </a>
          ))}
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

      {open && (
        <nav
          aria-label="Mobile"
          className="mx-auto mt-2 max-w-[1400px] rounded-[25px] border border-border bg-nav px-[20px] py-[15px] lg:hidden"
        >
          <ul className="flex flex-col gap-[10px]">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`block ${navLinkClassName}`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
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
