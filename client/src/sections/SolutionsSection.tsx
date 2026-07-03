import { useState } from 'react'
import type { HomeContent } from '@/types/api'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

interface SolutionsSectionProps {
  solutions: HomeContent['solutions']
}

export function SolutionsSection({ solutions }: SolutionsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeTab = solutions.tabs[activeIndex]

  return (
    <section
      id="solutions"
      className="-mx-5 w-[calc(100%+40px)] bg-section-light py-16 text-[#161616] lg:py-24"
    >
      <Container>
        <div className="px-5">
          <div className="overflow-x-auto [-ms-overflow-style:none] scrollbar-none lg:flex lg:justify-center lg:overflow-visible [&::-webkit-scrollbar]:hidden">
            <div
              role="tablist"
              aria-label="Solution categories"
              className="inline-flex w-max flex-nowrap gap-1 rounded-full bg-white p-1.5"
            >
            {solutions.tabs.map((tab, index) => {
              const isActive = index === activeIndex

              return (
                <button
                  key={tab.id}
                  id={`solution-tab-${tab.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveIndex(index)}
                  className={`shrink-0 whitespace-nowrap rounded-full px-5 py-2.5 font-body text-[14px] leading-[24px] font-semibold tracking-[-0.05em] transition-colors duration-300 sm:px-6 ${
                    isActive
                      ? 'bg-[#161616] text-accent'
                      : 'text-[#161616] hover:text-[#161616]/70'
                  }`}
                >
                  {tab.label}
                </button>
              )
            })}
            </div>
          </div>
        </div>

        <div
          role="tabpanel"
          className="mt-12 px-5 lg:mt-16"
          aria-labelledby={`solution-tab-${activeTab.id}`}
        >
          <div className="grid gap-8 lg:grid-cols-[412px_1fr] lg:items-start lg:gap-16">
            <p
              aria-hidden="true"
              className="-mt-5 font-heading text-[96px] leading-none font-extrabold tracking-[-0.03em] lg:text-[180px]"
            >
              {activeTab.index}
            </p>

            <div className="flex max-w-[640px] flex-col gap-6 lg:gap-8">
              <h2 className="font-heading text-[21px] leading-[27px] font-extrabold tracking-[-0.03em] lg:text-[32px] lg:leading-[39px]">
                {activeTab.title}
              </h2>

              <p className="font-body text-[16px] leading-[23px] font-light tracking-normal">
                {activeTab.description}
              </p>

              <div>
                <Button variant="dark" href={activeTab.cta.href}>
                  {activeTab.cta.label}
                </Button>
              </div>
            </div>
          </div>

          <ul className="mt-12 grid gap-4 lg:mt-16 lg:grid-cols-3">
            {activeTab.principles.map((principle) => (
              <li
                key={principle.id}
                className="group relative h-[450px] overflow-hidden rounded-[15px] border border-[#161616]/12 bg-white transition-[background-color,border-color,box-shadow] duration-300 ease-out hover:border-accent/40 hover:bg-bg hover:shadow-[0_0_0_1px] hover:shadow-accent/25 lg:h-[457px]"
              >
                <div className="absolute inset-0 flex items-center justify-center p-[30px] opacity-100 transition-opacity duration-300 ease-out group-hover:opacity-0">
                  <h3 className="text-center font-heading text-[32px] leading-[36px] font-extrabold tracking-[-0.05em] text-[#161616]">
                    {principle.title}
                  </h3>
                </div>

                <div className="absolute inset-0 flex flex-col justify-between p-[30px] opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
                  <h3 className="text-left font-heading text-[32px] leading-[36px] font-extrabold tracking-[-0.05em] text-accent">
                    {principle.title}
                  </h3>
                  <p className="text-left font-body text-[16px] leading-[23px] font-light text-white">
                    {principle.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
