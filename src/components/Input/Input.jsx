import styled from 'styled-components';

export const Input = styled.input.attrs({ type: 'text' })`
  padding: 5px;
  border: 2px solid black;
  border-radius: 10px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: larger;
  transition: 200ms;
  &:focus {
    border-color: #22f;
  }
`