import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { NAV } from '@/config/site'
import ContactList from '@/components/ui/ContactList'
import CvButton from '@/components/ui/CvButton'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <p className="text-2xl font-extrabold tracking-tight">
            {t('brand.name')}
            <span className="text-lime">.</span>
          </p>
          <p className="mt-4 max-w-sm leading-relaxed text-navy-200">{t('footer.tagline')}</p>
          <CvButton variant="lime" className="mt-6" />
        </div>

        <nav aria-label={t('footer.explore')} className="md:col-span-3">
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-navy-300">{t('footer.explore')}</h2>
          <ul className="mt-5 space-y-3 text-sm">
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
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-navy-300">{t('contact.title')}</h2>
          <ContactList tone="dark" className="mt-5" />
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-6 text-xs text-navy-300 md:px-8">{t('footer.rights', { year })}</p>
      </div>
    </footer>
  )
}
