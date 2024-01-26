import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formatPrice } from '../../utils/functions'
import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((totalPrice, currentItem) => {
      return (totalPrice += currentItem.preco)
    }, 0)
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        <ul>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <p>{formatPrice(item.preco)}</p>
              </div>
              <button type="button" onClick={() => removeItem(item.id)} />
            </S.CartItem>
          ))}
        </ul>
        <S.Price>
          <span>Valor total</span>
          <span>{formatPrice(getTotalPrice())}</span>
        </S.Price>
        <S.Button>Continuar com a entrega</S.Button>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
