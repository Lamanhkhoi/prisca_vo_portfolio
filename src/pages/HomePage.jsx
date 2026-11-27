import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight, ArrowUpRight, Award, Building2, MapPin, Star } from 'lucide-react'
import { useContent, useDocumentTitle } from '@/hooks/useContent'
import { NAV } from '@/config/site'
import { EASE } from '@/lib/utils'
import { Card, Chip, Container, Label, Section, SectionHeading } from '@/components/ui/Primitives'
import Button from '@/components/ui/Button'
import CvButton from '@/components/ui/CvButton'
import Portrait from '@/components/ui/Portrait'
import Reveal from '@/components/motion/Reveal'
import CountUp from '@/components/motion/CountUp'

const rise = (delay) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: EASE },
})

function Hero() {
  const { t, list } = useContent('home')
  const common = useContent('common')

  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(55%_80%_at_82%_15%,rgba(15,118,110,0.22),transparent_65%)]"
      />
      <Container className="relative grid items-center gap-12 pb-20 pt-12 md:pb-24 md:pt-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.p
            {...rise(0)}
            className="flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-accent-light"
          >
            <span aria-hidden="true" className="h-px w-8 bg-accent-light" />
            {t('hero.eyebrow')}
          </motion.p>
          <motion.h1
            {...rise(0.05)}
            className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-[3.35rem]"
          >
            {t('hero.name')}
            <span className="mt-2 block text-xl font-medium tracking-[-0.01em] text-navy-300 sm:text-2xl">
              {t('hero.alias')}
            </span>
          </motion.h1>
          <motion.p
            {...rise(0.1)}
            className="mt-5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent-light sm:text-[13px]"
          >
            {t('hero.role')}
          </motion.p>
          <motion.p
            {...rise(0.15)}
            className="mt-4 max-w-[54ch] text-[16px] leading-[1.68] text-navy-200 md:text-[17px]"
          >
            {t('hero.intro')}
          </motion.p>
          <motion.ul {...rise(0.2)} className="mt-6 flex flex-wrap gap-2">
            {list('hero.fields').map((field) => (
              <li key={field}>
                <Chip tone="dark">{field}</Chip>
              </li>
            ))}
          </motion.ul>
          <motion.div {...rise(0.24)} className="mt-8 flex flex-wrap items-center gap-3">
            <Button to="/research" variant="accent">
              {t('hero.cta')}
              <ArrowRight className="size-4" strokeWidth={1.75} aria-hidden="true" />
            </Button>
            <CvButton variant="light" />
            <span className="ml-1 flex items-center gap-1.5 text-xs font-medium text-navy-300">
              <MapPin className="size-3.5 text-accent-light" strokeWidth={1.75} aria-hidden="true" />
              {common.t('contact.location')}
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          className="mx-auto w-full max-w-[18.5rem] lg:col-span-5 lg:mr-0 lg:max-w-[21.5rem]"
        >
          <Portrait />
        </motion.div>
      </Container>
    </section>
  )
}

