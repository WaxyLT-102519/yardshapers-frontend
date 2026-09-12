import styled from 'styled-components';

export const Button = styled.button.attrs({ type: 'button' })`
  margin-top: 10px;
  padding: 5px 15px 5px 15px;
  border: 2px solid #22f;
  border-radius: 10px;
  width: fit-content;
  min-width: 75px;
  background: white;
  color: #22f;

  font-size: large;
  font-weight: bold;
  
  transition: 100ms;
  &:hover, &:focus {
    background: #22f;
    color: white;
    transition: 200ms;
  }
`