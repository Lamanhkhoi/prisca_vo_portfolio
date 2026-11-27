import { useId, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import { EASE, cn } from '@/lib/utils'

/** 60fps Accordion animating strictly opacity and transform (never height). */
export default function Accordion({ openLabel, closeLabel, children, className }) {
  const [open, setOpen] = useState(false)
  const panelId = useId()

  return (
    <div className={className}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="group inline-flex items-center gap-2 text-sm font-semibold text-navy underline decoration-accent decoration-2 underline-offset-4 transition-colors duration-200 hover:decoration-current"
      >
        {open ? closeLabel : openLabel}
        <ChevronDown
          className={cn('size-4 transition-transform duration-200 ease-(--ease-brand)', open && 'rotate-180')}
          strokeWidth={1.75}
          aria-hidden="true"
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            key="panel"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="pt-4"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
