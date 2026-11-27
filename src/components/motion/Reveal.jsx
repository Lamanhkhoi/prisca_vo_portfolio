import { motion } from 'motion/react'
import { EASE } from '@/lib/utils'

const TAGS = { div: motion.div, section: motion.section, li: motion.li, article: motion.article }

/** Fades and lifts its children into view once, when they scroll into the viewport. */
export default function Reveal({ as = 'div', delay = 0, y = 18, className, children, ...rest }) {
  const Tag = TAGS[as] ?? motion.div
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.6, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
