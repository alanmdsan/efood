export type Product = {
  id: number
  nome: string
  descricao: string
  foto: string
  porcao: string
  preco: number
}

export type Restaurant = {
  id: number
  titulo: string
  descricao: string
  tipo: string
  capa: string
  destacado: boolean
  avaliacao: number
  cardapio: Product[]
}
