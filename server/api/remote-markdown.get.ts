export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const source = query.url as string

  if (!source) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Falta el parámetro url (ej. https://raw.githubusercontent.com/...)'
    })
  }

  // Permite traer markdowns de GitHub o cualquier URL cruda pública
  try {
    const rawResponse = await $fetch<string>(source, {
      responseType: 'text'
    })

    // Parseo ligero de frontmatter (entre --- y ---)
    let frontmatter: Record<string, any> = {}
    let content = rawResponse

    const match = rawResponse.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/)
    if (match) {
      const rawMeta = match[1]
      content = match[2]
      rawMeta.split('\n').forEach(line => {
        const [k, ...v] = line.split(':')
        if (k && v) {
          frontmatter[k.trim()] = v.join(':').trim()
        }
      })
    }

    return {
      frontmatter,
      content,
      fetchedAt: new Date().toISOString()
    }
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      statusMessage: `No se pudo obtener el markdown remoto: ${error?.message || 'Error'}`
    })
  }
})
