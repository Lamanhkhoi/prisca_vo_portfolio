// Values that do not change with language. Text lives in src/i18n/locales.

export const SITE = {
  // Files live in /public: put the file there and set the path, e.g. '/files/Prisca-Vo-CV.pdf'
  cvUrl: '/files/Prisca-Vo-CV.pdf',
  portraitUrl: '/images/portrait.jpg',
  // Publisher page of the 2026 conference proceedings (direct link to page 1784)
  publicationUrl: 'https://demo.vnuhcmpress.edu.vn/html/ky-yeu-dai-hoc-quoc-te/index.html#p=1784',
}

export const CONTACT = {
  phone: '+84 908 370 837',
  phoneHref: 'tel:+84908370837',
  emails: ['prisca@phtso.com', 'priscaphuong@gmail.com'],
  linkedin: 'linkedin.com/in/phuong-vo-mba',
  linkedinHref: 'https://www.linkedin.com/in/phuong-vo-mba-549340b9',
}

export const NAV = [
  { path: '/', key: 'home' },
  { path: '/teaching', key: 'teaching' },
  { path: '/research', key: 'research' },
  { path: '/industry', key: 'industry' },
  { path: '/talks', key: 'talks' },
  { path: '/evidence', key: 'evidence' },
]

export const INDUSTRY_ORGS = [
  'Walmart Global Sourcing',
  'Li & Fung',
  'William E. Connor',
  'Decathlon',
  'Bioworld Merchandising',
  'Goldbug',
  'Bumin Corporation',
  'PHTSO',
]

/**
 * Evidence scans, keyed by evidence code (text is in locales/<lang>/evidence.json).
 * thumb: small preview image in /public/evidence, file: full scan or PDF opened on click.
 * Example: 'E-04': { thumb: '/evidence/E-04.jpg', file: '/evidence/E-04.pdf' }
 */
export const EVIDENCE_FILES = {
  'E-01': { thumb: '', file: '' },
  'E-02': { thumb: '', file: '' },
  'E-03': { thumb: '', file: '' },
  'E-04': { thumb: '', file: '' },
  'E-05': { thumb: '', file: '' },
  'E-06': { thumb: '', file: '' },
  'E-07': { thumb: '', file: '' },
  'E-08': { thumb: '', file: '' },
  'E-09': { thumb: '', file: '' },
  'E-10': { thumb: '', file: '' },
  'E-11': { thumb: '', file: '' },
  'E-12': { thumb: '', file: '' },
  'E-13': { thumb: '', file: '' },
}
