import { HeartHandshake } from 'lucide-react'
import { useContent, useDocumentTitle } from '@/hooks/useContent'
import { Card, Chip, IconBadge, Section, SectionHeading } from '@/components/ui/Primitives'
import PageHeader from '@/components/ui/PageHeader'
import Timeline from '@/components/ui/Timeline'
import Reveal from '@/components/motion/Reveal'

export default function OtherPage() {
  const { t, list } = useContent('other')
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
        <SectionHeading
          id="industry-title"
          title={t('industry.title')}
          aside={<Chip tone="navy" className="text-sm">{t('industry.badge')}</Chip>}
        />
        <Reveal>
          <p className="mb-12 max-w-3xl text-lg leading-relaxed text-navy-700">{t('industry.summary')}</p>
        </Reveal>
        <Timeline items={roles} />
      </Section>

      <Section aria-labelledby="community-title" className="bg-navy-50">
        <SectionHeading
          id="community-title"
          title={t('community.title')}
          aside={<Chip tone="outline" className="text-sm">{t('community.period')}</Chip>}
        />
        <ul className="grid gap-5 md:grid-cols-2">
          {list('community.items').map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 0.08}>
              <Card interactive className="h-full">
                <IconBadge icon={HeartHandshake} />
                <h3 className="mt-5 text-lg font-bold leading-snug">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{item.org}</p>
              </Card>
            </Reveal>
          ))}
        </ul>
      </Section>
    </>
  )
}
