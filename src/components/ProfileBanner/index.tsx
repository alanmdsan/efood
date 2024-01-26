import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'
import { Restaurant } from '../../utils/typedElements'
import { capitalizeFirst } from '../../utils/functions'
import * as S from './styles'

import logo from '../../assets/images/logo.png'

export type Props = {
  restaurant: Restaurant
}

const ProfileBanner = ({ restaurant }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.Container>
      <div className="container">
        <S.CartContainer>
          <h3>Restaurantes</h3>
          <S.LogoContainer>
            <Link to={'/'}>
              <S.LogoImage src={logo} alt="efood" />
            </Link>
          </S.LogoContainer>
          <h3 className="cartCount" onClick={openCart}>
            {items.length} produtos(s) no carrinho
          </h3>
        </S.CartContainer>
      </div>
      <S.ImageContainer restaurant={restaurant}>
        <S.Overlay />
        <div className="container">
          <h4>{capitalizeFirst(restaurant.tipo)}</h4>
          <h2>{restaurant.titulo}</h2>
        </div>
      </S.ImageContainer>
    </S.Container>
  )
}

export default ProfileBanner
