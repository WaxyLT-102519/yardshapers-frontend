import styled from "styled-components"
import useForm from "../../hooks/useForm"

import FormField from "../../components/FormField/FormField"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const Card = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin: 20px;
  padding: 3em;
  border: ${props => props.theme.card.border.style};
  border-radius: ${props => props.theme.card.border.radius};
  width: 75%;
  background-color: white;
`

const FormTitle = styled.span`
  font-size: x-large;
`

const HorizontalRule = styled.div`
  border-top: 2px solid black;
  width: 100%;
  max-height: 0;
`

const JobRequestForm = styled.form`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  width: 100%;
`

const TextAreaContainer = styled.div`
  padding-top: 20px;
`

const TextArea = styled.textarea`
  resize: none;
  width: 100%;
`

const ContactUs = () => {

  const emptyJobRequest = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    description: ''
  }

  const [jobRequest, submit, updateForm] = useForm(emptyJobRequest)

  const inputTags = [
    {
      htmlId: 'first-name',
      label: 'First Name',
      attributes: {
        type: 'text',
        name: 'firstName',
        value: jobRequest.firstName,
        onChange: updateForm
      }
    },
    {
      htmlId: 'last-name',
      label: 'Last Name',
      attributes: {
        type: 'text',
        name: 'lastName',
        value: jobRequest.lastName,
        onChange: updateForm
      }
    },
    {
      htmlId: 'phone-number',
      label: 'Phone Number',
      attributes: {
        type: 'tel',
        name: 'phoneNumber',
        value: jobRequest.phoneNumber,
        onChange: updateForm
      }
    },
    {
      htmlId: 'email',
      label: 'Email',
      attributes: {
        type: 'email',
        name: 'email',
        value: jobRequest.email,
        onChange: updateForm
      }
    }
  ]

  return (
    <Container>
      <Card>
        <FormTitle>Add Curb Appeal to Your Lawn Today!</FormTitle>
        <HorizontalRule></HorizontalRule>
        <JobRequestForm onSubmit={submit}>
          {inputTags.map((input, i) => {
            return (
              <FormField 
                key={i} 
                fieldId={input.htmlId} 
                inputAttributes={input.attributes}
              >
                {input.label}
              </FormField>
            )
          })}
          <TextAreaContainer>
            <label htmlFor="description">How Can We Help You?</label>
            <TextArea 
              id="description"
              name="description"
              rows="5"
              value={jobRequest.description}
              onChange={updateForm}
            />
          </TextAreaContainer>
          <button type="submit">Submit</button>
        </JobRequestForm>
      </Card>
    </Container>
  )
}

export default ContactUs