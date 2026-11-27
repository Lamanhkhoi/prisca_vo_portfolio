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
    <footer className="border-t-2 border-lime bg-navy-950 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <Link to="/" aria-label={t('brand.home')} className="inline-flex items-center gap-3">
            <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-white p-1 shadow-sm">
              <img
                src={logoMark}
                alt=""
                aria-hidden="true"
                width="32"
                height="32"
                className="size-full object-contain"
              />
            </span>
            <span className="text-xl font-extrabold tracking-tight text-white">{t('brand.name')}</span>
          </Link>
          <p className="mt-2 text-sm font-semibold text-lime">{t('brand.suffix')}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-200">{t('footer.tagline')}</p>
          <CvButton variant="lime" className="mt-6" />
        </div>

        <nav aria-label={t('footer.explore')} className="md:col-span-3">
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-navy-400">{t('footer.explore')}</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV.map((item) => (
              <li key={item.key}>
                <Link to={item.path} className="text-navy-100 decoration-lime underline-offset-4 transition-colors hover:text-white hover:underline">
                  {t(`nav.${item.key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-navy-400">{t('contact.title')}</h2>
          <ContactList tone="dark" className="mt-4" />
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-navy-400 md:px-8">{t('footer.rights', { year })}</p>
      </div>
    </footer>
  )
}
