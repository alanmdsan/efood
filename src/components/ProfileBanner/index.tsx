import * as S from './styles'

import logo from '../../assets/images/logo.png'

const ProfileBanner = () => (
  <S.Container>
    <div className="container">
      <S.CartContainer>
        <h3>Restaurantes</h3>
        <S.LogoImage src={logo} alt="efood" />
        <h3 className="cartCount">0 produtos(s) no carrinho</h3>
      </S.CartContainer>
    </div>
    <S.ImageContainer>
      <S.Overlay />
      <div className="container">
        <h4>Italiana</h4>
        <h2>La Dolce Vita Trattoria</h2>
      </div>
    </S.ImageContainer>
  </S.Container>
)

export default ProfileBanner
