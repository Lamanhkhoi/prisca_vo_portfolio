import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useLocation, useOutlet } from 'react-router-dom'
import { EASE } from '@/lib/utils'
import ErrorBoundary from '@/components/ErrorBoundary'

// Keeps the old page on screen while it animates out (useOutlet would otherwise swap it immediately).
function FrozenOutlet() {
  const outlet = useOutlet()
  const [frozen] = useState(outlet)
  return frozen
}

export default function PageTransition() {
  const { pathname } = useLocation()

  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <motion.main
        key={pathname}
        id="main"
        tabIndex={-1}
        className="outline-none"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.32, ease: EASE }}
      >
        <ErrorBoundary>
          <FrozenOutlet />
        </ErrorBoundary>
      </motion.main>
    </AnimatePresence>
  )
}
