import { Product } from '../../utils/typedElements'
import ProductCard from '../ProductCard'
import * as S from './styles'

type Props = {
  products: Product[]
}

const ProductList = ({ products }: Props) => (
  <S.Container>
    <div className="container">
      <S.List>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.nome}
            description={product.descricao}
            image={product.foto}
          />
        ))}
      </S.List>
    </div>
  </S.Container>
)

export default ProductList
