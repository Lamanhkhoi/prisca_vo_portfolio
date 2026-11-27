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
      <PageHeader eyebrow={t('header.eyebrow')} title={t('header.title')} lead={t('header.lead')} />
      <Section aria-labelledby="industry-title">
        <div className="grid gap-10 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <Reveal className="space-y-5 lg:sticky lg:top-24">
              <div className="rounded-xl bg-navy p-6 text-white">
                <p className="text-5xl font-extrabold tracking-tight">
                  <CountUp value={27} suffix="+" />
                </p>
                <p className="mt-1 text-sm font-semibold text-gold-light">{t('industry.badge')}</p>
                <p className="mt-4 text-sm leading-relaxed text-navy-200">{t('industry.summary')}</p>
              </div>
              <div className="rounded-xl border border-navy-100 p-5">
                <Label as="h3">{t('industry.orgsTitle')}</Label>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {INDUSTRY_ORGS.map((org) => (
                    <li key={org} className="rounded-md bg-navy-50 px-2.5 py-1 text-xs font-bold text-navy-700">
                      {org}
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
