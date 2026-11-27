// Values that do not change with language. Text lives in src/i18n/locales.

export const SITE = {
  // Set these when the files are ready, e.g. '/files/Prisca-Vo-CV.pdf' (put the file in /public/files)
  cvUrl: '',
  // e.g. '/images/portrait.jpg' (put the file in /public/images)
  portraitUrl: '',
  // Link to the Evidence Portfolio (Google Drive or a PDF in /public/files)
  evidenceUrl: '',
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
  { path: '/about', key: 'about' },
  { path: '/research', key: 'research' },
  { path: '/talks-events', key: 'talks' },
  { path: '/recognition', key: 'recognition' },
  { path: '/other', key: 'other' },
]
