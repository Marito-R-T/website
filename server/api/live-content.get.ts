import fs from 'node:fs'
import path from 'node:path'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const fileRelPath = (query.file as string) || 'content/announcement.md'
  const repo = (query.repo as string) || 'Marito-R-T/website'
  const branch = (query.branch as string) || 'main'

  const rawUrl = `https://raw.githubusercontent.com/${repo}/${branch}/${fileRelPath}`

  let rawContent = ''
  let source = 'github-raw'

  try {
    // 1. Intento de fetch remoto en vivo desde GitHub (0 redespliegues)
    rawContent = await $fetch<string>(rawUrl, {
      responseType: 'text',
      headers: {
        'Cache-Control': 'no-cache'
      }
    })
  } catch (err) {
    // 2. Fallback a archivo local durante desarrollo o si aún no se subió el commit a GitHub
    try {
      const localFilePath = path.resolve(process.cwd(), fileRelPath)
      if (fs.existsSync(localFilePath)) {
        rawContent = fs.readFileSync(localFilePath, 'utf-8')
        source = 'local-fallback'
      }
    } catch {
      rawContent = '# Sin contenido disponible'
    }
  }

  // Parseo rápido de Frontmatter (--- meta ---)
  let metadata: Record<string, string> = {
    title: 'Aviso Dinámico',
    tag: 'DOCENCIA',
    date: new Date().toLocaleDateString('es-GT')
  }
  let body = rawContent

  const match = rawContent.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/)
  if (match) {
    const rawMeta = match[1]
    body = match[2].trim()
    rawMeta.split('\n').forEach(line => {
      const [k, ...v] = line.split(':')
      if (k && v.length) {
        metadata[k.trim()] = v.join(':').trim()
      }
    })
  }

  return {
    source,
    rawUrl,
    metadata,
    body,
    fetchedAt: new Date().toISOString()
  }
})
