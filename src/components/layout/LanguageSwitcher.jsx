import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { LANGUAGES } from '@/i18n'
import { cn } from '@/lib/utils'

export default function LanguageSwitcher({ className, id = 'lang' }) {
  const { t, i18n } = useTranslation()
  const current = i18n.resolvedLanguage

  return (
    <div
      role="group"
      aria-label={t('lang.label')}
      className={cn('flex rounded-full border border-navy/15 bg-surface p-0.5', className)}
    >
      {LANGUAGES.map((lng) => {
        const active = current === lng
        return (
          <button
            key={lng}
            type="button"
            lang={lng}
            aria-pressed={active}
            aria-label={t(`lang.${lng}Name`)}
            onClick={() => i18n.changeLanguage(lng)}
            className={cn(
              'relative min-w-9 rounded-full px-2.5 py-1 font-mono text-[11px] font-bold transition-colors duration-200',
              active ? 'text-white' : 'text-navy-600 hover:text-navy',
            )}
          >
            {active && (
              <motion.span
                layoutId={`${id}-pill`}
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-navy"
                transition={{ type: 'spring', stiffness: 420, damping: 34 }}
              />
            )}
            <span className="relative">{t(`lang.${lng}`)}</span>
          </button>
        )
      })}
    </div>
  )
}
