import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.div`
  height: 296px;
  background-color: ${colors.darker_sand};
  text-align: center;
`

export const LogoImage = styled.img`
  margin: 40px auto 0;
`

export const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;

  img {
    margin: 0 4px 0 4px;
  }
`

export const CopyrightContainer = styled.div`
  width: 480px;
  margin: 80px auto 0;

  p {
    font-size: 10px;
    font-weight: 400;
    color: ${colors.salmon};
    line-height: 12px;
  }
`
