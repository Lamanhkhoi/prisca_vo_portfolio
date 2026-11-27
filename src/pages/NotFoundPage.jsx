import { useTranslation } from 'react-i18next'
import { ArrowLeft } from 'lucide-react'
import { useDocumentTitle } from '@/hooks/useContent'
import Button from '@/components/ui/Button'

export default function NotFoundPage() {
  const { t } = useTranslation()
  useDocumentTitle(t('notFound.title'))

  return (
    <section className="mx-auto flex max-w-xl flex-col items-center px-5 py-28 text-center">
      <p className="text-7xl font-extrabold tracking-tight text-navy-200">404</p>
      <h1 className="mt-4 text-3xl font-bold">{t('notFound.title')}</h1>
      <p className="mt-3 text-navy-600">{t('notFound.text')}</p>
      <Button to="/" className="mt-8">
        <ArrowLeft className="size-4" aria-hidden="true" />
        {t('notFound.back')}
      </Button>
    </section>
  )
}
