import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles'

export const ButtonLink = styled(Link)`
  background-color: ${colors.salmon};
  color: ${colors.sand};
  font-size: 14px;
  font-weight: 700;
  padding: 8px;
`
