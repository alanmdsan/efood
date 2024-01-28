import { useEffect, useState } from 'react'
import CardList from '../../components/CardList'
import Hero from '../../components/Hero'
import { Loading, LoadingContainer } from '../../styles'

import loading from '../../assets/images/loading.gif'

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

  if (restaurants.length == 0) {
    return (
      <>
        <Hero />
        <LoadingContainer>
          <Loading src={loading} alt="Carregando..." />
        </LoadingContainer>
      </>
    )
  }

  return (
    <>
      <Hero />
      <CardList restaurants={restaurants} />
    </>
  )
}

export default Home
