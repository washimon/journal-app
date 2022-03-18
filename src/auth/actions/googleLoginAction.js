import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../firebase/config'
import { GOOGLE_LOGIN_SUCCESSFULLY } from '../../types'

export const googleLoginAction = () => {
  return async (dispatch) => {
    try {
      const { user } = await signInWithPopup(auth, provider)
      console.log({ user })
      dispatch(googleLoginSuccesfully(user.uid, user.displayName))
    } catch (error) {
      const errCode = error.code
      const errMessage = error.message
      console.log({ errCode, errMessage })
    }
  }
}

const googleLoginSuccesfully = (uid, displayName) => ({
  type: GOOGLE_LOGIN_SUCCESSFULLY,
  payload: { uid, displayName },
})
