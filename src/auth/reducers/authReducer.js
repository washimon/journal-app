import { GOOGLE_LOGIN_SUCCESSFULLY, LOGIN_SUCCESSFULLY } from '../../types'

const initialState = {
  uid: '',
  displayName: '',
}

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESSFULLY:
      return {
        ...state,
        uid: payload.uid,
        displayName: payload.displayName,
      }
    case GOOGLE_LOGIN_SUCCESSFULLY:
      return {
        ...state,
        uid: payload.uid,
        displayName: payload.displayName,
      }
    default:
      return state
  }
}
