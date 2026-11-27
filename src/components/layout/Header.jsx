import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { Menu, X } from 'lucide-react'
import { NAV } from '@/config/site'
import { EASE, cn } from '@/lib/utils'
import logoMark from '@/assets/logo-mark.png'
import LanguageSwitcher from './LanguageSwitcher'

function Brand() {
  const { t } = useTranslation()
  return (
    <Link to="/" aria-label={t('brand.home')} className="flex shrink-0 items-center gap-2.5 whitespace-nowrap">
      <img
        src={logoMark}
        alt=""
        aria-hidden="true"
        width="34"
        height="34"
        className="size-8 shrink-0 object-contain md:size-[34px]"
      />
      <span className="text-[17px] font-extrabold tracking-[-0.02em] text-navy">{t('brand.name')}</span>
      <span aria-hidden="true" className="hidden h-4 w-px bg-navy/15 sm:block xl:hidden" />
      <span className="hidden text-xs font-medium text-navy-600 sm:block xl:hidden">{t('brand.suffix')}</span>
    </Link>
  )
}

export default function Header() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 8))

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-40 border-b border-navy/8 bg-canvas/90 backdrop-blur-md transition-shadow duration-300',
          scrolled && 'shadow-[0_10px_28px_-22px_rgba(10,35,56,0.4)]',
        )}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6 md:px-10">
          <Brand />

          <nav aria-label={t('nav.primary')} className="hidden xl:block">
            <ul className="flex items-center">
              {NAV.map((item) => (
                <li key={item.key}>
                  <NavLink
                    to={item.path}
                    end={item.path === '/'}
                    className={({ isActive }) =>
                      cn(
                        'relative block whitespace-nowrap px-3.5 py-5 text-[13px] font-semibold transition-colors duration-200',
                        isActive ? 'text-navy' : 'text-navy-600 hover:text-navy',
                      )
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {t(`nav.${item.key}`)}
                        {isActive && (
                          <motion.span
                            layoutId="nav-underline"
                            aria-hidden="true"
                            className="absolute inset-x-3.5 bottom-0 h-[2px] bg-accent"
                            transition={{ type: 'spring', stiffness: 420, damping: 36 }}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher id="header-lang" />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? t('nav.closeMenu') : t('nav.openMenu')}
              className="grid size-10 place-items-center rounded-lg border border-navy/15 bg-surface text-navy transition-colors duration-200 hover:border-navy/35 active:scale-[0.98] xl:hidden"
            >
              {open ? (
                <X className="size-5" strokeWidth={1.75} aria-hidden="true" />
              ) : (
                <Menu className="size-5" strokeWidth={1.75} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* 60fps Mobile drawer animating strictly opacity & transform */}
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label={t('nav.primary')}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="fixed inset-x-0 top-16 bottom-0 z-30 overflow-y-auto border-t border-navy/10 bg-canvas xl:hidden"
          >
            <ul className="mx-auto max-w-6xl divide-y divide-navy/10 px-6 py-4 md:px-10">
              {NAV.map((item, i) => (
                <motion.li
                  key={item.key}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.28, delay: 0.03 + i * 0.03, ease: EASE }}
                >
                  <NavLink
                    to={item.path}
                    end={item.path === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        'flex items-center justify-between py-4 text-lg font-bold transition-colors',
                        isActive ? 'text-navy' : 'text-navy-600',
                      )
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span className="flex items-center gap-3">
                          <span className="font-mono text-xs tabular-nums text-navy-400">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          {t(`nav.${item.key}`)}
                        </span>
                        {isActive && <span aria-hidden="true" className="h-0.5 w-6 bg-accent" />}
                      </>
                    )}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
