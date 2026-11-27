import { useState } from 'react'
import { BookMarked, ExternalLink, FlaskConical } from 'lucide-react'
import { useContent, useDocumentTitle } from '@/hooks/useContent'
import { SITE } from '@/config/site'
import { cn } from '@/lib/utils'
import { Card, Chip, Label, Section, SectionHeading } from '@/components/ui/Primitives'
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
            <Chip tone="outline" className="tabular-nums">
              {t('publication.year')}
            </Chip>
            <Chip tone="accent">{t('publication.role')}</Chip>
          </div>

          <h3 className="mt-5 max-w-3xl text-2xl font-extrabold leading-[1.15] tracking-[-0.025em] text-navy md:text-3xl">
            {t('publication.paperTitle')}
          </h3>
          <p className="mt-3 text-[15px] font-semibold text-navy-700">{t('publication.authors')}</p>
          <p className="mt-1 text-sm text-navy-600">{t('publication.affiliations')}</p>

          <blockquote className="mt-8 border-l-2 border-accent pl-5 text-lg font-semibold leading-[1.55] text-navy md:text-xl">
            <span className="mb-1.5 block font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
              {t('publication.findingLabel')}
            </span>
            {t('publication.finding')}
          </blockquote>

          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Label as="h4">{t('publication.abstractLabel')}</Label>
              <p
                className={cn(
                  'mt-3 max-w-[64ch] text-[15px] leading-[1.7] text-navy-700 md:text-[16px]',
                  !abstractOpen && 'line-clamp-6 md:line-clamp-none',
                )}
              >
                {t('publication.abstract')}
              </p>
              <button
                type="button"
                aria-expanded={abstractOpen}
                onClick={() => setAbstractOpen((v) => !v)}
                className="mt-2.5 text-sm font-bold text-navy underline decoration-accent decoration-2 underline-offset-4 md:hidden"
              >
                {abstractOpen ? common.t('actions.showLess') : common.t('actions.showMore')}
              </button>
            </div>

            <div className="space-y-8 lg:col-span-5">
              <div>
                <Label as="h4">{t('publication.methodLabel')}</Label>
                <dl className="mt-3 grid grid-cols-3 gap-3">
                  {list('publication.methodStats').map((s) => (
                    <div key={s.label} className="flex flex-col rounded-xl bg-navy p-4 text-white">
                      <dt className="order-2 mt-1.5 text-[11px] leading-snug text-navy-300">{s.label}</dt>
                      <dd className="order-1 font-mono text-2xl font-bold tabular-nums text-accent-light">{s.value}</dd>
                    </div>
                  ))}
                </dl>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {list('publication.methods').map((m) => (
                    <li key={m}>
                      <Chip tone="soft">{m}</Chip>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Label as="h4">{t('publication.keywordsLabel')}</Label>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {list('publication.keywords').map((k) => (
                    <li key={k}>
                      <Chip tone="accent">{k}</Chip>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <dl className="mt-10 grid gap-x-8 gap-y-5 border-t border-navy/10 pt-6 sm:grid-cols-2 lg:grid-cols-4">
            {list('publication.meta').map((row) => (
              <div key={row.label}>
                <dt className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-navy-600">
                  {row.label}
                </dt>
                <dd className="mt-1 text-sm font-semibold tabular-nums leading-snug text-navy">{row.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 rounded-xl border border-navy/8 bg-canvas p-5 md:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Label>{t('publication.citationLabel')}</Label>
              <CopyButton text={t('publication.citation')} />
            </div>
            <p className="mt-3.5 max-w-[72ch] text-sm leading-[1.68] text-navy-700">{t('publication.citation')}</p>
          </div>

          {SITE.publicationUrl && (
            <Button
              href={SITE.publicationUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="accent"
              className="mt-6"
            >
              {t('publication.publisherLink')}
              <ExternalLink className="size-4" strokeWidth={1.75} aria-hidden="true" />
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
      <div className="grid gap-6 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <Card interactive className="flex h-full flex-col">
            <p className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              <BookMarked className="size-4 shrink-0" strokeWidth={1.5} aria-hidden="true" />
              {t('thesis.title')}
            </p>
            <h2 className="mt-4 text-xl font-extrabold leading-snug tracking-[-0.02em] text-navy">
              {t('thesis.name')}
            </h2>
            <p className="mt-auto pt-6 font-mono text-xs font-medium text-navy-600">{t('thesis.school')}</p>
          </Card>
        </Reveal>

        <Reveal delay={0.06} className="lg:col-span-7">
          <Card className="h-full border-white/10 bg-navy text-white">
            <p className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent-light">
              <FlaskConical className="size-4 shrink-0" strokeWidth={1.5} aria-hidden="true" />
              {t('phd.title')}
            </p>
            <h2 className="mt-4 text-xl font-extrabold leading-snug tracking-[-0.02em] text-white">
              {t('phd.name')}
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {list('phd.methods').map((m) => (
                <li
                  key={m}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-[11px] font-medium text-navy-200"
                >
                  {m}
                </li>
              ))}
            </ul>
            <Accordion
              className="mt-6 [&_button]:text-white [&_button]:decoration-accent-light"
              openLabel={common.t('actions.readMore')}
              closeLabel={common.t('actions.readLess')}
            >
              <p className="max-w-[60ch] text-[15px] leading-[1.68] text-navy-200">{t('phd.summary')}</p>
            </Accordion>
          </Card>
        </Reveal>
      </div>
    </Section>
  )
}

/** Sticky Split + Numbered Editorial List replacing 6 empty boxed cards. */
function Interests() {
  const { t, list } = useContent('research')
  const items = list('interests.items')

  return (
    <Section tone="stone" aria-labelledby="interests-title">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
          <SectionHeading id="interests-title" title={t('interests.title')} className="mb-0" />
        </div>

        <div className="lg:col-span-8">
          <div className="overflow-hidden rounded-xl border border-navy/10 bg-surface">
            <ol className="divide-y divide-navy/8">
              {items.map((item, i) => (
                <Reveal as="li" key={item} delay={i * 0.03}>
                  <div className="flex items-baseline gap-5 px-5 py-4 md:px-6">
                    <span className="font-mono text-xs font-semibold tabular-nums text-accent">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[15px] font-bold leading-snug text-navy">{item}</span>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default function ResearchPage() {
  const { t, list } = useContent('research')
  useDocumentTitle(t('meta.title'))
  const methodStats = list('publication.methodStats')

  return (
    <>
      <PageHeader
        eyebrow={t('header.eyebrow')}
        title={t('header.title')}
        lead={t('header.lead')}
        stats={[
          { label: t('publication.type'), value: t('publication.year') },
          { label: methodStats[0]?.label ?? 'n', value: methodStats[0]?.value ?? '189' },
        ]}
      />
      <Publication />
      <Projects />
      <Interests />
    </>
  )
}
