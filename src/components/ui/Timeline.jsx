import { motion, useReducedMotion } from 'motion/react'
import { EASE } from '@/lib/utils'

/**
 * Compact vertical timeline; the line draws itself on scroll.
 * items: [{ id, period, title, subtitle, text }]
 */
export default function Timeline({ items }) {
  const reduce = useReducedMotion()

  return (
    <div className="relative">
      <motion.span
        aria-hidden="true"
        className="absolute left-[5px] top-2 bottom-2 w-px origin-top bg-navy-200"
        initial={reduce ? false : { scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: '0px 0px -15% 0px' }}
        transition={{ duration: 1.1, ease: EASE }}
      />
      <ol className="space-y-7">
        {items.map((item, i) => (
          <motion.li
            key={item.id ?? i}
            className="relative pl-8"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -8% 0px' }}
            transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.25), ease: EASE }}
          >
            <span aria-hidden="true" className="absolute left-0 top-1 size-[11px] rounded-full border-2 border-gold bg-white" />
            <p className="text-xs font-bold uppercase tracking-wider text-gold-dark">{item.period}</p>
            <h3 className="mt-1 text-base font-bold leading-snug md:text-lg">{item.title}</h3>
            {item.subtitle && <p className="mt-0.5 text-sm font-semibold text-navy-700">{item.subtitle}</p>}
            {item.text && <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-navy-600">{item.text}</p>}
          </motion.li>
        ))}
      </ol>
    </div>
  )
}
