import {
  AUTH_ERROR,
  CLEAR_AUTH_ERROR,
  FINISH_LOADING,
  GOOGLE_LOGIN_SUCCESSFULLY,
  LOGIN_SUCCESSFULLY,
  REGISTERED_USER_SUCCESSFULLY,
  SIGN_OUT_SUCCESSFULLY,
  START_LOADING,
} from '../../types'

const initialState = {
  registeredUser: null,
  submitting: false,
  authErrorMsg: '',
  userLogged: null,
}

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESSFULLY:
      return {
        ...state,
        userLogged: { ...payload },
        authErrorMsg: '',
        registeredUser: null,
      }
    case GOOGLE_LOGIN_SUCCESSFULLY:
      return {
        ...state,
        userLogged: { ...payload },
        authErrorMsg: '',
      }
    case REGISTERED_USER_SUCCESSFULLY:
      return {
        ...state,
        registeredUser: payload,
        authErrorMsg: '',
      }
    case SIGN_OUT_SUCCESSFULLY:
      return {
        ...state,
        userLogged: null,
        authErrorMsg: '',
      }
    case AUTH_ERROR:
      return {
        ...state,
        authErrorMsg: payload,
      }
    case CLEAR_AUTH_ERROR:
      return {
        ...state,
        authErrorMsg: payload,
      }
    case START_LOADING:
      return {
        ...state,
        submitting: true,
        authErrorMsg: '',
      }
    case FINISH_LOADING:
      return {
        ...state,
        submitting: false,
      }
    default:
      return state
  }
}
