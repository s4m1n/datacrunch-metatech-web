import type { FooterContent, FooterLink } from '@/types/api'
import { Container } from '@/components/ui/Container'

interface FooterProps {
  footer: FooterContent
}

const MOBILE_SOCIAL_ORDER = ['linkedin', 'youtube', 'instagram', 'facebook']

const mobileFooterLinkClassName =
  'font-body text-[18px] leading-[24px] font-bold tracking-figma text-white underline decoration-solid decoration-white underline-offset-0 transition-colors hover:text-accent'

const desktopLegalLinkClassName =
  'font-body text-[14px] leading-[24px] font-normal text-white underline decoration-white underline-offset-[6px] transition-colors hover:text-accent'

const socialLinkDesktopClassName =
  'font-body text-[14px] leading-[24px] font-normal text-white transition-colors hover:text-accent'

function sortSocialLinks(links: FooterLink[], order: string[]) {
  return [...links].sort(
    (a, b) => order.indexOf(a.id) - order.indexOf(b.id),
  )
}

function Copyright({ copyright }: { copyright: FooterContent['copyright'] }) {
  return (
    <p className="font-body text-[14px] leading-[24px] font-normal text-white">
      @{copyright.yearStart}-{copyright.yearEnd}{' '}
      <span className="text-accent">{copyright.companyName}</span>
      {' // '}
      {copyright.rightsText}
    </p>
  )
}

function FooterDivider({ className }: { className?: string }) {
  return <span aria-hidden="true" className={`block h-px w-6 bg-white ${className}`} />
}

export function Footer({ footer }: FooterProps) {
  const mobileSocialLinks = sortSocialLinks(footer.socialLinks, MOBILE_SOCIAL_ORDER)

  return (
    <footer
      id="contact"
      className="-mx-5 mt-auto w-[calc(100%+40px)] overflow-hidden bg-black pb-0 text-white lg:relative lg:h-[358px] lg:min-h-0"
    >
      <Container className="px-[20px] lg:max-w-[1440px]">
        <nav
          aria-label="Footer"
          className="flex flex-col gap-4 lg:hidden"
        >
          {footer.legalLinks.map((link) => (
            <a key={link.id} href={link.href} className={mobileFooterLinkClassName}>
              {link.label}
            </a>
          ))}

          <FooterDivider className="my-4"/>

          {mobileSocialLinks.map((link) => (
            <a key={link.id} href={link.href} className={mobileFooterLinkClassName}>
              {link.label}
            </a>
          ))}

          <FooterDivider className="mt-4 mb-6"/>

          <Copyright copyright={footer.copyright} />
        </nav>

        <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-8 lg:pt-[40px] lg:pb-0">
          <Copyright copyright={footer.copyright} />

          <div className="flex items-center gap-10">
            {footer.legalLinks.map((link) => (
              <a key={link.id} href={link.href} className={desktopLegalLinkClassName}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center justify-end gap-10">
            {footer.socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={socialLinkDesktopClassName}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Container>

      <div className="footer-wordmark-wrap mt-6 pb-0 lg:mt-0 lg:px-0">
        <img
          src="/logos/MetaTech-Footer.png"
          alt="MetaTech"
          className="footer-wordmark-logo w-full h-auto"
          width={1440}
          height={227}
          loading="lazy"
          decoding="async"
        />
      </div>
    </footer>
  )
}
