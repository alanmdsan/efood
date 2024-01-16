import styled from 'styled-components'

import vector from '../../assets/images/vector.png'
import trattoria_banner from '../../assets/images/trattoria_banner.png'

import { colors } from '../../styles'

export const Container = styled.header`
  background-image: url(${vector});
  background-repeat: repeat-x;
`

export const CartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  color: ${colors.salmon};
  height: 184px;

  h3 {
    font-size: 18px;
    font-weight: 900;
  }
`

export const ImageContainer = styled.div`
  background-image: url(${trattoria_banner});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 280px;
  position: relative;
  color: ${colors.white};
  z-index: 0;

  h2 {
    font-size: 32px;
    font-weight: 900;
    padding-top: 152px;
  }

  h4 {
    font-size: 32px;
    font-weight: 100;
    padding-top: 24px;
    margin-right: 8px;
  }
`

export const Overlay = styled.div`
  position: absolute;
  background-color: ${colors.black};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  z-index: -1;
`

export const LogoImage = styled.img`
  margin: 0 auto;
`
