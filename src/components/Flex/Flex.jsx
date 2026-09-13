import styled from "styled-components"

export const Flex = styled.div`
  display: flex;
  flex-flow: ${props => props.flow || "column nowrap"};
  justify-content: ${props => props.justify || "space-evenly"};
  align-items: ${props => props.align || "center"};
`