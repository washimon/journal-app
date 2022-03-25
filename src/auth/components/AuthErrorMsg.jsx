import React from 'react'

export const AuthErrorMsg = ({ message = '' }) => {
  return (
    <span className='auth-error-msg'>{message}</span>
  )
}
