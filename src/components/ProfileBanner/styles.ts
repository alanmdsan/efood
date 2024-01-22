import styled from 'styled-components'
import { colors } from '../../styles'
import vector from '../../assets/images/vector.png'

import { Props } from '.'

export const Container = styled.header`
  background-image: url(${vector});
  background-repeat: repeat-x;
`

export const CartContainer = styled.div`
  padding-top: 64px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  color: ${colors.salmon};
  height: 184px;

  h3 {
    font-size: 18px;
    font-weight: 900;
    padding-top: 16px;
  }

  .cartCount {
    text-align: right;
  }
`

export const ImageContainer = styled.div<Props>`
  background-image: url(${(props) => props.restaurant.capa});
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

export const LogoContainer = styled.div`
  text-align: center;
`

export const LogoImage = styled.img`
  margin: 0 auto;
  cursor: pointer;
`
