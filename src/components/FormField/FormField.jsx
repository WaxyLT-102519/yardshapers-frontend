import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
`

const FormField = ({children, fieldId, inputAttributes}) => {
  return (
    <Container>
      <label htmlFor={fieldId}><small>{children}</small></label>
      <input {...inputAttributes}/>
    </Container>
  )
}

export default FormField