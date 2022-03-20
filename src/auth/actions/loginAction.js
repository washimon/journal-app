import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/config'
import { LOGIN_SUCCESSFULLY } from '../../types'

export const loginAction = (email, password) => {
  return async (dispatch) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password)
      dispatch(
        loginSuccesfully(user.uid, user.displayName || 'Supuestamente washimon')
      )
    } catch (error) {}
  }
}

const loginSuccesfully = (uid, displayName) => ({
  type: LOGIN_SUCCESSFULLY,
  payload: { uid, displayName },
})
