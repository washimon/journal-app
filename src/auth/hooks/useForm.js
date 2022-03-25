import { useState } from 'react'
import { getErrorFromField, getErrorsFromForm } from '../helpers'

const convertInitialToFields = (initialForm) => {
  const customObject = {}
  Object.keys(initialForm).forEach((val) => {
    customObject[val] = false
  })

  return customObject
}

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm)
  const [formErrors, setFormErrors] = useState({})
  const [fieldsClicked, setFieldsClicked] = useState(
    convertInitialToFields(initialForm)
  )

  const handlePasswordInput = (name, value) => {
    if (fieldsClicked['password'] && name === 'repeatPassword') {
      if (formState.password !== value) {
        setFormErrors({
          ...formErrors,
          repeatPassword: 'Las contraseñas no coinciden',
        })
      } else {
        const newFormErrors = { ...formErrors }
        delete newFormErrors.repeatPassword
        setFormErrors({ ...newFormErrors })
      }
    }
    if (fieldsClicked['repeatPassword'] && name === 'password') {
      if (formState.repeatPassword !== value) {
        setFormErrors({
          ...formErrors,
          repeatPassword: 'Las contraseñas no coinciden',
        })
      } else {
        const newFormErrors = { ...formErrors }
        delete newFormErrors.repeatPassword
        setFormErrors({ ...newFormErrors })
      }
    }
  }

  const handleInputChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setFormState({
      ...formState,
      [name]: value,
    })
    fieldsClicked[name] && validateField(name, value)

    handlePasswordInput(name, value)
  }

  const handleInputBlur = (e) => {
    const name = e.target.name
    const value = e.target.value

    setFieldsClicked({
      ...fieldsClicked,
      [name]: true,
    })
    validateField(name, value)
    handlePasswordInput(name, value)
  }

  const resetForm = () => {
    setFormState(initialForm)
    setFormErrors({})
    setFieldsClicked(convertInitialToFields(initialForm))
  }

  const validateForm = (form) => {
    setFormErrors({
      ...getErrorsFromForm(form, formErrors),
    })
  }
  const validateField = (name, value) => {
    setFormErrors({
      ...getErrorFromField(name, value, formErrors),
    })
  }

  const setInitialEmail = (email = '') => {
    setFormState({
      ...formState,
      email,
    })
  }

  return {
    formState,
    formErrors,
    handleInputChange,
    handleInputBlur,
    validateForm,
    resetForm,
    setInitialEmail,
  }
}
