import { motion } from 'motion/react'
import { EASE } from '@/lib/utils'
import { Container } from './Primitives'

/** Top band of every inner page: eyebrow, title and one-line lead. */
export default function PageHeader({ eyebrow, title, lead }) {
  return (
    <header className="relative overflow-hidden border-b border-navy-100 bg-navy-50">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[-8%] size-[22rem] rounded-full border-[44px] border-navy-100"
      />
      <Container className="relative py-14 md:py-20">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-navy-600"
        >
          <span aria-hidden="true" className="size-2 rounded-full bg-lime" />
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.06, ease: EASE }}
          className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight md:text-5xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
          className="mt-5 max-w-2xl text-base leading-relaxed text-navy-600 md:text-lg"
        >
          {lead}
        </motion.p>
      </Container>
    </header>
  )
}
