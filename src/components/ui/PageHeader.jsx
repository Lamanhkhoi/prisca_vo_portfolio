import { motion } from 'motion/react'
import { EASE } from '@/lib/utils'
import { Container } from './Primitives'

const rise = (delay) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: EASE },
})

/** Compact navy band at the top of every inner page. */
export default function PageHeader({ eyebrow, title, lead, children }) {
  return (
    <header className="relative overflow-hidden bg-navy-950 text-white">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(60%_120%_at_100%_0%,rgba(48,216,72,0.14),transparent_60%)]" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-lime/50 to-transparent" />
      <Container className="relative py-10 md:py-14">
        <motion.p {...rise(0)} className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-lime">
          <span aria-hidden="true" className="h-px w-8 bg-lime" />
          {eyebrow}
        </motion.p>
        <motion.h1 {...rise(0.05)} className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight md:text-[2.6rem] md:leading-[1.1]">
          {title}
        </motion.h1>
        <motion.p {...rise(0.1)} className="mt-4 max-w-2xl leading-relaxed text-navy-200 md:text-lg">
          {lead}
        </motion.p>
        {children}
      </Container>
    </header>
  )
}
