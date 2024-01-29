import Card from '../Card'
import Loader from '../Loader'
import * as S from './styles'

type Props = {
  restaurants?: Restaurant[]
  isLoading: boolean
}

const CardList = ({ restaurants, isLoading }: Props) => {
  if (isLoading) {
    return <Loader />
  }

  return (
    <S.Container>
      <div className="container">
        <S.List>
          {restaurants &&
            restaurants.map((restaurant) => (
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
}

export default CardList
