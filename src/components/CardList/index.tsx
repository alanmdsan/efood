import Card from '../Card'
import * as S from './styles'

type Props = {
  restaurants: Restaurant[]
}

const CardList = ({ restaurants }: Props) => (
  <S.Container>
    <div className="container">
      <S.List>
        {restaurants.map((restaurant) => (
          <Card
            key={restaurant.id}
            id={restaurant.id}
            name={restaurant.titulo}
            description={restaurant.descricao}
            image={restaurant.capa}
            highlight={restaurant.destacado}
            type={restaurant.tipo}
            rating={restaurant.avaliacao}
          />
        ))}
      </S.List>
    </div>
  </S.Container>
)

export default CardList
