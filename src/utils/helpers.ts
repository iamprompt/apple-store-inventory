export const getStoreImage = (
  imagekey: string,
  {
    width = 1000,
    height = 1000,
    format = 'png-alpha',
    quality = 80,
  }: { width?: number; height?: number; format?: string; quality?: number } = {}
) => {
  const url = new URL(`https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/${imagekey}`)
  url.searchParams.set('wid', width.toString())
  url.searchParams.set('hei', height.toString())
  url.searchParams.set('fmt', format)
  url.searchParams.set('qlt', quality.toString())

  return url.toString()
}

export const getFulfillmentUrl = (
  partNumbers: string[] | string,
  { location = '10600', store, little = false }: { location?: string; store?: string; little?: boolean } = {}
) => {
  const url = new URL('https://www.apple.com/th/shop/fulfillment-messages')

  if (Array.isArray(partNumbers)) {
    partNumbers.forEach((partNumber, index) => url.searchParams.append(`parts.${index}`, partNumber))
  } else {
    url.searchParams.set('parts.0', partNumbers)
  }

  url.searchParams.set('location', location)
  url.searchParams.set('postalCode', location)

  if (store) {
    url.searchParams.set('store', store)
  }

  if (little) {
    url.searchParams.set('little', 'true')
  }

  url.searchParams.set('mts.0', 'regular')
  // url.searchParams.set('mts.1', 'sticky')

  return url.toString()
}
