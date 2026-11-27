import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

/** Single-select editorial filter pills with sliding active indicator and tabular-nums count. */
export default function FilterChips({ label, options, value, onChange, getLabel, getCount, layoutId }) {
  return (
    <div role="group" aria-label={label} className="mb-8 flex flex-wrap gap-2">
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
                'relative rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors duration-200 active:scale-[0.98]',
                active
                  ? 'border-navy text-white'
                  : 'border-navy/12 bg-surface text-navy-700 hover:border-navy/35 hover:text-navy',
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
              <span className="relative inline-flex items-center gap-1.5">
                {getLabel(o)}
                <span className={cn('font-mono text-xs tabular-nums', active ? 'text-accent-light' : 'text-navy-400')}>
                  {getCount(o)}
                </span>
              </span>
            </button>
          )
        })}
    </div>
  )
}
