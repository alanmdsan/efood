import * as S from './styles'

import logo from '../../assets/images/logo.png'

const Hero = () => (
  <S.HeroBanner>
    <img src={logo} alt="efood" />
    <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
  </S.HeroBanner>
)

export default Hero