function ImpactStrip() {
  const { t, list } = useContent('home')
  return (
    <section aria-labelledby="stats-title" className="relative z-10 -mt-10">
      <Container>
        <Reveal className="rounded-xl border border-navy/10 bg-surface shadow-[0_20px_48px_-32px_rgba(10,35,56,0.45)]">
          <h2 id="stats-title" className="sr-only">
            {t('stats.title')}
          </h2>
          <dl className="grid grid-cols-2 divide-navy/10 lg:grid-cols-4 lg:divide-x">
            {list('stats.items').map((item, i) => (
              <div
                key={i}
                className="flex flex-col border-navy/10 p-5 even:border-l md:p-7 [&:nth-child(n+3)]:border-t lg:[&:nth-child(n+3)]:border-t-0 lg:even:border-l-0"
              >
                <dt className="order-2 mt-2 text-[13px] leading-snug text-navy-600">{item.label}</dt>
                <dd className="order-1 font-mono text-3xl font-bold tabular-nums tracking-[-0.03em] text-navy md:text-[2.4rem]">
                  <CountUp value={item.value} decimals={item.decimals} suffix={item.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  )
}

function Profile() {
  const { t, list } = useContent('home')
  const common = useContent('common')

  return (
    <Section aria-labelledby="profile-title">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <SectionHeading id="profile-title" title={t('profile.title')} />
          <Reveal>
            <p className="max-w-[62ch] text-[16px] leading-[1.7] text-navy-700 md:text-[17px]">
              {t('profile.text')}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-8 rounded-xl border border-navy/10 border-l-2 border-l-accent bg-surface p-6 md:p-7">
              <Label className="text-accent">{t('objective.title')}</Label>
              <p className="mt-2.5 flex items-center gap-2 text-sm font-bold text-navy">
                <Building2 className="size-4 shrink-0 text-accent" strokeWidth={1.75} aria-hidden="true" />
                {t('objective.org')}
              </p>
              <p className="mt-3 max-w-[60ch] text-[15px] leading-[1.68] text-navy-700">{t('objective.text')}</p>
            </div>
          </Reveal>
        </div>

        <aside className="space-y-5 lg:col-span-5">
          <Reveal delay={0.06}>
            <Card>
              <Label as="h3">{t('education.title')}</Label>
              <ol className="mt-5 divide-y divide-navy/8">
                {list('education.items').map((e) => (
                  <li key={e.year} className="grid grid-cols-[3.5rem_1fr] gap-3 py-4 first:pt-0 last:pb-0">
                    <span className="font-mono text-xs font-bold tabular-nums text-accent">{e.year}</span>
                    <span>
                      <span className="block text-[15px] font-bold leading-snug text-navy">{e.degree}</span>
                      <span className="mt-0.5 block text-sm text-navy-600">{e.school}</span>
                      {e.note && <span className="mt-1.5 block text-xs leading-relaxed text-navy-600">{e.note}</span>}
                    </span>
                  </li>
                ))}
              </ol>
            </Card>
          </Reveal>
          <Reveal delay={0.1}>
            <Card>
              <Label as="h3">{t('languages.title')}</Label>
              <dl className="mt-4 divide-y divide-navy/8">
                {list('languages.items').map((l) => (
                  <div key={l.name} className="py-3 first:pt-0 last:pb-0">
                    <dt className="text-[15px] font-bold text-navy">{l.name}</dt>
                    <dd className="mt-0.5 text-sm leading-relaxed text-navy-600">{l.level}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 flex items-center gap-2 border-t border-navy/10 pt-4 font-mono text-xs font-medium text-navy-600">
                <MapPin className="size-3.5 text-accent" strokeWidth={1.75} aria-hidden="true" />
                {common.t('contact.location')}
              </p>
            </Card>
          </Reveal>
        </aside>
      </div>
    </Section>
  )
}

function Featured() {
  const { t } = useContent('home')
  const research = useContent('research')
  const teaching = useContent('teaching')
  const allAwards = teaching.list('awards.items')
  const awards = [...allAwards.filter((a) => a.featured), ...allAwards.filter((a) => !a.featured)].slice(0, 3)

  return (
    <Section tone="stone">
      <div className="grid gap-6 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <Link
            to="/research"
            className="group flex h-full flex-col rounded-xl border border-navy/10 bg-surface p-6 transition-all duration-300 ease-(--ease-brand) hover:-translate-y-0.5 hover:border-navy/25 hover:shadow-[0_18px_40px_-28px_rgba(10,35,56,0.35)] md:p-8"
          >
            <Label className="text-accent">{t('featured.title')}</Label>
            <div className="mt-4 flex flex-wrap gap-2">
              <Chip tone="navy">{research.t('publication.type')}</Chip>
              <Chip tone="outline" className="tabular-nums">
                {research.t('publication.year')}
              </Chip>
              <Chip tone="accent">{research.t('publication.role')}</Chip>
            </div>
            <h3 className="mt-5 text-2xl font-extrabold leading-[1.2] tracking-[-0.02em] text-navy">
              {research.t('publication.paperTitle')}
            </h3>
            <p className="mt-2 text-sm font-semibold text-navy-600">{research.t('publication.authors')}</p>
            <p className="mt-5 max-w-[58ch] border-l-2 border-accent pl-4 text-[15px] leading-[1.68] text-navy-700">
              {research.t('publication.finding')}
            </p>
            <span className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-bold text-navy">
              {t('featured.cta')}
              <ArrowRight
                className="size-4 text-accent transition-transform duration-200 ease-(--ease-brand) group-hover:translate-x-1"
                strokeWidth={1.75}
                aria-hidden="true"
              />
            </span>
          </Link>
        </Reveal>

        <Reveal delay={0.06} className="lg:col-span-5">
          <Link
            to="/teaching"
            className="group flex h-full flex-col rounded-xl border border-white/10 bg-navy p-6 text-white transition-all duration-300 ease-(--ease-brand) hover:-translate-y-0.5 hover:bg-navy-800 md:p-8"
          >
            <Label className="text-accent-light">{t('recognitionTeaser.title')}</Label>
            <ul className="mt-5 divide-y divide-white/10">
              {awards.map((a) => (
                <li key={`${a.date}-${a.title}`} className="flex gap-3 py-4 first:pt-0 last:pb-0">
                  {a.featured ? (
                    <Star
                      className="mt-0.5 size-4 shrink-0 fill-brass-light text-brass-light"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  ) : (
                    <Award className="mt-0.5 size-4 shrink-0 text-accent-light" strokeWidth={1.5} aria-hidden="true" />
                  )}
                  <span>
                    <span className="block text-[15px] font-bold leading-snug">{a.title}</span>
                    <span className="mt-1 block font-mono text-xs text-navy-300">
                      {a.org} · <span className="tabular-nums">{a.date}</span>
                    </span>
                  </span>
                </li>
              ))}
            </ul>
            <span className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-bold text-accent-light">
              {t('recognitionTeaser.cta')}
              <ArrowRight
                className="size-4 transition-transform duration-200 ease-(--ease-brand) group-hover:translate-x-1"
                strokeWidth={1.75}
                aria-hidden="true"
              />
            </span>
          </Link>
        </Reveal>
      </div>
    </Section>
  )
}

/** Sticky Split Editorial Directory replacing 5 shallow boxes. */
function Explore() {
  const { t } = useContent('home')
  const common = useContent('common')
  const pages = NAV.filter((item) => item.key !== 'home')

  return (
    <Section aria-labelledby="explore-title">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
          <SectionHeading id="explore-title" title={t('explore.title')} className="mb-4" />
          <p className="max-w-[32ch] text-sm leading-[1.68] text-navy-600">{common.t('footer.tagline')}</p>
        </div>

        <div className="lg:col-span-8">
          <ul className="divide-y divide-navy/10 border-y border-navy/10">
            {pages.map((page, i) => (
              <Reveal as="li" key={page.key} delay={i * 0.03}>
                <Link
                  to={page.path}
                  className="group grid items-baseline gap-2 py-5 transition-colors duration-200 hover:bg-surface/70 sm:grid-cols-[3rem_13rem_1fr_auto] sm:items-center sm:gap-5 sm:px-4"
                >
                  <span className="font-mono text-xs font-semibold tabular-nums text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-base font-bold text-navy group-hover:text-accent-dark">
                    {common.t(`nav.${page.key}`)}
                  </span>
                  <span className="text-sm leading-relaxed text-navy-600">{t(`explore.items.${page.key}`)}</span>
                  <ArrowUpRight
                    className="hidden size-4 shrink-0 text-navy-400 transition-transform duration-200 ease-(--ease-brand) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent sm:block"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
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
      <ImpactStrip />
      <Profile />
      <Featured />
      <Explore />
    </>
  )
}
