import { useState } from "react"

const useForm = (defaultFormObject) => {
  const [formObject, setFormObject] = useState(defaultFormObject)

  const submit = (e) => {
    e.preventDefault()
    console.log(formObject)
  }

  const updateForm = (e) => {
    setFormObject({...formObject, [e.target.name]: e.target.value})
  }

  return [formObject, submit, updateForm]
}

export default useForm