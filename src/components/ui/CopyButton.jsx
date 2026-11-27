import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Check, Copy } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function CopyButton({ text, className }) {
  const { t } = useTranslation()
  const [copied, setCopied] = useState(false)
  const timer = useRef(null)

  useEffect(() => () => clearTimeout(timer.current), [])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      const area = document.createElement('textarea')
      area.value = text
      document.body.appendChild(area)
      area.select()
      document.execCommand('copy')
      area.remove()
    }
    setCopied(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      type="button"
      onClick={copy}
      className={cn(
        'inline-flex items-center gap-2 rounded-lg border px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 active:scale-[0.98]',
        copied
          ? 'border-accent/40 bg-accent-soft text-accent-dark'
          : 'border-navy/15 bg-surface text-navy hover:border-navy/40',
        className,
      )}
    >
      {copied ? (
        <Check className="size-3.5" strokeWidth={1.75} aria-hidden="true" />
      ) : (
        <Copy className="size-3.5" strokeWidth={1.75} aria-hidden="true" />
      )}
      <span aria-live="polite">{copied ? t('actions.copied') : t('actions.copyCitation')}</span>
    </button>
  )
}
