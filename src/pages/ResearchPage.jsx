import { useState } from 'react'
import { BookMarked, CheckCircle2, ExternalLink, FlaskConical } from 'lucide-react'
import { useContent, useDocumentTitle } from '@/hooks/useContent'
import { SITE } from '@/config/site'
import { cn } from '@/lib/utils'
import { Card, Chip, IconBadge, Section, SectionHeading } from '@/components/ui/Primitives'
import Button from '@/components/ui/Button'
import PageHeader from '@/components/ui/PageHeader'
import CopyButton from '@/components/ui/CopyButton'
import Accordion from '@/components/ui/Accordion'
import Reveal from '@/components/motion/Reveal'

function Publication() {
  const { t, list } = useContent('research')
  const common = useContent('common')
  const [abstractOpen, setAbstractOpen] = useState(false)
  return (
    <Section aria-labelledby="pub-title">
      <SectionHeading id="pub-title" title={t('publication.title')} />
      <Reveal>
        <Card className="p-6 md:p-10">
          <div className="flex flex-wrap items-center gap-2">
            <Chip tone="navy">{t('publication.type')}</Chip>
            <Chip tone="outline">{t('publication.year')}</Chip>
            <Chip tone="lime">{t('publication.role')}</Chip>
          </div>
          <h3 className="mt-5 max-w-3xl text-2xl font-extrabold leading-tight tracking-tight md:text-3xl">
            {t('publication.paperTitle')}
          </h3>
          <p className="mt-3 font-semibold text-navy-700">{t('publication.authors')}</p>
          <p className="mt-1 text-sm text-navy-600">{t('publication.affiliations')}</p>

          <blockquote className="mt-8 border-l-4 border-lime pl-5 text-lg font-semibold leading-relaxed text-navy md:text-xl">
            <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-lime-700">
              {t('publication.findingLabel')}
            </span>
            {t('publication.finding')}
          </blockquote>

          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h4 className="text-xs font-bold uppercase tracking-wider text-navy-600">{t('publication.abstractLabel')}</h4>
              <p className={cn('mt-3 leading-relaxed text-navy-700', !abstractOpen && 'line-clamp-6 md:line-clamp-none')}>
                {t('publication.abstract')}
              </p>
              <button
                type="button"
                aria-expanded={abstractOpen}
                onClick={() => setAbstractOpen((v) => !v)}
                className="mt-2 text-sm font-bold text-navy underline decoration-lime decoration-2 underline-offset-4 md:hidden"
              >
                {abstractOpen ? common.t('actions.showLess') : common.t('actions.showMore')}
              </button>
            </div>

            <div className="space-y-8 lg:col-span-5">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-navy-600">{t('publication.methodLabel')}</h4>
                <dl className="mt-3 grid grid-cols-3 gap-3">
                  {list('publication.methodStats').map((s) => (
                    <div key={s.label} className="flex flex-col rounded-xl bg-navy p-4 text-white">
                      <dt className="order-2 mt-1 text-xs leading-snug text-navy-200">{s.label}</dt>
                      <dd className="order-1 text-2xl font-extrabold">{s.value}</dd>
                    </div>
                  ))}
                </dl>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {list('publication.methods').map((m) => (
                    <li key={m}>
                      <Chip tone="soft">{m}</Chip>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-navy-600">{t('publication.keywordsLabel')}</h4>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {list('publication.keywords').map((k) => (
                    <li key={k}>
                      <Chip tone="lime">{k}</Chip>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <dl className="mt-10 grid gap-x-8 gap-y-5 border-t border-navy-100 pt-6 sm:grid-cols-2 lg:grid-cols-4">
            {list('publication.meta').map((row) => (
              <div key={row.label}>
                <dt className="text-xs font-bold uppercase tracking-wider text-navy-600">{row.label}</dt>
                <dd className="mt-1 font-semibold leading-snug">{row.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 rounded-xl bg-navy-50 p-5 md:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs font-bold uppercase tracking-wider text-navy-600">{t('publication.citationLabel')}</p>
              <CopyButton text={t('publication.citation')} />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-navy-700">{t('publication.citation')}</p>
          </div>

          {SITE.publicationUrl && (
            <Button href={SITE.publicationUrl} target="_blank" rel="noopener noreferrer" variant="outline" className="mt-6">
              {t('publication.publisherLink')}
              <ExternalLink className="size-4" aria-hidden="true" />
            </Button>
          )}
        </Card>
      </Reveal>
    </Section>
  )
}

function Projects() {
  const { t, list } = useContent('research')
  const common = useContent('common')
  return (
    <Section className="pt-0 md:pt-0">
      <div className="grid gap-6 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <Card interactive className="h-full">
            <IconBadge icon={BookMarked} />
            <h2 className="mt-5 text-sm font-bold uppercase tracking-wider text-navy-600">{t('thesis.title')}</h2>
            <p className="mt-3 text-xl font-bold leading-snug">{t('thesis.name')}</p>
            <p className="mt-3 text-sm font-semibold text-navy-600">{t('thesis.school')}</p>
          </Card>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-3">
          <Card className="h-full border-navy bg-navy text-white">
            <span className="grid size-11 place-items-center rounded-xl bg-lime text-navy">
              <FlaskConical className="size-5" aria-hidden="true" />
            </span>
            <h2 className="mt-5 text-sm font-bold uppercase tracking-wider text-navy-200">{t('phd.title')}</h2>
            <p className="mt-3 text-xl font-bold leading-snug">{t('phd.name')}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {list('phd.methods').map((m) => (
                <li key={m} className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold text-navy-100">
                  {m}
                </li>
              ))}
            </ul>
            <Accordion
              className="mt-6 [&_button]:text-white"
              openLabel={common.t('actions.readMore')}
              closeLabel={common.t('actions.readLess')}
            >
              <p className="leading-relaxed text-navy-100">{t('phd.summary')}</p>
            </Accordion>
          </Card>
        </Reveal>
      </div>
    </Section>
  )
}

function Interests() {
  const { t, list } = useContent('research')
  return (
    <Section aria-labelledby="interests-title" className="bg-navy-50">
      <SectionHeading id="interests-title" title={t('interests.title')} />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list('interests.items').map((item, i) => (
          <Reveal as="li" key={item} delay={i * 0.05}>
            <div className="flex h-full items-start gap-3 rounded-2xl border border-navy-100 bg-white p-5">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-lime-700" aria-hidden="true" />
              <span className="font-semibold leading-snug">{item}</span>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}

export default function ResearchPage() {
  const { t } = useContent('research')
  useDocumentTitle(t('meta.title'))
  return (
    <>
      <PageHeader eyebrow={t('header.eyebrow')} title={t('header.title')} lead={t('header.lead')} />
      <Publication />
      <Projects />
      <Interests />
    </>
  )
}

