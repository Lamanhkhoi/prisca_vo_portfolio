import { useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { ArrowUp } from 'lucide-react'

/** Thin gold reading-progress bar under the header. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 220, damping: 32, restDelta: 0.001 })
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-50 h-[3px] origin-left bg-gold"
    />
  )
}

export function BackToTop() {
  const { t } = useTranslation()
  const { scrollY } = useScroll()
  const [visible, setVisible] = useState(false)

  useMotionValueEvent(scrollY, 'change', (y) => setVisible(y > 700))

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label={t('actions.backToTop')}
          title={t('actions.backToTop')}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 right-6 z-40 grid size-12 place-items-center rounded-full bg-navy text-white shadow-lg shadow-navy/20 transition-colors hover:bg-gold-light hover:text-navy"
        >
          <ArrowUp className="size-5" aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export function SkipLink() {
  const { t } = useTranslation()
  return (
    <a
      href="#main"
      className="fixed left-4 top-3 z-[60] -translate-y-24 rounded-full bg-navy px-4 py-2 text-sm font-semibold text-white transition-transform focus:translate-y-0"
    >
      {t('nav.skip')}
    </a>
  )
}
