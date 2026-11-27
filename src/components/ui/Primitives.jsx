import { cn } from '@/lib/utils'

export function Container({ className, children }) {
  return <div className={cn('mx-auto w-full max-w-6xl px-6 md:px-10', className)}>{children}</div>
}

const TONES = {
  canvas: 'bg-canvas',
  white: 'bg-surface border-y border-navy/8',
  stone: 'bg-stone border-y border-navy/8',
  navy: 'bg-navy-950 text-white',
}

export function Section({ className, tone = 'canvas', children, ...rest }) {
  return (
    <section className={cn('py-16 md:py-24', TONES[tone] ?? TONES.canvas, className)} {...rest}>
      <Container>{children}</Container>
    </section>
  )
}

/** Editorial section heading with crisp hairline & optional mono index. */
export function SectionHeading({ title, eyebrow, aside, id, className, light = false }) {
  return (
    <div className={cn('mb-8 flex flex-wrap items-end justify-between gap-4 md:mb-10', className)}>
      <div>
        {eyebrow ? (
          <p className={cn('mb-2.5 flex items-center gap-2.5 font-mono text-xs font-semibold uppercase tracking-[0.16em]', light ? 'text-accent-light' : 'text-accent')}>
            <span aria-hidden="true" className={cn('h-px w-6', light ? 'bg-accent-light' : 'bg-accent')} />
            {eyebrow}
          </p>
        ) : (
          <span aria-hidden="true" className={cn('mb-3 block h-0.5 w-8', light ? 'bg-accent-light' : 'bg-accent')} />
        )}
        <h2
          id={id}
          className={cn(
            'text-2xl font-extrabold tracking-[-0.025em] leading-[1.15] md:text-[1.75rem]',
            light ? 'text-white' : 'text-navy',
          )}
        >
          {title}
        </h2>
      </div>
      {aside}
    </div>
  )
}

export function Card({ className, children, interactive = false, as: Tag = 'div', ...rest }) {
  return (
    <Tag
      className={cn(
        'group relative overflow-hidden rounded-xl border border-navy/10 bg-surface p-6 md:p-7',
        interactive &&
          'transition-all duration-300 ease-(--ease-brand) hover:-translate-y-0.5 hover:border-navy/20 hover:shadow-[0_18px_40px_-28px_rgba(10,35,56,0.35)]',
        className,
      )}
      {...rest}
    >
      {interactive && (
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-accent transition-transform duration-400 ease-(--ease-brand) group-hover:scale-x-100"
        />
      )}
      {children}
    </Tag>
  )
}

export function Chip({ className, children, tone = 'outline' }) {
  const tones = {
    outline: 'border border-navy/12 bg-surface text-navy-700',
    navy: 'bg-navy text-white',
    accent: 'bg-accent-soft text-accent-dark ring-1 ring-inset ring-accent/20',
    soft: 'bg-stone text-navy-700',
    dark: 'border border-white/15 bg-white/5 text-navy-200',
  }
  return (
    <span className={cn('inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[11px] font-semibold tracking-wide', tones[tone] ?? tones.outline, className)}>
      {children}
    </span>
  )
}

/** Small mono uppercase label used above blocks inside editorial layouts. */
export function Label({ className, children, as: Tag = 'p' }) {
  return (
    <Tag className={cn('font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-navy-600', className)}>
      {children}
    </Tag>
  )
}
