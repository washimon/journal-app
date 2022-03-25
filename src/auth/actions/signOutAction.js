import { signOut } from 'firebase/auth'
import { auth } from '../../firebase/config'
import { SIGN_OUT_SUCCESSFULLY } from '../../types'
import { authError, finishLoading, startLoading } from './uiAction'

export const signOutAction = () => {
  return async (dispatch) => {
    dispatch(startLoading())
    try {
      await signOut(auth)
      dispatch(signOutSuccessfully(null))

      return true
    } catch (error) {
      const errorMsg = error.message
      dispatch(authError(errorMsg))

      return false
    }
    finally {
      dispatch(finishLoading())
    }
  }
}

const signOutSuccessfully = (userLogged) => ({
  type: SIGN_OUT_SUCCESSFULLY,
  payload: userLogged,
})
