import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

const VARIANTS = {
  primary: 'bg-navy text-white hover:bg-navy-800',
  outline: 'border border-navy/20 bg-surface text-navy hover:border-navy hover:bg-stone/60',
  accent: 'bg-accent text-white hover:bg-accent-dark',
  light: 'border border-white/25 bg-white/5 text-white hover:border-white/50 hover:bg-white/10',
  lightSolid: 'bg-surface text-navy hover:bg-canvas',
}

const BASE =
  'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200 ease-(--ease-brand) active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 disabled:active:scale-100'

/** Renders a router Link (to), an anchor (href) or a button, with tactile hover/active feedback. */
export default function Button({ to, href, variant = 'primary', className, children, ...rest }) {
  const classes = cn(BASE, VARIANTS[variant] ?? VARIANTS.primary, className)
  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  )
}
