export const sliceDescription = (description: string) => {
  if (description.length > 190) {
    return description.slice(0, 190).concat('...')
  }
  return description
}

export const formatPrice = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}
