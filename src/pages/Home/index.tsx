import { useGetRestaurantsQuery } from '../../services/api'

import CardList from '../../components/CardList'
import Hero from '../../components/Hero'

const Home = () => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery()

  return (
    <>
      <Hero />
      <CardList restaurants={restaurants} isLoading={isLoading} />
    </>
  )
}

export default Home
