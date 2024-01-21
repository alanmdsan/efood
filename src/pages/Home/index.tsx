import { useEffect, useState } from 'react'
import { Restaurant } from '../../utils/typedElements'
import CardList from '../../components/CardList'
import Hero from '../../components/Hero'

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

  return (
    <>
      <Hero />
      <CardList restaurants={restaurants} />
    </>
  )
}

export default Home
