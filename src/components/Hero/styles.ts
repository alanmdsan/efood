import styled from 'styled-components'

import vector from '../../assets/images/vector.png'
import { colors } from '../../styles'

export const HeroBanner = styled.header`
  background-image: url(${vector});
  background-repeat: repeat-x;
  height: 360px;
  text-align: center;
`

export const LogoImage = styled.img`
  margin: 64px auto 0;
`

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 900;
  width: 540px;
  margin: 116px auto 0;
  color: ${colors.salmon};
  line-height: 40px;
`
