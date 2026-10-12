#!/usr/bin/env node
/**
 * Fails the build when two pages in dist/ share a <title>.
 * Duplicate titles make pages compete for the same query, and on this site
 * the article and treatment pages cover overlapping topics.
 *
 *   npm run check:titles
 */
import { readdir, readFile } from 'node:fs/promises'
import { join, relative } from 'node:path'

const DIST = 'dist'

async function htmlFiles(dir) {
  const out = []
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) out.push(...(await htmlFiles(full)))
    else if (entry.name.endsWith('.html')) out.push(full)
  }
  return out
}

const files = await htmlFiles(DIST).catch(() => {
  console.error(`✗ ${DIST}/ not found — run \`npm run build\` first.`)
  process.exit(1)
})

const byTitle = new Map()
let untitled = 0

for (const file of files) {
  const html = await readFile(file, 'utf8')
  const match = html.match(/<title>([\s\S]*?)<\/title>/i)
  if (!match) {
    untitled++
    console.warn(`! no <title>: ${relative(DIST, file)}`)
    continue
  }
  const title = match[1].trim()
  const url = '/' + relative(DIST, file).replace(/index\.html$/, '')
  byTitle.set(title, [...(byTitle.get(title) ?? []), url])
}

const duplicates = [...byTitle.entries()].filter(([, urls]) => urls.length > 1)

if (duplicates.length === 0) {
  console.log(`✓ ${files.length} pages checked — all titles unique${untitled ? ` (${untitled} without <title>)` : ''}`)
  process.exit(0)
}

console.error(`✗ ${duplicates.length} duplicate title(s) across ${files.length} pages:\n`)
for (const [title, urls] of duplicates) {
  console.error(`  "${title}"`)
  for (const url of urls) console.error(`    - ${url}`)
  console.error('')
}
process.exit(1)
