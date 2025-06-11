

const FormField = ({children, fieldId, inputAttributes}) => {
  return (
    <div>
      <label htmlFor={fieldId}><small>{children}</small></label>
      <input {...inputAttributes}/>
    </div>
  )
}

export default FormField