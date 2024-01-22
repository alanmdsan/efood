import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  background-color: ${colors.salmon};
`

export const ContainerImage = styled.div`
  padding: 8px;
  height: 183px;
  overflow: hidden;
`

export const Image = styled.img`
  width: 100%;
`

export const ContainerDescription = styled.div`
  color: ${colors.darker_sand};

  h1 {
    margin-top: 8px;
    margin-left: 8px;
    font-size: 16px;
    font-weight: 900;
  }

  p {
    font-size: 14px;
    padding: 8px;
    line-height: 22px;
  }
`
export const Button = styled.div`
  padding: 8px;
  margin: 8px;
  background-color: ${colors.darker_sand};
  color: ${colors.salmon};
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
`
