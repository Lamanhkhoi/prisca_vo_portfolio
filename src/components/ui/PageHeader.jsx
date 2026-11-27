import { motion } from 'motion/react'
import { EASE } from '@/lib/utils'
import { Container } from './Primitives'

const rise = (delay) => ({
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, delay, ease: EASE },
})

/**
 * Compact Editorial Masthead on the Warm Alabaster canvas.
 * Eliminates tall empty subpage banners by pairing the left headline with high-signal right-side metrics/context.
 */
export default function PageHeader({ eyebrow, title, lead, stats = [], aside, children }) {
  return (
    <header className="border-b border-navy/10 bg-canvas">
      <Container className="py-10 md:py-14">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <motion.p
              {...rise(0)}
              className="flex items-center gap-2.5 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-accent"
            >
              <span aria-hidden="true" className="h-px w-6 bg-accent" />
              {eyebrow}
            </motion.p>
            <motion.h1
              {...rise(0.05)}
              className="mt-3.5 text-3xl font-extrabold tracking-[-0.025em] leading-[1.1] text-navy md:text-[2.65rem]"
            >
              {title}
            </motion.h1>
            <motion.p
              {...rise(0.1)}
              className="mt-4 max-w-[60ch] text-[16px] leading-[1.65] text-navy-700 md:text-[17px]"
            >
              {lead}
            </motion.p>
            {children}
          </div>

          {(stats.length > 0 || aside) && (
            <motion.div {...rise(0.12)} className="lg:col-span-4 lg:pb-1">
              {aside}
              {stats.length > 0 && (
                <dl className="grid grid-cols-2 gap-4 border-t border-navy/10 pt-5 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
                  {stats.map((item) => (
                    <div key={item.label}>
                      <dt className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-navy-600">
                        {item.label}
                      </dt>
                      <dd className="mt-1 font-mono text-xl font-bold tabular-nums tracking-tight text-navy md:text-2xl">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              )}
            </motion.div>
          )}
        </div>
      </Container>
    </header>
  )
}
