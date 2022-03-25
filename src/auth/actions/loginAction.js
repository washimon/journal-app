import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/config'
import { LOGIN_SUCCESSFULLY } from '../../types'
import { startLoading, finishLoading, authError } from './uiAction'

export const loginAction = (email, password) => {
  return async (dispatch) => {
    dispatch(startLoading())
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password)
      dispatch(loginSuccesfully(user.uid, user.displayName || 'Bienvenid@'))

      return true
    } catch (error) {
      dispatch(authError('El email o la contraseña es inválida. Intente otra vez.'))

      return false
    } finally {
      dispatch(finishLoading())
    }
  }
}

export const loginSuccesfully = (uid, displayName) => ({
  type: LOGIN_SUCCESSFULLY,
  payload: { uid, displayName },
})
