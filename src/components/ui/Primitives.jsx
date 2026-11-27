import { cn } from '@/lib/utils'

export function Container({ className, children }) {
  return <div className={cn('mx-auto w-full max-w-6xl px-5 md:px-8', className)}>{children}</div>
}

export function Section({ className, children, ...rest }) {
  return (
    <section className={cn('py-14 md:py-20', className)} {...rest}>
      <Container>{children}</Container>
    </section>
  )
}

/** Section title with the lime accent bar. */
export function SectionHeading({ title, aside, id, className }) {
  return (
    <div className={cn('mb-8 flex flex-wrap items-end justify-between gap-4 md:mb-10', className)}>
      <div>
        <span aria-hidden="true" className="mb-3 block h-1 w-10 rounded-full bg-lime" />
        <h2 id={id} className="text-2xl font-bold tracking-tight md:text-3xl">
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
        'group relative overflow-hidden rounded-2xl border border-navy-100 bg-white p-6',
        interactive &&
          'transition duration-300 ease-(--ease-brand) hover:-translate-y-1 hover:border-navy-200 hover:shadow-[0_22px_44px_-26px_rgba(10,35,56,0.45)]',
        className,
      )}
      {...rest}
    >
      {interactive && (
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-lime transition-transform duration-500 ease-(--ease-brand) group-hover:scale-x-100"
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
    lime: 'bg-lime-100 text-lime-700 ring-1 ring-lime-200',
    soft: 'bg-navy-50 text-navy-700',
  }
  return (
    <span className={cn('inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold', tones[tone], className)}>
      {children}
    </span>
  )
}

export function IconBadge({ icon: Icon, className }) {
  return (
    <span className={cn('grid size-11 shrink-0 place-items-center rounded-xl bg-lime-100 text-lime-700', className)}>
      <Icon className="size-5" strokeWidth={1.8} aria-hidden="true" />
    </span>
  )
}
