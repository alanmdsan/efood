import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.section`
  background-color: ${colors.sand};
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  padding: 56px 0;
`
