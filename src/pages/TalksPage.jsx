import { useState } from 'react'
import { AnimatePresence, LayoutGroup, motion } from 'motion/react'
import { HeartHandshake } from 'lucide-react'
import { useContent, useDocumentTitle } from '@/hooks/useContent'
import { EASE } from '@/lib/utils'
import { Card, Chip, IconBadge, Section, SectionHeading } from '@/components/ui/Primitives'
import FilterChips from '@/components/ui/FilterChips'
import PageHeader from '@/components/ui/PageHeader'
import Reveal from '@/components/motion/Reveal'

const FILTERS = ['all', 'talk', 'workshop', 'forum', 'mentoring']

function Events() {
  const { t, list } = useContent('talks')
  const [filter, setFilter] = useState('all')
  const items = list('events.items')
  const visible = filter === 'all' ? items : items.filter((item) => item.type === filter)

  return (
    <Section aria-labelledby="events-title">
      <SectionHeading id="events-title" title={t('events.title')} />
      <LayoutGroup>
        <FilterChips
          label={t('events.filterLabel')}
          options={FILTERS}
          value={filter}
          onChange={setFilter}
          getLabel={(f) => t(`events.filters.${f}`)}
          getCount={(f) => (f === 'all' ? items.length : items.filter((i) => i.type === f).length)}
          layoutId="event-filter"
        />
        <motion.ul layout className="grid gap-4 md:grid-cols-2" aria-live="polite">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((item) => (
              <motion.li
                layout
                key={`${item.date}-${item.role}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3, ease: EASE }}
              >
                <Card interactive className="h-full">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-gold-dark">{item.date}</span>
                    <Chip tone="soft">{t(`events.filters.${item.type}`)}</Chip>
                  </div>
                  <h3 className="mt-3 font-bold leading-snug md:text-lg">{item.role}</h3>
                  <p className="mt-1 text-sm font-semibold text-navy-700">{item.org}</p>
                  <p className="mt-2 text-[15px] leading-relaxed text-navy-600">{item.text}</p>
                </Card>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </LayoutGroup>
    </Section>
  )
}

function Community() {
  const { t, list } = useContent('talks')
  return (
    <Section tone="muted" aria-labelledby="community-title">
      <SectionHeading id="community-title" title={t('community.title')} aside={<Chip>{t('community.period')}</Chip>} />
      <ul className="grid gap-4 md:grid-cols-2">
        {list('community.items').map((item, i) => (
          <Reveal as="li" key={item.title} delay={i * 0.06}>
            <Card className="flex h-full gap-4">
              <IconBadge icon={HeartHandshake} />
              <div>
                <h3 className="font-bold leading-snug">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-navy-600">{item.org}</p>
              </div>
            </Card>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}

export default function TalksPage() {
  const { t } = useContent('talks')
  useDocumentTitle(t('meta.title'))
  return (
    <>
      <PageHeader eyebrow={t('header.eyebrow')} title={t('header.title')} lead={t('header.lead')} />
      <Events />
      <Community />
    </>
  )
}
