import { useState } from 'react'
import { AnimatePresence, LayoutGroup, motion } from 'motion/react'
import { ExternalLink } from 'lucide-react'
import { useContent, useDocumentTitle } from '@/hooks/useContent'
import { EVIDENCE_FILES } from '@/config/site'
import { EASE, cn } from '@/lib/utils'
import { Chip, Section } from '@/components/ui/Primitives'
import FilterChips from '@/components/ui/FilterChips'
import PageHeader from '@/components/ui/PageHeader'

const FILTERS = ['all', 'degree', 'publication', 'award', 'certificate', 'event']

/**
 * Structured Editorial Evidence Ledger.
 * Eliminates 13 empty placeholder boxes by rendering a high-density, scannable academic index,
 * automatically showing a crisp thumbnail preview once EVIDENCE_FILES[code].thumb is provided.
 */
function EvidenceRow({ item, t }) {
  const file = EVIDENCE_FILES[item.code] ?? {}
  const content = (
    <div className="grid items-start gap-3 px-5 py-4 sm:grid-cols-[4.5rem_1fr_auto] sm:items-center sm:gap-6 md:px-6 md:py-5">
      <div className="flex items-center gap-3">
        <span
          className="inline-flex rounded-md bg-navy px-2.5 py-1 font-mono text-xs font-bold tabular-nums tracking-wider text-accent-light"
          title={t('codeLabel')}
        >
          {item.code}
        </span>
        {file.thumb && (
          <img
            src={file.thumb}
            alt={item.title}
            loading="lazy"
            className="size-10 rounded-md object-cover ring-1 ring-navy/10"
          />
        )}
      </div>

      <div className="min-w-0">
        <h3 className="text-[15px] font-bold leading-snug text-navy group-hover:text-accent-dark">{item.title}</h3>
        <p className="mt-1 text-sm text-navy-600">
          {[item.issuer, item.date].filter(Boolean).join(' · ')}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3 sm:justify-end">
        <Chip tone="soft">{t(`filters.${item.type}`)}</Chip>
        {file.file ? (
          <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-accent">
            {t('open')}
            <ExternalLink
              className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={1.75}
              aria-hidden="true"
            />
          </span>
        ) : (
          <span className="font-mono text-[11px] text-navy-400">{t('pending')}</span>
        )}
      </div>
    </div>
  )

  const cls = cn(
    'group block transition-colors duration-200',
    file.file ? 'hover:bg-canvas/80' : 'hover:bg-canvas/40',
  )

  return file.file ? (
    <a href={file.file} target="_blank" rel="noopener noreferrer" className={cls}>
      {content}
    </a>
  ) : (
    <div className={cls}>{content}</div>
  )
}

export default function EvidencePage() {
  const { t, list } = useContent('evidence')
  useDocumentTitle(t('meta.title'))
  const [filter, setFilter] = useState('all')
  const items = list('items')
  const visible = filter === 'all' ? items : items.filter((i) => i.type === filter)

  return (
    <>
      <PageHeader
        eyebrow={t('header.eyebrow')}
        title={t('header.title')}
        lead={t('header.lead')}
        stats={[
          { label: t('filters.all'), value: String(items.length).padStart(2, '0') },
          { label: t('codeLabel'), value: 'E-01–E-13' },
        ]}
      />
      <Section>
        <LayoutGroup>
          <div className="flex flex-wrap items-baseline justify-between gap-x-6">
            <FilterChips
              label={t('filterLabel')}
              options={FILTERS}
              value={filter}
              onChange={setFilter}
              getLabel={(f) => t(`filters.${f}`)}
              getCount={(f) => (f === 'all' ? items.length : items.filter((i) => i.type === f).length)}
              layoutId="evidence-filter"
            />
            <p className="mb-8 font-mono text-xs text-navy-600">{t('note')}</p>
          </div>

          <div className="overflow-hidden rounded-xl border border-navy/10 bg-surface">
            <motion.ul layout className="divide-y divide-navy/8" aria-live="polite">
              <AnimatePresence mode="popLayout" initial={false}>
                {visible.map((item) => (
                  <motion.li
                    layout
                    key={item.code}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.22, ease: EASE }}
                  >
                    <EvidenceRow item={item} t={t} />
                  </motion.li>
                ))}
              </AnimatePresence>
            </motion.ul>
          </div>
        </LayoutGroup>
      </Section>
    </>
  )
}
