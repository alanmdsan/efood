declare type Product = {
  id: number
  nome: string
  descricao: string
  foto: string
  porcao: string
  preco: number
}

declare type Restaurant = {
  id: number
  titulo: string
  descricao: string
  tipo: string
  capa: string
  destacado: boolean
  avaliacao: number
  cardapio: Product[]
}

declare type PurchaseProduct = {
  id: number
  price: number
}

declare type PurchasePayload = {
  products: PurchaseProduct[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement?: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

declare type PurchaseResponse = {
  orderId: string
}
