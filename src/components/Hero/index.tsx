import * as S from './styles'

import logo from '../../assets/images/logo.png'

const Hero = () => (
  <S.HeroBanner>
    <S.LogoImage src={logo} alt="efood" />
    <S.Title>Viva experiências gastronômicas no conforto da sua casa</S.Title>
  </S.HeroBanner>
)

export default Hero
