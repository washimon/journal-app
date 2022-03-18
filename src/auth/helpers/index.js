export const getErrorsFromForm = (form, formErrors) => {
  let errors = formErrors

  const fields = Object.entries(form)
  fields.forEach((field) => {
    errors = {
      ...errors,
      ...getErrorFromField(field[0], field[1], errors),
    }
  })
  
  return errors
}

export const getErrorFromField = (name, value, formErrors) => {
  switch (name) {
    case 'firstName':
      !value.trim() ? (formErrors[name] = 'Requerido') : delete formErrors[name]
      break
    case 'lastName':
      !value.trim() ? (formErrors[name] = 'Requerido') : delete formErrors[name]
      break
    case 'email':
      const regexEmail = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/
      !value
        ? (formErrors[name] = 'Requerido')
        : !regexEmail.test(value)
        ? (formErrors[name] = 'Inválido')
        : delete formErrors[name]
      break
    case 'password':
      const regexPass = /^[\w]{3}[\S]+$/
      !value
        ? (formErrors[name] = 'Requerido')
        : !regexPass.test(value)
        ? (formErrors[name] = '4 caracteres como mínimo y sin espacios')
        : delete formErrors[name]
      break
    default:
      break
  }

  return formErrors
}
