export default defineEventHandler(async (event) => {
  const { lang = 'fr' } = getQuery(event)

  const storage = useStorage('assets:projects')

  const storageKey = `${lang}/index.json`

  try {
    const data = await storage.getItem(storageKey)

    if (!data) {
      throw new Error('Fichier vide ou introuvable')
    }

    return data as Project[]
  } catch (e) {
    throw createError({
      statusCode: 404,
      statusMessage: `Projects Not Found`,
    })
  }
})
