import Restaurant from '../../models/Restaurant'
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
            name={restaurant.name}
            description={restaurant.description}
            image={restaurant.image}
            infos={restaurant.infos}
            rating={restaurant.rating}
          />
        ))}
      </S.List>
    </div>
  </S.Container>
)

export default CardList
