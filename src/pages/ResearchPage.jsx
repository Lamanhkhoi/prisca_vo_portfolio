import { BookMarked, CheckCircle2, FlaskConical } from 'lucide-react'
import { useContent, useDocumentTitle } from '@/hooks/useContent'
import { Card, Chip, IconBadge, Section, SectionHeading } from '@/components/ui/Primitives'
import PageHeader from '@/components/ui/PageHeader'
import CopyButton from '@/components/ui/CopyButton'
import Accordion from '@/components/ui/Accordion'
import Reveal from '@/components/motion/Reveal'

function Publication() {
  const { t, list } = useContent('research')
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

          <dl className="mt-8 grid gap-x-8 gap-y-5 border-t border-navy-100 pt-6 sm:grid-cols-2 lg:grid-cols-4">
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

