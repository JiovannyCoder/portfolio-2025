export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')
  const { lang = 'fr' } = getQuery(event)

  const storage = useStorage('assets:projects')

  const storageKey = `${lang}/${slug}.json`

  const allowedSlugs = [
    'cv-builder',
    'going-to-itasy',
    'haritech-agency',
    'raph-co',
    'raph-emploi',
    'pmdp',
  ]

  if (!slug || !allowedSlugs.includes(slug)) {
    throw createError({
      statusCode: 404,
      statusMessage: `Project "${slug}" not found`,
    })
  }

  try {
    const data = await storage.getItem(storageKey)

    if (!data) {
      throw new Error('Fichier vide ou introuvable')
    }

    return data as ProjectDetails
  } catch (e) {
    throw createError({
      statusCode: 404,
      statusMessage: `Projects Not Found`,
    })
  }
})
