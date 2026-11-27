import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight, ArrowUpRight, Award, BookOpen, GraduationCap, MapPin, Users } from 'lucide-react'
import { useContent, useDocumentTitle } from '@/hooks/useContent'
import { NAV } from '@/config/site'
import { EASE } from '@/lib/utils'
import { Card, Chip, Container, IconBadge, Section, SectionHeading } from '@/components/ui/Primitives'
import Button from '@/components/ui/Button'
import CvButton from '@/components/ui/CvButton'
import Portrait from '@/components/ui/Portrait'
import Reveal from '@/components/motion/Reveal'
import CountUp from '@/components/motion/CountUp'

const ICONS = { graduation: GraduationCap, book: BookOpen, award: Award, users: Users }

const rise = (delay) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: EASE },
})

function Hero() {
  const { t, list } = useContent('home')
  const common = useContent('common')

  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-y-0 right-0 hidden w-[38%] bg-navy-50 lg:block" />
      <Container className="relative grid items-center gap-14 py-14 md:py-20 lg:grid-cols-12 lg:gap-10 lg:py-24">
        <div className="lg:col-span-7 xl:pr-4">
          <motion.p {...rise(0)} className="inline-flex items-center gap-2 rounded-full bg-lime-100 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-lime-700">
            <span aria-hidden="true" className="size-2 rounded-full bg-lime" />
            {t('hero.eyebrow')}
          </motion.p>
          <motion.h1 {...rise(0.08)} className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.35rem] xl:text-[3.6rem]">
            {t('hero.name')}
            <span className="mt-2 block text-2xl font-bold text-navy-600 sm:text-3xl">{t('hero.alias')}</span>
          </motion.h1>
          <motion.p {...rise(0.16)} className="mt-5 text-base font-bold uppercase tracking-wide text-navy-700 sm:text-lg">
            {t('hero.role')}
          </motion.p>
          <motion.ul {...rise(0.22)} className="mt-5 flex flex-wrap gap-2">
            {list('hero.fields').map((field) => (
              <li key={field}>
                <Chip>{field}</Chip>
              </li>
            ))}
          </motion.ul>
          <motion.p {...rise(0.28)} className="mt-6 max-w-xl text-base leading-relaxed text-navy-600 md:text-lg">
            {t('hero.intro')}
          </motion.p>
          <motion.div {...rise(0.34)} className="mt-8 flex flex-wrap items-center gap-3">
            <Button to="/research">
              {t('hero.cta')}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
            <CvButton />
          </motion.div>
          <motion.p {...rise(0.4)} className="mt-6 flex items-center gap-2 text-sm font-medium text-navy-600">
            <MapPin className="size-4 text-lime-700" aria-hidden="true" />
            {common.t('contact.location')}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          className="mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none lg:pl-10"
        >
          <Portrait />
        </motion.div>
      </Container>
    </section>
  )
}

function Stats() {
  const { t, list } = useContent('home')
  return (
    <section aria-labelledby="stats-title" className="py-6">
      <Container>
        <Reveal className="rounded-3xl bg-navy px-6 py-10 text-white md:px-12 md:py-12">
          <h2 id="stats-title" className="sr-only">
            {t('stats.title')}
          </h2>
          <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {list('stats.items').map((item, i) => (
              <div key={i} className="flex flex-col lg:border-l lg:border-white/15 lg:pl-6 lg:first:border-0 lg:first:pl-0">
                <dt className="order-2 mt-3 text-sm leading-snug text-navy-200">{item.label}</dt>
                <dd className="text-4xl font-extrabold tracking-tight md:text-5xl">
                  <CountUp value={item.value} decimals={item.decimals} suffix={item.suffix} />
                  <span aria-hidden="true" className="mt-3 block h-1 w-8 rounded-full bg-lime" />
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  )
}

function Highlights() {
  const { t, list } = useContent('home')
  return (
    <Section aria-labelledby="highlights-title">
      <SectionHeading id="highlights-title" title={t('highlights.title')} />
      <div className="grid gap-5 md:grid-cols-2">
        {list('highlights.items').map((item, i) => (
          <Reveal key={item.title} delay={i * 0.06}>
            <Card interactive className="flex h-full gap-5">
              <IconBadge icon={ICONS[item.icon] ?? Award} />
              <div>
                <h3 className="text-lg font-bold leading-snug">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-navy-600">{item.text}</p>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

function Explore() {
  const { t } = useContent('home')
  const common = useContent('common')
  const pages = NAV.filter((item) => item.key !== 'home')

  return (
    <Section aria-labelledby="explore-title" className="bg-navy-50">
      <SectionHeading id="explore-title" title={t('explore.title')} />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
        {pages.map((page, i) => (
          <Reveal key={page.key} delay={i * 0.05} className={i < 2 ? 'lg:col-span-3' : 'lg:col-span-2'}>
            <Link
              to={page.path}
              className="group flex h-full flex-col justify-between gap-6 rounded-2xl border border-navy-100 bg-white p-6 transition duration-300 ease-(--ease-brand) hover:-translate-y-1 hover:border-navy hover:shadow-[0_22px_44px_-26px_rgba(10,35,56,0.45)]"
            >
              <div>
                <p className="text-xs font-bold tracking-[0.18em] text-navy-600">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="mt-3 text-xl font-bold">{common.t(`nav.${page.key}`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{t(`explore.items.${page.key}`)}</p>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-bold">
                {common.t('actions.viewPage')}
                <span className="grid size-8 place-items-center rounded-full bg-navy-50 transition duration-300 group-hover:bg-lime">
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45" aria-hidden="true" />
                </span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export default function HomePage() {
  const { t } = useContent('home')
  useDocumentTitle(t('meta.title'))

  return (
    <>
      <Hero />
      <Stats />
      <Highlights />
      <Explore />
    </>
  )
}
