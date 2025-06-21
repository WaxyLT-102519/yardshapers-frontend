import styled from "styled-components"
import useForm from "../hooks/useForm"

import FormField from "../components/FormField/FormField"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  padding: 3em;
  box-shadow: ${props => props.theme.card.shadow};
  border-radius: ${props => props.theme.card.border};
  width: 75%;
`

const JobRequestForm = styled.form`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const ContactUs = () => {

  const emptyJobRequest = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    address: '',
    address2: '',
    zipCode: '',
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
    },
    {
      htmlId: 'address',
      label: 'Address',
      attributes: {
        type: 'text',
        name: 'address',
        value: jobRequest.address,
        onChange: updateForm
      }
    },
    {
      htmlId: 'address-2',
      label: 'Address (cont.)',
      attributes: {
        type: 'text',
        name: 'address-2',
        value: jobRequest.address2,
        onChange: updateForm
      }
    },
    {
      htmlId: 'zip-code',
      label: 'Zip Code',
      attributes: {
        type: 'number',
        name: 'zipCode',
        value: jobRequest.zipCode,
        onChange: updateForm
      }
    }
  ]

  return (
    <Container>
      <Card>
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
          <label htmlFor="description">How Can We Help You?</label>
          <textarea 
            id="description"
            name="description"
            value={jobRequest.description}
            onChange={updateForm}
          />
          <button type="submit">Submit</button>
        </JobRequestForm>
      </Card>
    </Container>
  )
}

export default ContactUs