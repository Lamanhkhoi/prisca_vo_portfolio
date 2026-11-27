// Checks that every locale has exactly the same keys and list lengths as English.
// Run: npm run check:i18n
import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('../src/i18n/locales/', import.meta.url))
const base = 'en'
const langs = readdirSync(root).filter((d) => d !== base)

const shape = (value, path = '') => {
  if (Array.isArray(value)) return [`${path}[${value.length}]`, ...value.flatMap((v, i) => shape(v, `${path}.${i}`))]
  if (value && typeof value === 'object') return Object.entries(value).flatMap(([k, v]) => shape(v, path ? `${path}.${k}` : k))
  return [path]
}

let problems = 0
for (const file of readdirSync(join(root, base))) {
  const read = (lng) => JSON.parse(readFileSync(join(root, lng, file), 'utf8'))
  const expected = new Set(shape(read(base)))
  for (const lng of langs) {
    let actual
    try {
      actual = new Set(shape(read(lng)))
    } catch (e) {
      console.error(`x ${lng}/${file}: ${e.message}`)
      problems++
      continue
    }
    for (const k of expected) if (!actual.has(k)) (problems++, console.error(`x ${lng}/${file} missing: ${k}`))
    for (const k of actual) if (!expected.has(k)) (problems++, console.error(`x ${lng}/${file} extra:   ${k}`))
  }
}

if (problems) {
  console.error(`\n${problems} problem(s) found.`)
  process.exit(1)
}
console.log(`i18n OK: ${langs.join(', ')} match ${base}.`)
