import { useTranslation } from 'react-i18next'
import { SITE } from '@/config/site'
import { cn } from '@/lib/utils'

/** Portrait with an offset gold frame. Falls back to initials until SITE.portraitUrl is set. */
export default function Portrait({ className }) {
  const { t } = useTranslation()

  return (
    <div className={cn('relative', className)}>
      <div aria-hidden="true" className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl border border-gold/70" />
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-navy-800">
        {SITE.portraitUrl ? (
          <img
            src={SITE.portraitUrl}
            alt={t('placeholder.portraitAlt')}
            width="960"
            height="1280"
            className="size-full object-cover object-[60%_20%]"
            fetchPriority="high"
          />
        ) : (
          <div className="grid size-full place-items-center text-7xl font-extrabold text-navy-600">PV</div>
        )}
      </div>
    </div>
  )
}
