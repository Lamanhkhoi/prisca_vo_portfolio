import { useTranslation } from 'react-i18next'
import { SITE } from '@/config/site'
import { cn } from '@/lib/utils'

/** Clean editorial portrait with crisp inner hairline ring — no decorative offset boxes. */
export default function Portrait({ className }) {
  const { t } = useTranslation()

  return (
    <figure className={cn('relative', className)}>
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-navy-800 ring-1 ring-inset ring-white/15 shadow-[0_28px_64px_-28px_rgba(0,0,0,0.65)]">
        {SITE.portraitUrl ? (
          <img
            src={SITE.portraitUrl}
            alt={t('placeholder.portraitAlt')}
            width="960"
            height="1280"
            className="size-full object-cover object-top"
            fetchPriority="high"
          />
        ) : (
          <div className="grid size-full place-items-center font-mono text-6xl font-bold text-navy-400">PV</div>
        )}
      </div>
    </figure>
  )
}
