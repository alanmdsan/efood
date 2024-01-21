import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  background-color: ${colors.white};
`

export const ContainerImage = styled.div`
  height: 217px;
  position: relative;
  overflow: hidden;
`

export const Image = styled.img`
  width: 100%;
`

export const ContainerDescription = styled.div`
  border: 1px solid ${colors.salmon};
  border-top: 0;
  color: ${colors.salmon};

  p {
    font-size: 14px;
    padding: 8px;
    line-height: 22px;
  }
`

export const ContainerName = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;

  h1 {
    font-size: 18px;
    font-weight: 700;
  }
`

export const ContainerButton = styled.div`
  padding: 8px;
`

export const Rating = styled.div`
  display: flex;
`

export const IconRating = styled.img`
  width: 21px;
  height: 21px;
  margin-left: 8px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
