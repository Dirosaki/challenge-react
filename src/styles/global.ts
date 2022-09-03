import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	${({ theme }) => css`
    *,
    *::before,
    *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: none;
    }

    body {
      background: ${theme.colors.background};
      color: ${theme.colors.text};
      -webkit-font-smoothing: antialiased;
    }

    body,
    input,
    textarea,
    select,
    button {
      font-family: 'Open Sans', sans-serif;
      font-size: 1rem;
      font-weight: 400;
    }
  `}
`
