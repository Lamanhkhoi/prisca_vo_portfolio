import { useContent, useDocumentTitle } from '@/hooks/useContent'
import { INDUSTRY_ORGS } from '@/config/site'
import { Label, Section, SectionHeading } from '@/components/ui/Primitives'
import PageHeader from '@/components/ui/PageHeader'
import Timeline from '@/components/ui/Timeline'
import Reveal from '@/components/motion/Reveal'
import CountUp from '@/components/motion/CountUp'

export default function IndustryPage() {
  const { t, list } = useContent('industry')
  useDocumentTitle(t('meta.title'))

  const roles = list('industry.items').map((item) => ({
    id: item.period + item.org,
    period: item.period,
    title: item.role,
    subtitle: item.org,
    text: item.text,
  }))

  return (
    <>
      <PageHeader
        eyebrow={t('header.eyebrow')}
        title={t('header.title')}
        lead={t('header.lead')}
        stats={[
          { label: t('industry.badge'), value: '27+' },
          { label: t('industry.orgsTitle'), value: String(INDUSTRY_ORGS.length) },
        ]}
      />
      <Section aria-labelledby="industry-title">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <aside className="lg:col-span-4">
            <Reveal className="space-y-5 lg:sticky lg:top-24">
              <div className="rounded-xl border border-white/10 bg-navy p-6 text-white">
                <p className="font-mono text-5xl font-bold tabular-nums tracking-[-0.03em]">
                  <CountUp value={27} suffix="+" />
                </p>
                <p className="mt-1.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent-light">
                  {t('industry.badge')}
                </p>
                <p className="mt-4 text-sm leading-[1.68] text-navy-200">{t('industry.summary')}</p>
              </div>
              <div className="rounded-xl border border-navy/10 bg-surface p-5">
                <Label as="h3">{t('industry.orgsTitle')}</Label>
                <ul className="mt-3.5 divide-y divide-navy/8">
                  {INDUSTRY_ORGS.map((org, idx) => (
                    <li key={org} className="flex items-baseline justify-between py-2 text-sm font-semibold text-navy first:pt-0 last:pb-0">
                      <span>{org}</span>
                      <span className="font-mono text-[11px] tabular-nums text-navy-400">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </aside>
          <div className="lg:col-span-8">
            <SectionHeading id="industry-title" title={t('industry.title')} />
            <Timeline items={roles} />
          </div>
        </div>
      </Section>
    </>
  )
}
