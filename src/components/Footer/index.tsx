import * as S from './styles'

import logo from '../../assets/images/logo.png'
import icon_instagram from '../../assets/images/icon_instagram.png'
import icon_facebook from '../../assets/images/icon_facebook.png'
import icon_twitter from '../../assets/images/icon_twitter.png'

const Footer = () => (
  <S.FooterContainer>
    <S.LogoImage src={logo} />
    <S.SocialMediaContainer>
      <img src={icon_instagram} alt="Instagram" />
      <img src={icon_facebook} alt="Facebook" />
      <img src={icon_twitter} alt="Twitter" />
    </S.SocialMediaContainer>
    <S.CopyrightContainer>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </S.CopyrightContainer>
  </S.FooterContainer>
)

export default Footer
