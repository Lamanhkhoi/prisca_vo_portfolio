import { Award, BadgeCheck, ExternalLink, FolderOpen, Star } from 'lucide-react'
import { useContent, useDocumentTitle } from '@/hooks/useContent'
import { SITE } from '@/config/site'
import { cn } from '@/lib/utils'
import { Card, Chip, IconBadge, Section, SectionHeading } from '@/components/ui/Primitives'
import Button from '@/components/ui/Button'
import PageHeader from '@/components/ui/PageHeader'
import Reveal from '@/components/motion/Reveal'

function Awards() {
  const { t, list } = useContent('recognition')
  const items = list('awards.items')
  // Featured awards first (two wide cards), the rest below in three columns.
  const ordered = [...items.filter((a) => a.featured), ...items.filter((a) => !a.featured)]
  const featuredCount = items.filter((a) => a.featured).length
  return (
    <Section aria-labelledby="awards-title">
      <SectionHeading id="awards-title" title={t('awards.title')} />
      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
        {ordered.map((item, i) => (
          <Reveal
            as="li"
            key={`${item.date}-${item.title}`}
            delay={i * 0.05}
            className={i < featuredCount ? 'lg:col-span-3' : 'lg:col-span-2'}
          >
            <Card interactive className={cn('h-full', item.featured && 'border-navy-200 bg-navy-50')}>
              <div className="flex items-center justify-between gap-3">
                <IconBadge icon={item.featured ? Star : Award} className={item.featured ? 'bg-lime text-navy' : ''} />
                <Chip tone="navy">{item.date}</Chip>
              </div>
              <h3 className="mt-5 text-lg font-bold leading-snug">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">{item.org}</p>
            </Card>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}

function Certifications() {
  const { t, list } = useContent('recognition')
  return (
    <Section aria-labelledby="certs-title" className="bg-navy-50">
      <SectionHeading id="certs-title" title={t('certs.title')} />
      <div className="grid gap-8 lg:grid-cols-12">
        <ul className="space-y-4 lg:col-span-8">
          {list('certs.items').map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 0.05}>
              <div className="flex items-start gap-4 rounded-2xl border border-navy-100 bg-white p-5">
                <BadgeCheck className="mt-0.5 size-6 shrink-0 text-lime-700" aria-hidden="true" />
                <div className="flex-1">
                  <h3 className="font-bold leading-snug">{item.title}</h3>
                  {item.org && <p className="mt-1 text-sm text-navy-600">{item.org}</p>}
                </div>
                <span className="shrink-0 text-sm font-bold text-navy-600">{item.date}</span>
              </div>
            </Reveal>
          ))}
        </ul>
        <Reveal delay={0.1} className="lg:col-span-4">
          <Card className="h-full">
            <h3 className="text-sm font-bold uppercase tracking-wider text-navy-600">{t('certs.additionalTitle')}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {list('certs.additional').map((item) => (
                <li key={item}>
                  <Chip tone="soft" className="text-left leading-snug">
                    {item}
                  </Chip>
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>
      </div>
    </Section>
  )
}

function Evidence() {
  const { t } = useContent('recognition')
  const common = useContent('common')
  return (
    <Section aria-labelledby="evidence-title">
      <Reveal>
        <div className="flex flex-col gap-6 rounded-3xl border-2 border-dashed border-navy-200 p-6 md:flex-row md:items-center md:p-10">
          <IconBadge icon={FolderOpen} className="size-14 rounded-2xl" />
          <div className="flex-1">
            <h2 id="evidence-title" className="text-xl font-bold">
              {t('evidence.title')}
            </h2>
            <p className="mt-2 max-w-2xl leading-relaxed text-navy-600">{t('evidence.text')}</p>
            {!SITE.evidenceUrl && <p className="mt-3 text-sm font-semibold text-navy-700">{t('evidence.pending')}</p>}
          </div>
          {SITE.evidenceUrl && (
            <Button href={SITE.evidenceUrl} target="_blank" rel="noopener noreferrer">
              {common.t('actions.openEvidence')}
              <ExternalLink className="size-4" aria-hidden="true" />
            </Button>
          )}
        </div>
      </Reveal>
    </Section>
  )
}

export default function RecognitionPage() {
  const { t } = useContent('recognition')
  useDocumentTitle(t('meta.title'))
  return (
    <>
      <PageHeader eyebrow={t('header.eyebrow')} title={t('header.title')} lead={t('header.lead')} />
      <Awards />
      <Certifications />
      <Evidence />
    </>
  )
}
