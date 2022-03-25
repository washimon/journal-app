import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../../firebase/config'
import { REGISTERED_USER_SUCCESSFULLY } from '../../types'
import { startLoading, finishLoading, authError } from './uiAction'

export const registerAction = ({ firstName, lastName, email, password }) => {
  return async (dispatch) => {
    dispatch(startLoading())
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      console.log(user)
      const userDisplayName = {
        displayName: `${firstName.split(' ').at(0)} ${lastName
          .split(' ')
          .at(0)}`,
      }
      await updateProfile(user, userDisplayName)
      dispatch(registeredUserSuccessfully(user.email))

      return true
    } catch (error) {
      dispatch(authError('No se pudo registrar. Inténtelo nuevamente.'))

      return false
    } finally {
      dispatch(finishLoading())
    }
  }
}

const registeredUserSuccessfully = (userEmail = '') => ({
  type: REGISTERED_USER_SUCCESSFULLY,
  payload: userEmail,
})
