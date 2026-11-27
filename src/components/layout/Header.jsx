import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { Menu, X } from 'lucide-react'
import { NAV } from '@/config/site'
import { EASE, cn } from '@/lib/utils'
import LanguageSwitcher from './LanguageSwitcher'

function Brand() {
  const { t } = useTranslation()
  return (
    <Link to="/" aria-label={t('brand.home')} className="flex items-center gap-3">
      <span className="relative grid size-10 place-items-center rounded-xl bg-navy text-sm font-extrabold text-white">
        PV
        <span aria-hidden="true" className="absolute -right-1 -top-1 size-3 rounded-full border-2 border-white bg-lime" />
      </span>
      <span className="leading-tight">
        <span className="block text-base font-bold">{t('brand.name')}</span>
        <span className="block text-[11px] font-semibold tracking-[0.24em] text-navy-600">{t('brand.suffix')}</span>
      </span>
    </Link>
  )
}

export default function Header() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 12))

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
    <header
      className={cn(
        'sticky top-0 z-40 border-b bg-white/90 backdrop-blur-md transition-[box-shadow,border-color] duration-300',
        scrolled ? 'border-navy-100 shadow-[0_10px_30px_-22px_rgba(10,35,56,0.5)]' : 'border-transparent',
      )}
    >
      <div
        className={cn(
          'mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 transition-[height] duration-300 md:px-8',
          scrolled ? 'h-16' : 'h-20',
        )}
      >
        <Brand />

        <nav aria-label={t('nav.primary')} className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {NAV.map((item) => (
              <li key={item.key}>
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    cn(
                      'relative block whitespace-nowrap rounded-lg px-3 py-2 text-sm font-semibold transition-colors',
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
                          className="absolute inset-x-3 -bottom-0.5 h-[3px] rounded-full bg-lime"
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
            className="grid size-10 place-items-center rounded-xl border border-navy-200 text-navy xl:hidden"
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label={t('nav.primary')}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'calc(100dvh - 4rem)' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden border-t border-navy-100 bg-white xl:hidden"
          >
            <ul className="mx-auto max-w-6xl px-5 py-6 md:px-8">
              {NAV.map((item, i) => (
                <motion.li
                  key={item.key}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 + i * 0.05, ease: EASE }}
                >
                  <NavLink
                    to={item.path}
                    end={item.path === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        'flex items-center justify-between border-b border-navy-100 py-4 text-xl font-bold',
                        isActive ? 'text-navy' : 'text-navy-600',
                      )
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {t(`nav.${item.key}`)}
                        {isActive && <span aria-hidden="true" className="size-2.5 rounded-full bg-lime" />}
                      </>
                    )}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
