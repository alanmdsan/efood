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
export const Button = styled.button`
  padding: 8px;
  margin: 8px;
  background-color: ${colors.darker_sand};
  color: ${colors.salmon};
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  border: 0;
  width: 95%;
`

export const ModalButton = styled.button`
  padding: 8px;
  margin-top: 16px;
  background-color: ${colors.darker_sand};
  color: ${colors.salmon};
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  border: 0;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
`

export const ModalContent = styled.div`
  height: 344px;
  background-color: ${colors.salmon};
  position: relative;
  z-index: 1;
  color: ${colors.white};

  h4 {
    font-size: 18px;
    font-weight: 900;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-top: 16px;
    margin-right: 32px;
  }
`

export const ModalFlex = styled.div`
  display: flex;
`

export const ModalImage = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  margin: 32px;
`
