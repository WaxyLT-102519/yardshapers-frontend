import { useState } from "react"

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
  }

  const updateForm = (e) => {
    setJobRequest({...jobRequest, [e.target.name]: e.target.value})
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input 
          id="first-name" 
          type="text" 
          name="firstName"
          value={jobRequest.firstName} 
          onChange={updateForm} 
        />
        <input 
          id="last-name" 
          type="text" 
          name="lastName"
          value={jobRequest.lastName} 
          onChange={updateForm} 
        />
        <input 
          id="phone-number" 
          type="tel" 
          name="phoneNumber"
          value={jobRequest.phoneNumber} 
          onChange={updateForm} 
        />
        <input 
          id="email" 
          type="email" 
          name="email"
          value={jobRequest.email} 
          onChange={updateForm} 
        />
        <textarea
          id="desciption"
          name="description"
          value={jobRequest.description}
          onChange={updateForm}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default ContactUs