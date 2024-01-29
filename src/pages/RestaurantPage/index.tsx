import { useParams } from 'react-router-dom'
import { useGetRestaurantQuery } from '../../services/api'

import ProfileBanner from '../../components/ProfileBanner'
import ProductList from '../../components/ProductList'
import Loader from '../../components/Loader'

type RestaurantParams = {
  id: string
}

const RestaurantPage = () => {
  const { id } = useParams() as RestaurantParams
  const { data: restaurant } = useGetRestaurantQuery(id)

  if (!restaurant) {
    return <Loader />
  }

  return (
    <>
      <ProfileBanner restaurant={restaurant} />
      <ProductList products={restaurant.cardapio} />
    </>
  )
}

export default RestaurantPage
