import { useTranslation } from 'react-i18next'
import { Download } from 'lucide-react'
import { SITE } from '@/config/site'
import Button from './Button'

/** Shows a download link once SITE.cvUrl is set, otherwise a disabled button. */
export default function CvButton({ variant = 'outline', className }) {
  const { t } = useTranslation()

  if (SITE.cvUrl) {
    return (
      <Button href={SITE.cvUrl} download="Vo-Thi-Minh-Phuong-CV.pdf" variant={variant} className={className}>
        <Download className="size-4" strokeWidth={1.75} aria-hidden="true" />
        {t('actions.downloadCv')}
      </Button>
    )
  }

  return (
    <Button variant={variant} className={className} disabled title={t('actions.cvSoon')}>
      <Download className="size-4" strokeWidth={1.75} aria-hidden="true" />
      {t('actions.downloadCv')}
    </Button>
  )
}
