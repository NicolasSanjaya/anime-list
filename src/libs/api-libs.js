const ApiLibs = async ({resource, query = ""}) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
  const anime = await response.json()
  return anime
}

export const getNestedAnimeResponse = async (resource, objectProperty) => {
  const response = await ApiLibs({resource: resource, query: "limit=10"});
  return response.data.flatMap(item => item.entry)
}

export const reproduce = (data, gap) => {
  const first = Math.floor(Math.random() * data.length - gap) - 1
  const last = first + gap

  return data.slice(first, last)
}

export default ApiLibs