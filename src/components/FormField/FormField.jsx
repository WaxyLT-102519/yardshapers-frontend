import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  padding-top: 20px;
  width: 100%;
`

const FormField = ({children, fieldId, inputAttributes}) => {
  return (
    <Container>
      <label htmlFor={fieldId}>{children}</label>
      <input id={fieldId} {...inputAttributes}/>
    </Container>
  )
}

export default FormField