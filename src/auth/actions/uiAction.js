import {
  AUTH_ERROR,
  CLEAR_AUTH_ERROR,
  FINISH_LOADING,
  START_LOADING,
} from '../../types'

export const startLoading = () => ({
  type: START_LOADING,
})
export const finishLoading = () => ({
  type: FINISH_LOADING,
})

export const authError = (authErrorMsg = '') => ({
  type: AUTH_ERROR,
  payload: authErrorMsg,
})
const clearAuthError = () => ({
  type: CLEAR_AUTH_ERROR,
  payload: '',
})

export const clearAuthErrorAction = () => {
  return (dispatch) => {
    dispatch(clearAuthError())
  }
}
