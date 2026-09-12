import { createGlobalStyle } from 'styled-components'
import { concreteBackground } from '../assets'

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Poppins, Verdana, Geneva, Tahoma, sans-serif;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: url(${concreteBackground});
}

label {
  font-size: larger;
}
`