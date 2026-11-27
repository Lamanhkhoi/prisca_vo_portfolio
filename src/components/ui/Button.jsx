import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

const VARIANTS = {
  primary: 'bg-navy text-white hover:bg-navy-800',
  outline: 'border border-navy text-navy hover:bg-navy-50',
  lime: 'bg-lime text-navy hover:bg-lime-200',
}

const BASE =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300 ease-(--ease-brand) active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-55 disabled:active:scale-100'

/** Renders a router Link (to), an anchor (href) or a button, with the same look. */
export default function Button({ to, href, variant = 'primary', className, children, ...rest }) {
  const classes = cn(BASE, VARIANTS[variant], className)
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
