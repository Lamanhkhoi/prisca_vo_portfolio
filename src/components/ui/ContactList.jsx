import { useTranslation } from 'react-i18next'
import { Mail, MapPin, Phone } from 'lucide-react'
import { LinkedinIcon } from './icons'
import { CONTACT } from '@/config/site'
import { cn } from '@/lib/utils'

/** Phone, both emails, LinkedIn and location. tone="dark" for the dark navy footer. */
export default function ContactList({ tone = 'light', className }) {
  const { t } = useTranslation()
  const dark = tone === 'dark'
  const link = cn(
    'break-words underline-offset-4 transition-colors duration-200 hover:underline',
    dark ? 'text-white decoration-accent-light' : 'text-navy decoration-accent decoration-2',
  )
  const icon = cn('mt-0.5 size-4 shrink-0', dark ? 'text-accent-light' : 'text-accent')
  const label = cn('block font-mono text-[11px] font-semibold uppercase tracking-[0.14em]', dark ? 'text-navy-400' : 'text-navy-600')

  return (
    <ul className={cn('space-y-4 text-sm', className)}>
      <li className="flex gap-3">
        <Phone className={icon} strokeWidth={1.5} aria-hidden="true" />
        <span>
          <span className={label}>{t('contact.phone')}</span>
          <a href={CONTACT.phoneHref} className={cn(link, 'font-mono tabular-nums')}>
            {CONTACT.phone}
          </a>
        </span>
      </li>
      <li className="flex gap-3">
        <Mail className={icon} strokeWidth={1.5} aria-hidden="true" />
        <span>
          <span className={label}>{t('contact.email')}</span>
          {CONTACT.emails.map((email) => (
            <a key={email} href={`mailto:${email}`} className={cn(link, 'block')}>
              {email}
            </a>
          ))}
        </span>
      </li>
      <li className="flex gap-3">
        <LinkedinIcon className={icon} aria-hidden="true" />
        <span>
          <span className={label}>{t('contact.linkedin')}</span>
          <a href={CONTACT.linkedinHref} target="_blank" rel="noopener noreferrer" className={link}>
            {CONTACT.linkedin}
          </a>
        </span>
      </li>
      <li className="flex gap-3">
        <MapPin className={icon} strokeWidth={1.5} aria-hidden="true" />
        <span className={dark ? 'text-navy-200' : 'text-navy-700'}>{t('contact.location')}</span>
      </li>
    </ul>
  )
}
