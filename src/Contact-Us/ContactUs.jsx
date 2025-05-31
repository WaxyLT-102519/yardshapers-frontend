import { useState } from "react"
import styled from "styled-components"

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
  width: 75%;
`

const JobRequestForm = styled.form`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`

const ContactUs = () => {

  const emptyJobRequest = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    description: ''
  }

  const [jobRequest, setJobRequest] = useState(emptyJobRequest)

  const submit = (e) => {
    e.preventDefault()
    console.log(jobRequest)
  }

  const updateForm = (e) => {
    setJobRequest({...jobRequest, [e.target.name]: e.target.value})
  }

  return (
    <Container>
      <Card>
        <JobRequestForm onSubmit={submit}>
          <label htmlFor="first-name">First Name</label>
          <input 
            id="first-name" 
            type="text" 
            name="firstName"
            value={jobRequest.firstName} 
            onChange={updateForm} 
          />
          <label htmlFor="last-name">Last Name</label>
          <input 
            id="last-name" 
            type="text" 
            name="lastName"
            value={jobRequest.lastName} 
            onChange={updateForm} 
          />
          <label htmlFor="phone-number">Phone Number</label>
          <input 
            id="phone-number" 
            type="tel" 
            name="phoneNumber"
            value={jobRequest.phoneNumber} 
            onChange={updateForm} 
          />
          <label htmlFor="email">Email Address</label>
          <input 
            id="email" 
            type="email" 
            name="email"
            value={jobRequest.email} 
            onChange={updateForm} 
          />
          <label htmlFor="description">What would you like us to do for your lawn?</label>
          <textarea
            id="desciption"
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