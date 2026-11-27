import { useState } from 'react'
import { AnimatePresence, LayoutGroup, motion } from 'motion/react'
import { ExternalLink, FileText } from 'lucide-react'
import { useContent, useDocumentTitle } from '@/hooks/useContent'
import { EVIDENCE_FILES } from '@/config/site'
import { EASE } from '@/lib/utils'
import { Section } from '@/components/ui/Primitives'
import FilterChips from '@/components/ui/FilterChips'
import PageHeader from '@/components/ui/PageHeader'

const FILTERS = ['all', 'degree', 'publication', 'award', 'certificate', 'event']

function Thumb({ code, title, pending }) {
  const file = EVIDENCE_FILES[code] ?? {}
  if (file.thumb) {
    return <img src={file.thumb} alt={title} loading="lazy" className="aspect-[4/3] w-full object-cover" />
  }
  return (
    <div className="relative grid aspect-[4/3] w-full place-items-center bg-navy-50">
      <div aria-hidden="true" className="absolute inset-4 rounded-md border border-dashed border-navy-200" />
      <div className="relative flex flex-col items-center gap-2 text-center">
        <FileText className="size-7 text-navy-300" aria-hidden="true" />
        <span className="text-lg font-extrabold tracking-wider text-navy-300">{code}</span>
        <span className="text-[11px] font-semibold text-navy-400">{pending}</span>
      </div>
    </div>
  )
}

function EvidenceCard({ item, t }) {
  const file = EVIDENCE_FILES[item.code] ?? {}
  const body = (
    <>
      <Thumb code={item.code} title={item.title} pending={t('pending')} />
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center justify-between gap-2">
          <span className="rounded bg-navy px-2 py-0.5 text-[11px] font-bold tracking-wider text-gold-light" title={t('codeLabel')}>
            {item.code}
          </span>
          <span className="text-[11px] font-bold uppercase tracking-wider text-navy-600">{t(`filters.${item.type}`)}</span>
        </div>
        <h3 className="mt-3 text-[15px] font-bold leading-snug">{item.title}</h3>
        <p className="mt-1 text-sm text-navy-600">{[item.issuer, item.date].filter(Boolean).join(' · ')}</p>
        {file.file && (
          <span className="mt-auto inline-flex items-center gap-1.5 pt-3 text-sm font-bold text-navy">
            {t('open')}
            <ExternalLink className="size-3.5" aria-hidden="true" />
          </span>
        )}
      </div>
    </>
  )
  const cls =
    'group flex h-full flex-col overflow-hidden rounded-xl border border-navy-100 bg-white transition duration-300 hover:border-navy-300 hover:shadow-[0_18px_40px_-24px_rgba(10,35,56,0.45)]'
  return file.file ? (
    <a href={file.file} target="_blank" rel="noopener noreferrer" className={cls}>
      {body}
    </a>
  ) : (
    <div className={cls}>{body}</div>
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
      <PageHeader eyebrow={t('header.eyebrow')} title={t('header.title')} lead={t('header.lead')} />
      <Section>
        <LayoutGroup>
          <div className="flex flex-wrap items-start justify-between gap-x-6">
            <FilterChips
              label={t('filterLabel')}
              options={FILTERS}
              value={filter}
              onChange={setFilter}
              getLabel={(f) => t(`filters.${f}`)}
              getCount={(f) => (f === 'all' ? items.length : items.filter((i) => i.type === f).length)}
              layoutId="evidence-filter"
            />
            <p className="mb-6 text-sm text-navy-600">{t('note')}</p>
          </div>
          <motion.ul layout className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4" aria-live="polite">
            <AnimatePresence mode="popLayout" initial={false}>
              {visible.map((item) => (
                <motion.li
                  layout
                  key={item.code}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3, ease: EASE }}
                >
                  <EvidenceCard item={item} t={t} />
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        </LayoutGroup>
      </Section>
    </>
  )
}
