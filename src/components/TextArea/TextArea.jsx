import styled from 'styled-components';

export const TextArea = styled.textarea`
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