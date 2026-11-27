import { Component } from 'react'
import { useTranslation } from 'react-i18next'
import { AlertTriangle } from 'lucide-react'

function Fallback() {
  const { t } = useTranslation()
  return (
    <div role="alert" className="mx-auto max-w-xl px-5 py-24 text-center">
      <AlertTriangle className="mx-auto size-10 text-navy-600" aria-hidden="true" />
      <h1 className="mt-4 text-2xl font-bold">{t('error.title')}</h1>
      <p className="mt-2 text-navy-600">{t('error.text')}</p>
      <button
        type="button"
        onClick={() => window.location.reload()}
        className="mt-6 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white"
      >
        {t('error.reload')}
      </button>
    </div>
  )
}

/** Catches a crash in one page so the header and footer stay usable. The console shows which component failed. */
export default class ErrorBoundary extends Component {
  state = { error: null }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, info) {
    console.error('[ErrorBoundary]', error, info.componentStack)
  }

  render() {
    return this.state.error ? <Fallback /> : this.props.children
  }
}
