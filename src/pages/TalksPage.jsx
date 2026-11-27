import { useState } from 'react'
import { AnimatePresence, LayoutGroup, motion } from 'motion/react'
import { useContent, useDocumentTitle } from '@/hooks/useContent'
import { EASE } from '@/lib/utils'
import { Card, Chip, Section, SectionHeading } from '@/components/ui/Primitives'
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
        <motion.ul layout className="grid gap-5 md:grid-cols-2" aria-live="polite">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((item) => (
              <motion.li
                layout
                key={`${item.date}-${item.role}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25, ease: EASE }}
              >
                <Card interactive className="flex h-full flex-col">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-xs font-semibold tabular-nums uppercase tracking-[0.12em] text-accent">
                      {item.date}
                    </span>
                    <Chip tone="soft">{t(`events.filters.${item.type}`)}</Chip>
                  </div>
                  <h3 className="mt-3.5 text-base font-bold leading-snug tracking-[-0.01em] text-navy md:text-lg">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-navy-700">{item.org}</p>
                  <p className="mt-2.5 max-w-[54ch] text-[15px] leading-[1.65] text-navy-600">{item.text}</p>
                </Card>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </LayoutGroup>
    </Section>
  )
}

/** Sticky Split + Structured Editorial List replacing 2 sparse icon cards. */
function Community() {
  const { t, list } = useContent('talks')
  const items = list('community.items')

  return (
    <Section tone="stone" aria-labelledby="community-title">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
          <SectionHeading id="community-title" title={t('community.title')} className="mb-4" />
          <Chip tone="outline" className="tabular-nums">
            {t('community.period')}
          </Chip>
        </div>

        <div className="lg:col-span-8">
          <div className="overflow-hidden rounded-xl border border-navy/10 bg-surface">
            <ul className="divide-y divide-navy/8">
              {items.map((item, i) => (
                <Reveal as="li" key={item.title} delay={i * 0.05}>
                  <div className="grid gap-2 px-5 py-5 sm:grid-cols-[2.5rem_1fr] sm:items-baseline sm:gap-4 md:px-6">
                    <span className="font-mono text-xs font-semibold tabular-nums text-accent">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="text-[15px] font-bold leading-snug text-navy md:text-base">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-navy-600">{item.org}</p>
                    </div>
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

export default function TalksPage() {
  const { t, list } = useContent('talks')
  useDocumentTitle(t('meta.title'))
  const totalEvents = list('events.items').length
  const totalCommunity = list('community.items').length

  return (
    <>
      <PageHeader
        eyebrow={t('header.eyebrow')}
        title={t('header.title')}
        lead={t('header.lead')}
        stats={[
          { label: t('events.filters.all'), value: String(totalEvents) },
          { label: t('community.period'), value: String(totalCommunity) },
        ]}
      />
      <Events />
      <Community />
    </>
  )
}
