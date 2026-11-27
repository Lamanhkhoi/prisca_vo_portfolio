import { Building2, Languages, Target } from 'lucide-react'
import { useContent, useDocumentTitle } from '@/hooks/useContent'
import { Card, Chip, IconBadge, Section, SectionHeading } from '@/components/ui/Primitives'
import PageHeader from '@/components/ui/PageHeader'
import Timeline from '@/components/ui/Timeline'
import ContactList from '@/components/ui/ContactList'
import Reveal from '@/components/motion/Reveal'

export default function AboutPage() {
  const { t, list } = useContent('about')
  const common = useContent('common')
  useDocumentTitle(t('meta.title'))

  const education = list('education.items').map((item) => ({
    id: item.year,
    period: item.year,
    title: item.degree,
    subtitle: item.school,
    text: item.note,
  }))

  return (
    <>
      <PageHeader eyebrow={t('header.eyebrow')} title={t('header.title')} lead={t('header.lead')} />

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="space-y-10 lg:col-span-7">
            <Reveal>
              <SectionHeading title={t('profile.title')} className="mb-6 md:mb-6" />
              <p className="text-lg leading-relaxed text-navy-700">{t('profile.text')}</p>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="rounded-2xl border-l-4 border-lime bg-navy-50 p-6 md:p-8">
                <div className="flex items-center gap-3">
                  <IconBadge icon={Target} className="bg-white" />
                  <h2 className="text-xl font-bold leading-snug">{t('objective.title')}</h2>
                </div>
                <p className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-navy-700">
                  <Building2 className="size-4 text-lime-700" aria-hidden="true" />
                  {t('objective.org')}
                </p>
                <p className="mt-3 leading-relaxed text-navy-700">{t('objective.text')}</p>
              </div>
            </Reveal>
          </div>

          <aside className="space-y-6 lg:col-span-5">
            <Reveal delay={0.08}>
              <Card>
                <h2 className="text-lg font-bold">{t('expertise.title')}</h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {list('expertise.items').map((item) => (
                    <li key={item}>
                      <Chip tone="soft" className="text-sm">
                        {item}
                      </Chip>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>

            <Reveal delay={0.12}>
              <Card>
                <div className="flex items-center gap-3">
                  <IconBadge icon={Languages} />
                  <h2 className="text-lg font-bold">{t('languages.title')}</h2>
                </div>
                <dl className="mt-5 space-y-4">
                  {list('languages.items').map((lang) => (
                    <div key={lang.name}>
                      <dt className="font-bold">{lang.name}</dt>
                      <dd className="mt-1 text-sm leading-relaxed text-navy-600">{lang.level}</dd>
                    </div>
                  ))}
                </dl>
              </Card>
            </Reveal>

            <Reveal delay={0.16}>
              <Card>
                <h2 className="text-lg font-bold">{common.t('contact.title')}</h2>
                <ContactList className="mt-5" />
              </Card>
            </Reveal>
          </aside>
        </div>
      </Section>

      <Section className="border-t border-navy-100">
        <SectionHeading title={t('education.title')} />
        <Timeline items={education} />
      </Section>
    </>
  )
}
