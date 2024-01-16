import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#FFFFFF',
  salmon: '#E66767',
  sand: '#FFF8F2',
  darker_sand: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }

  body {
    background-color: ${colors.white};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
