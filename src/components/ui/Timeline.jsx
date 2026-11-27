import { motion, useReducedMotion } from 'motion/react'
import { EASE } from '@/lib/utils'

/**
 * Vertical timeline. The line draws itself as the list scrolls into view.
 * items: [{ id, period, title, subtitle, text }]
 */
export default function Timeline({ items }) {
  const reduce = useReducedMotion()

  return (
    <div className="relative">
      <motion.span
        aria-hidden="true"
        className="absolute left-[7px] top-2 bottom-2 w-0.5 origin-top bg-navy-200 md:left-[183px]"
        initial={reduce ? false : { scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: '0px 0px -15% 0px' }}
        transition={{ duration: 1.2, ease: EASE }}
      />
      <ol className="space-y-8">
        {items.map((item, i) => (
          <motion.li
            key={item.id ?? i}
            className="relative grid gap-1 pl-8 md:grid-cols-[160px_1fr] md:gap-12 md:pl-0"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -8% 0px' }}
            transition={{ duration: 0.55, delay: Math.min(i * 0.06, 0.3), ease: EASE }}
          >
            <span
              aria-hidden="true"
              className="absolute left-0 top-1.5 size-4 rounded-full border-[3px] border-white bg-lime ring-2 ring-navy md:left-[176px]"
            />
            <p className="text-sm font-bold text-navy-600 md:pt-0.5 md:text-right">{item.period}</p>
            <div className="md:pl-6">
              <h3 className="text-lg font-bold leading-snug">{item.title}</h3>
              {item.subtitle && <p className="mt-1 text-sm font-semibold text-navy-700">{item.subtitle}</p>}
              {item.text && <p className="mt-2 max-w-2xl leading-relaxed text-navy-600">{item.text}</p>}
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  )
}
