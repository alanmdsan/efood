import * as S from './styles'

import logo from '../../assets/images/logo.png'

const Cart = () => (
  <S.CartContainer>
    <S.Overlay />
    <S.Sidebar>
      <ul>
        <S.CartItem>
          <img src={logo} alt="" />
          <div>
            <h3>Pizza Marguerita</h3>
            <p>R$ 60,90</p>
          </div>
          <button type="button" />
        </S.CartItem>
        <S.CartItem>
          <img src={logo} alt="" />
          <div>
            <h3>Pizza Marguerita</h3>
            <p>R$ 60,90</p>
          </div>
          <button type="button" />
        </S.CartItem>
      </ul>
      <S.Price>
        <span>Valor total</span>
        <span>R$ 182,70</span>
      </S.Price>
      <S.Button>Continuar com a entrega</S.Button>
    </S.Sidebar>
  </S.CartContainer>
)

export default Cart
