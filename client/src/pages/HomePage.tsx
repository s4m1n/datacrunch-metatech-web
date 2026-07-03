import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { PageError } from '@/components/ui/PageError'
import { PageLoader } from '@/components/ui/PageLoader'
import { useHome } from '@/hooks/useHome'
import { HeroSection } from '@/sections/HeroSection'
import { ShowcaseSection } from '@/sections/ShowcaseSection'
import { SolutionsSection } from '@/sections/SolutionsSection'
import { TechStacksSection } from '@/sections/TechStacksSection'
import { TrustedBySection } from '@/sections/TrustedBySection'
import { VideoSection } from '@/sections/VideoSection'
import { WeAreSection } from '@/sections/WeAreSection'

export function HomePage() {
  const { data, isLoading, isError, error, refetch } = useHome()

  if (isLoading) return <PageLoader />

  if (isError || !data) {
    return (
      <PageError
        message={error instanceof Error ? error.message : undefined}
        onRetry={() => refetch()}
      />
    )
  }

  return (
    <>
      <Navbar links={data.navigation.links} cta={data.navigation.cta} />
      <HeroSection hero={data.hero} />
      <VideoSection video={data.video} />
      <TrustedBySection trustedBy={data.trustedBy} />
      <WeAreSection weAre={data.weAre} />
      <SolutionsSection solutions={data.solutions} />
      <ShowcaseSection showcase={data.showcase} />
      <TechStacksSection techStacks={data.techStacks} />
      <Footer footer={data.footer} />
    </>
  )
}
