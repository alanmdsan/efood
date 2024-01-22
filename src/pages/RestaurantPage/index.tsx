import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Restaurant } from '../../utils/typedElements'
import ProfileBanner from '../../components/ProfileBanner'
import ProductList from '../../components/ProductList'
import { Loading, LoadingContainer } from '../../styles'

import loading from '../../assets/images/loading.gif'

const RestaurantPage = () => {
  const { id } = useParams()

  const [restaurant, setRestaurant] = useState<Restaurant>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [id])

  if (!restaurant) {
    return (
      <LoadingContainer>
        <Loading src={loading} alt="Carregando..." />
      </LoadingContainer>
    )
  }

  return (
    <>
      <ProfileBanner restaurant={restaurant} />
      <ProductList products={restaurant.cardapio} />
    </>
  )
}

export default RestaurantPage
