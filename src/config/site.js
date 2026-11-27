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

const asset = (p) => encodeURI(p)

/**
 * Verified evidence assets mapped to Checklist-evidence codes (B, C, D, E, F, H).
 * images: array of displayable images (first image is used as card thumbnail; all images browseable in detail modal).
 * file: optional direct PDF or external URL opened from the detail modal.
 */
export const EVIDENCE_FILES = {
  // B. Degrees
  B1: {
    images: [
      asset('/img-evidence/B-x/B1-1.jpg'),
      asset('/img-evidence/B-x/B1-0.jpg'),
      asset('/img-evidence/B-x/B1-2.jpg'),
    ],
    file: '',
  },
  B2: {
    images: [asset('/img-evidence/B-x/B2.jpg')],
    file: '',
  },
  B4: {
    images: [
      asset('/img-evidence/B-x/extracted/B4-bachelor-1.jpg'),
      asset('/img-evidence/B-x/extracted/B4-bachelor-2.jpg'),
    ],
    file: asset('/img-evidence/B-x/B4.pdf'),
  },

  // C. Research & Publication
  C1: {
    images: [asset('/img-evidence/B-x/extracted/C1-proceedings-1.jpg')],
    file: SITE.publicationUrl,
  },

  // D. Teaching & Academic Service
  D2: {
    images: [asset('/img-evidence/D-x/D2/D2.jpg')],
    file: '',
  },
  D3: {
    images: [asset('/img-evidence/D-x/D3/CFVG-14–16_04_2022.jpg')],
    file: '',
  },
  D4: {
    images: [asset('/img-evidence/D-x/D4/Greenwich_Vietnam-Visiting_Lecturer-(1).jpg')],
    file: '',
  },
  D5: {
    images: [
      asset('/img-evidence/D-x/D5/Valoma-2024-(1).jpg'),
      asset('/img-evidence/D-x/D5/Valoma-2024.jpg'),
    ],
    file: '',
  },

  // E. Honours & Awards
  E1: {
    images: [asset('/img-evidence/E-x/E1/E1-Fall23.jpg')],
    file: '',
  },
  E2: {
    images: [asset('/img-evidence/E-x/E2/E2-SP23.jpg')],
    file: '',
  },
  D8: {
    images: [asset('/img-evidence/E-x/E1/E1-SU24.jpg')],
    file: '',
  },

  // F. Mentoring, Invited Talks & Community
  F1: {
    images: [asset('/img-evidence/F-x/F1/BKSIM Talent Mentoring.jpg')],
    file: '',
  },
  F3: {
    images: [
      asset('/img-evidence/F-x/F3/1792769243731_199753770517897253_336276238426818890_829dce63519b306853b3c66d173218ba.jpg'),
      asset('/img-evidence/F-x/F3/Copy of NGI_5619.JPG'),
      asset('/img-evidence/F-x/F3/Copy of NGI_5622.JPG'),
      asset('/img-evidence/F-x/F3/Copy of NGI_5639.JPG'),
      asset('/img-evidence/F-x/F3/Copy of NGI_5684.JPG'),
      asset('/img-evidence/F-x/F3/Copy of NGI_5701.JPG'),
    ],
    file: '',
  },
  F4: {
    images: [
      asset('/img-evidence/F-x/F4/Thu moi- Speaker cho Seminar ESG.jpg'),
      asset('/img-evidence/F-x/F5/F5-2/Bksim- Webinar- ESG_QTKD-Phuong (002).jpg'),
      asset('/img-evidence/F-x/F5/F5-2/Bksim- Webinar- ESG_QTKD-04 (004).jpg'),
    ],
    file: '',
  },
  F5: {
    images: [
      asset('/img-evidence/F-x/F5/F5-1/BKSIM Seminar- photo- 4.4.2026/Seminar- Photo post- Phương Võ.jpg'),
      asset('/img-evidence/F-x/F5/F5-1/BKSIM Seminar- photo- 4.4.2026/Photo seminar-Phương.jpg'),
      asset('/img-evidence/F-x/F5/F5-1/BKSIM Seminar- photo- 4.4.2026/Photo seminar-7.jpg'),
    ],
    file: '',
  },
  F6: {
    images: [
      asset('/img-evidence/F-x/F6/DSC00853.JPG'),
      asset('/img-evidence/F-x/F6/DSC00855.JPG'),
      asset('/img-evidence/F-x/F6/DSC00857.JPG'),
      asset('/img-evidence/F-x/F6/DSC00860.JPG'),
      asset('/img-evidence/F-x/F6/20250301_184840.jpg'),
    ],
    file: '',
  },

  // H. Professional Certificates (cropped from Coursera.pptx)
  H1: {
    images: [
      asset('/img-evidence/H-x/certs/rutgers-sourcing.png'),
      asset('/img-evidence/H-x/certs/rutgers-procurement.png'),
    ],
    file: '',
  },
  H2: {
    images: [asset('/img-evidence/H-x/certs/esg-investing.png')],
    file: '',
  },
  H4: {
    images: [asset('/img-evidence/H-x/certs/google-pm.png')],
    file: '',
  },
  'H5-1': {
    images: [asset('/img-evidence/H-x/certs/hrci-hr.png')],
    file: '',
  },
  'H5-2': {
    images: [asset('/img-evidence/H-x/certs/macquarie-hr.png')],
    file: '',
  },
  'H5-3': {
    images: [asset('/img-evidence/H-x/certs/minnesota-hr.png')],
    file: '',
  },
  H6: {
    images: [asset('/img-evidence/H-x/certs/fpt-ai-office.png')],
    file: '',
  },
}
