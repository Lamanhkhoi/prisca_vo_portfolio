import { motion, useReducedMotion } from 'motion/react'
import { EASE } from '@/lib/utils'

/**
 * Editorial vertical timeline with tabular-nums mono dates and hairline spine.
 * items: [{ id, period, title, subtitle, text }]
 */
export default function Timeline({ items }) {
  const reduce = useReducedMotion()

  return (
    <div className="relative">
      <motion.span
        aria-hidden="true"
        className="absolute left-[4px] top-2 bottom-2 w-px origin-top bg-navy/15"
        initial={reduce ? false : { scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: '0px 0px -15% 0px' }}
        transition={{ duration: 0.9, ease: EASE }}
      />
      <ol className="divide-y divide-navy/8">
        {items.map((item, i) => (
          <motion.li
            key={item.id ?? i}
            className="relative py-6 pl-8 first:pt-0 last:pb-0"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -8% 0px' }}
            transition={{ duration: 0.45, delay: Math.min(i * 0.04, 0.2), ease: EASE }}
          >
            <span
              aria-hidden="true"
              className="absolute left-0 top-[29px] size-[9px] rounded-full border-2 border-accent bg-canvas first:top-[5px]"
              style={i === 0 ? { top: '5px' } : undefined}
            />
            <p className="font-mono text-xs font-semibold tabular-nums uppercase tracking-[0.12em] text-accent">
              {item.period}
            </p>
            <h3 className="mt-1.5 text-base font-bold leading-snug tracking-[-0.01em] text-navy md:text-lg">
              {item.title}
            </h3>
            {item.subtitle && (
              <p className="mt-1 text-sm font-semibold text-navy-700">{item.subtitle}</p>
            )}
            {item.text && (
              <p className="mt-2.5 max-w-[62ch] text-[15px] leading-[1.68] text-navy-600">
                {item.text}
              </p>
            )}
          </motion.li>
        ))}
      </ol>
    </div>
  )
}
