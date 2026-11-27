import { MotionConfig } from 'motion/react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { BackToTop, ScrollProgress, SkipLink } from '@/components/layout/PageChrome'
import PageTransition from '@/components/motion/PageTransition'

export default function RootLayout() {
  return (
    <MotionConfig reducedMotion="user">
      <SkipLink />
      <ScrollProgress />
      <div className="flex min-h-dvh flex-col">
        <Header />
        <div className="flex-1">
          <PageTransition />
        </div>
        <Footer />
      </div>
      <BackToTop />
    </MotionConfig>
  )
}
