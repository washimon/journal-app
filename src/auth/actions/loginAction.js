import { LOGIN_SUCCESSFULLY } from '../../types'

export const loginAction = (email, password) => {
  return (dispatch) => {
    dispatch(loginSuccesfully('123ABC', 'washimon'))
  }
}

const loginSuccesfully = (uid, displayName) => ({
  type: LOGIN_SUCCESSFULLY,
  payload: { uid, displayName },
})
