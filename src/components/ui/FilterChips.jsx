import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

/** Single-select filter pills with a sliding active background and a count per option. */
export default function FilterChips({ label, options, value, onChange, getLabel, getCount, layoutId }) {
  return (
    <div role="group" aria-label={label} className="mb-6 flex flex-wrap gap-2">
      {options
        .filter((o) => getCount(o) > 0)
        .map((o) => {
          const active = value === o
          return (
            <button
              key={o}
              type="button"
              aria-pressed={active}
              onClick={() => onChange(o)}
              className={cn(
                'relative rounded-full border px-4 py-2 text-sm font-semibold transition-colors duration-300',
                active ? 'border-navy text-white' : 'border-navy-200 text-navy-700 hover:border-navy',
              )}
            >
              {active && (
                <motion.span
                  layoutId={layoutId}
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full bg-navy"
                  transition={{ type: 'spring', stiffness: 420, damping: 36 }}
                />
              )}
              <span className="relative">
                {getLabel(o)} <span className={active ? 'text-gold-light' : 'text-navy-400'}>{getCount(o)}</span>
              </span>
            </button>
          )
        })}
    </div>
  )
}
