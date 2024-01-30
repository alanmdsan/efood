import styled from 'styled-components'
import { colors } from '../../styles'

import trashCan from '../../assets/images/trash-can.png'

type InputGroupProps = {
  inputWidth?: string
}

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`

export const Sidebar = styled.aside`
  background-color: ${colors.salmon};
  z-index: 1;
  padding: 32px 8px 0;
  max-width: 360px;
  width: 100%;
  overflow-y: auto;

  .cart-text {
    margin-top: 8px;
    font-size: 14px;
    line-height: 22px;
    color: ${colors.darker_sand};
  }

  .empty-cart-text {
    text-align: center;
    margin: 8px;
    font-size: 14px;
    line-height: 22px;
    color: ${colors.darker_sand};
  }

  h4 {
    color: ${colors.darker_sand};
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 16px;
  }
`

export const CartItem = styled.li`
  background-color: ${colors.darker_sand};
  display: flex;
  padding: 8px;
  color: ${colors.salmon};
  margin-bottom: 16px;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
    margin-left: 8px;
  }

  p {
    margin: 16px 8px 0;
    font-size: 14px;
  }

  button {
    background-image: url(${trashCan});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    position: absolute;
    right: 8px;
    bottom: 8px;
  }
`

export const Price = styled.div`
  margin: 40px 0 16px;
  color: ${colors.darker_sand};
  font-size: 14px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;

  span {
    display: block;
  }
`

export const Button = styled.button`
  padding: 8px;
  background-color: ${colors.darker_sand};
  color: ${colors.salmon};
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  border: 0;
  width: 100%;
  margin-bottom: 8px;

  &:disabled {
    color: ${colors.lighter_salmon};
    cursor: not-allowed;
    pointer-events: none;
  }
`

// form
export const Row = styled.div`
  display: flex;
  column-gap: 32px;
`

export const InputGroup = styled.div<InputGroupProps>`
  margin-top: 8px;

  label {
    color: ${colors.darker_sand};
    margin-bottom: 8px;
    display: block;
    font-size: 14px;
    font-weight: 700;
  }

  input,
  select {
    color: ${colors.gray};
    background-color: ${colors.darker_sand};
    border: 1px solid ${colors.darker_sand};
    height: 32px;
    padding: 8px;
    width: ${(props) => props.inputWidth || '100%'};
    font-size: 14px;
    font-weight: 700;

    &.error {
      border: 1px solid red;
    }
  }
`
