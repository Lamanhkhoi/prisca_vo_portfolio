import { cn } from '@/lib/utils'

export function Container({ className, children }) {
  return <div className={cn('mx-auto w-full max-w-6xl px-5 md:px-8', className)}>{children}</div>
}

const TONES = {
  white: 'bg-white',
  muted: 'bg-navy-50',
  navy: 'bg-navy text-white',
}

export function Section({ className, tone = 'white', children, ...rest }) {
  return (
    <section className={cn('py-12 md:py-16', TONES[tone], className)} {...rest}>
      <Container>{children}</Container>
    </section>
  )
}

/** Section title with a short gold rule. */
export function SectionHeading({ title, aside, id, className, light = false }) {
  return (
    <div className={cn('mb-6 flex flex-wrap items-end justify-between gap-3 md:mb-8', className)}>
      <div>
        <span aria-hidden="true" className="mb-3 block h-0.5 w-8 bg-gold" />
        <h2 id={id} className={cn('text-xl font-bold tracking-tight md:text-2xl', light && 'text-white')}>
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
        'group relative overflow-hidden rounded-xl border border-navy-100 bg-white p-5 md:p-6',
        interactive &&
          'transition duration-300 ease-(--ease-brand) hover:-translate-y-0.5 hover:border-navy-300 hover:shadow-[0_18px_40px_-24px_rgba(10,35,56,0.45)]',
        className,
      )}
      {...rest}
    >
      {interactive && (
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gold transition-transform duration-500 ease-(--ease-brand) group-hover:scale-x-100"
        />
      )}
      {children}
    </Tag>
  )
}

export function Chip({ className, children, tone = 'outline' }) {
  const tones = {
    outline: 'border border-navy-200 bg-white text-navy',
    navy: 'bg-navy text-white',
    gold: 'bg-gold-50 text-gold-dark ring-1 ring-gold/30',
    soft: 'bg-navy-50 text-navy-700',
    dark: 'border border-white/20 text-navy-100',
  }
  return (
    <span className={cn('inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold', tones[tone], className)}>
      {children}
    </span>
  )
}

export function IconBadge({ icon: Icon, className }) {
  return (
    <span className={cn('grid size-10 shrink-0 place-items-center rounded-lg bg-navy text-gold-light', className)}>
      <Icon className="size-5" strokeWidth={1.8} aria-hidden="true" />
    </span>
  )
}

/** Small uppercase label used above blocks inside cards. */
export function Label({ className, children, as: Tag = 'p' }) {
  return <Tag className={cn('text-xs font-bold uppercase tracking-wider text-navy-600', className)}>{children}</Tag>
}
