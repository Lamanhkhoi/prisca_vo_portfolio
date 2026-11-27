import { Award, Star } from 'lucide-react'
import { useContent, useDocumentTitle } from '@/hooks/useContent'
import { Card, Chip, Label, Section, SectionHeading } from '@/components/ui/Primitives'
import PageHeader from '@/components/ui/PageHeader'
import Timeline from '@/components/ui/Timeline'
import Reveal from '@/components/motion/Reveal'

function Awards() {
  const { t, list } = useContent('teaching')
  const items = list('awards.items')
  const ordered = [...items.filter((a) => a.featured), ...items.filter((a) => !a.featured)]

  return (
    <div className="rounded-xl border border-white/10 bg-navy p-6 text-white md:p-7 lg:sticky lg:top-24">
      <span aria-hidden="true" className="mb-3 block h-0.5 w-8 bg-accent-light" />
      <h2 className="text-xl font-extrabold tracking-[-0.02em]">{t('awards.title')}</h2>
      <ul className="mt-6 divide-y divide-white/10">
        {ordered.map((a) => (
          <li key={`${a.date}-${a.title}`} className="flex gap-3 py-4 first:pt-0 last:pb-0">
            {a.featured ? (
              <Star
                className="mt-0.5 size-4 shrink-0 fill-brass-light text-brass-light"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            ) : (
              <Award className="mt-0.5 size-4 shrink-0 text-accent-light" strokeWidth={1.5} aria-hidden="true" />
            )}
            <div>
              <p className="text-[15px] font-bold leading-snug">{a.title}</p>
              <p className="mt-0.5 text-sm leading-snug text-navy-300">{a.org}</p>
              <p className="mt-1.5 font-mono text-[11px] font-semibold tabular-nums uppercase tracking-[0.12em] text-accent-light">
                {a.date}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Courses() {
  const { t, list } = useContent('teaching')
  const groups = list('courses.groups')
  const total = groups.reduce((sum, g) => sum + (g.items?.length ?? 0), 0)

  return (
    <Section tone="stone" aria-labelledby="courses-title">
      <SectionHeading
        id="courses-title"
        title={t('courses.title')}
        aside={<Chip tone="navy">{t('courses.total', { count: total })}</Chip>}
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {groups.map((group, gi) => (
          <Reveal key={group.tier} delay={gi * 0.06}>
            <Card className="h-full">
              <div className="flex items-baseline justify-between gap-4 border-b border-navy/10 pb-4">
                <div>
                  <p className="font-mono text-xs font-semibold tabular-nums uppercase tracking-[0.14em] text-accent">
                    {group.tier} · {String(group.items.length).padStart(2, '0')}
                  </p>
                  <h3 className="mt-1.5 text-base font-bold leading-snug text-navy">{group.name}</h3>
                </div>
              </div>
              <ol className="mt-2 divide-y divide-navy/8">
                {group.items.map((course, ci) => (
                  <li key={course} className="flex items-baseline gap-3.5 py-2.5 text-sm font-medium text-navy-700">
                    <span className="font-mono text-[11px] tabular-nums text-navy-400">
                      {String(ci + 1).padStart(2, '0')}
                    </span>
                    <span className="leading-snug text-navy">{course}</span>
                  </li>
                ))}
              </ol>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

/** Sticky Split + Structured Editorial List replacing 4 sparse cert cards. */
function Certifications() {
  const { t, list } = useContent('teaching')
  return (
    <Section aria-labelledby="certs-title">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
          <SectionHeading id="certs-title" title={t('certs.title')} className="mb-0" />
          <div className="rounded-xl border border-navy/10 bg-surface p-5">
            <Label as="h3">{t('certs.additionalTitle')}</Label>
            <ul className="mt-3.5 divide-y divide-navy/8 text-sm leading-snug text-navy-700">
              {list('certs.additional').map((item) => (
                <li key={item} className="py-2.5 first:pt-0 last:pb-0">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="overflow-hidden rounded-xl border border-navy/10 bg-surface">
            <ul className="divide-y divide-navy/8">
              {list('certs.items').map((c, i) => (
                <Reveal as="li" key={c.title} delay={i * 0.04}>
                  <div className="grid gap-1.5 px-5 py-4 sm:grid-cols-[5.5rem_1fr_auto] sm:items-baseline sm:gap-5 md:px-6 md:py-5">
                    <span className="font-mono text-xs font-semibold tabular-nums text-accent">{c.date}</span>
                    <span className="text-[15px] font-bold leading-snug text-navy">{c.title}</span>
                    {c.org && (
                      <span className="text-xs font-medium text-navy-600 sm:text-right">{c.org}</span>
                    )}
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default function TeachingPage() {
  const { t, list } = useContent('teaching')
  useDocumentTitle(t('meta.title'))

  const appointments = list('appointments.items').map((item) => ({
    id: item.period + item.org,
    period: item.period,
    title: item.role,
    subtitle: item.org,
    text: item.text,
  }))
  const totalCourses = list('courses.groups').reduce((sum, g) => sum + (g.items?.length ?? 0), 0)
  const totalAwards = list('awards.items').length

  return (
    <>
      <PageHeader
        eyebrow={t('header.eyebrow')}
        title={t('header.title')}
        lead={t('header.lead')}
        stats={[
          { label: t('courses.title'), value: String(totalCourses) },
          { label: t('awards.title'), value: String(totalAwards) },
        ]}
      />
      <Section aria-labelledby="appointments-title">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <SectionHeading id="appointments-title" title={t('appointments.title')} />
            <Timeline items={appointments} />
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <Awards />
            </Reveal>
          </div>
        </div>
      </Section>
      <Courses />
      <Certifications />
    </>
  )
}
