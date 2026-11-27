import { useTranslation } from 'react-i18next'
import { ImageIcon } from 'lucide-react'
import { SITE } from '@/config/site'
import { cn } from '@/lib/utils'

/** Portrait frame. Shows the photo from SITE.portraitUrl, or a branded placeholder until it is provided. */
export default function Portrait({ className }) {
  const { t } = useTranslation()

  return (
    <div className={cn('relative', className)}>
      <div aria-hidden="true" className="absolute -bottom-4 -right-4 h-full w-full rounded-[2rem] bg-navy" />
      <div aria-hidden="true" className="absolute -left-3 -top-3 size-14 rounded-2xl bg-lime" />
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-navy-100 bg-navy-50">
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
          <div className="flex size-full flex-col items-center justify-center gap-4 p-6 text-center">
            <span className="text-7xl font-extrabold tracking-tight text-navy-200 md:text-8xl">PV</span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-navy-600 ring-1 ring-navy-100">
              <ImageIcon className="size-4" aria-hidden="true" />
              {t('placeholder.portrait')}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
