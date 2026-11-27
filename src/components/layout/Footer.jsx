import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { NAV } from '@/config/site'
import logoMark from '@/assets/logo-mark.png'
import ContactList from '@/components/ui/ContactList'
import CvButton from '@/components/ui/CvButton'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-navy-950 text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <Link to="/" aria-label={t('brand.home')} className="inline-flex items-center gap-3">
            <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-surface p-1 ring-1 ring-white/15">
              <img
                src={logoMark}
                alt=""
                aria-hidden="true"
                width="32"
                height="32"
                className="size-full object-contain"
              />
            </span>
            <span className="text-xl font-extrabold tracking-[-0.02em] text-white">{t('brand.name')}</span>
          </Link>
          <p className="mt-2.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent-light">
            {t('brand.suffix')}
          </p>
          <p className="mt-4 max-w-[38ch] text-sm leading-[1.68] text-navy-300">{t('footer.tagline')}</p>
          <CvButton variant="accent" className="mt-6" />
        </div>

        <nav aria-label={t('footer.explore')} className="md:col-span-3">
          <h2 className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-navy-400">
            {t('footer.explore')}
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV.map((item) => (
              <li key={item.key}>
                <Link
                  to={item.path}
                  className="text-navy-200 decoration-accent-light underline-offset-4 transition-colors duration-200 hover:text-white hover:underline"
                >
                  {t(`nav.${item.key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <h2 className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-navy-400">
            {t('contact.title')}
          </h2>
          <ContactList tone="dark" className="mt-4" />
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-6 py-5 font-mono text-xs text-navy-400 md:px-10">
          {t('footer.rights', { year })}
        </p>
      </div>
    </footer>
  )
}
