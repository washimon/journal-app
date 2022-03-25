import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../firebase/config'
import { GOOGLE_LOGIN_SUCCESSFULLY } from '../../types'
import { authError, finishLoading, startLoading } from './uiAction'

export const googleLoginAction = () => {
  return async (dispatch) => {
    dispatch(startLoading())
    try {
      const { user } = await signInWithPopup(auth, provider)
      // console.log({ user })
      dispatch(googleLoginSuccesfully(user.uid, user.displayName))

      return true
    } catch (error) {
      // const errCode = error.code
      dispatch(authError('No se pudo autenticar mediante Google.'))

      return false
    } finally {
      dispatch(finishLoading())
    }
  }
}

const googleLoginSuccesfully = (uid, displayName) => ({
  type: GOOGLE_LOGIN_SUCCESSFULLY,
  payload: { uid, displayName },
})
