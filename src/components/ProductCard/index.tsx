import * as S from './styles'

type Props = {
  name: string
  description: string
  image: string
}

const ProductCard = ({ name, description, image }: Props) => (
  <S.Container>
    <S.ContainerImage>
      <img src={image} alt={name} />
    </S.ContainerImage>
    <S.ContainerDescription>
      <h1>{name}</h1>
      <p>{description}</p>
      <S.Button>Adicionar ao carrinho</S.Button>
    </S.ContainerDescription>
  </S.Container>
)

export default ProductCard
